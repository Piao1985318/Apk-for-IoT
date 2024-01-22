const express = require("express");
const router = express.Router();
const {Op, Sequelize} = require("sequelize");
const db = require("../models");
const Alarms = db.alarms;
const Products = db.products;
const ProductContents = db.productContents;
const ProductHistories = db.productHistories;
const SalesHistories = db.salesHistories;
const Togethers =db.togethers;
const Users = db.users;
const Points = db.points;

const cron = require('node-cron');
// push
const sendFCM = require("../utils/sendPush");

/**
 * 5분당 푸시알람 테이블 체크
 * 5분당 이용권 현황 테이블 체크
 */
cron.schedule('* * * * *', async () => {
    console.log('Checking DB per every 1 minutes', new Date().getHours(), 'h ', new Date().getMinutes(), "m ", new Date().getSeconds(), 's');

    let current = new Date().getTime();
    let lenOneDay = 24 * 60 * 60 * 1000;
    let lenOneMinute = 60 * 1000;
    let title;
    let content;
    let user_id;
    let token;
    let product_id;
    /**
     * 공구 / 함께 해요 상태별로 리스트 체크하기
     */
    let temp = await Products.findAll({
        where: {
            deleted: null,
            ended_date: { [Op.ne]: null },         // 함께 해요의 경우 종료날짜 확정됨
            state: { [Op.ne]: 5 },                 // 정산일이 아직 안된 공구상태
        },
        include: [{
            as: 'saleUser',
            model: Users,
            where: { deleted: null, },
            attributes: [ 'push_token', 'comment_notification', 'angol_notification', 'tool_notification', 'delivery_notification' ],
            required: true,
        }, {
            as: "salesHistories",
            model: SalesHistories,
            where: { old_product_id: null, },                    // 종료기간이 안된 현재 진행중인 히스토리만
            include: [{
                as: "purchaseUser",                              // 판매된 히스토리
                model: Users,
                where: { deleted: null, },
                attributes: ['push_token', 'points', 'comment_notification', 'angol_notification', 'tool_notification', 'delivery_notification'],
            }],
            order: [['created', 'DESC']],
            attributes: [ 'id', 'user_id', 'created', 'apply_point' ],
            required: false,
        }, {
            as: "togethers",
            model: Togethers,
            attributes: ['id', 'user_id', 'created',],
            required: false,
        }],
        order: [['id', 'ASC']],
    });

    for ( let k = 0; k < temp.length; k ++ ) {
        title = '';
        content = '';
        user_id = '';
        token = '';
        product_id = '';

        if ( temp[ k ].product_role === "together" && temp[ k ].state === 1 && temp[ k ].ended_date ) {
            /**
             * 함께해요 종료상태
             */
            let ended_date = new Date( temp[k].ended_date ).getTime();
            if ( current >= ended_date && current < ended_date + lenOneMinute ) {
                await Products.update({
                    state: 5,
                    updated: new Date().toUTCString(),
                }, {
                    where: {
                        id: temp[ k ].id,
                    }
                });
                let togethers = temp[ k ].togethers;
                for ( let i = 0; i < togethers.length; i ++ ) {
                    await Togethers.update({
                        final_ended: new Date().toUTCString(),
                    }, {
                        where: { id: Number( togethers[ i ].id ) }
                    })
                }
                /**
                 *  함께해요 종료시 게시자에게 알림보내기
                 */
                title =  "[함께해요] " + temp[ k ].details;
                content = "함께해요! 가 정원모집이 완료되었어요.";
                if ( temp[ k ].user_id ) {
                    await Alarms.create({
                        user_id: Number( temp[ k ].user_id ),
                        product_role: "together",
                        product_id: Number( temp[ k ].id ),
                        title: title,
                        contents: content,
                        created: new Date().toUTCString(),
                    });
                    if ( temp[ k ].saleUser.push_token && temp[ k ].saleUser.tool_notification ) {
                        const push_message = {
                            type: "TOGETHER FINISHED",
                            title: title,
                            body: content,
                            product_role: "together",
                            product_id: Number( temp[ k ].id ),
                            token: [ temp[ k ].saleUser.push_token ],
                        };
                        await sendFCM(push_message);
                    }
                }
                console.log(current, " = current", ended_date, " = ended_date", "함께해요 종료시 게시자에게 알림보내기 성공");
            }
        }
        if ( temp[ k ].state === 4 && temp[ k ].product_role === "product" ) {
            /**
             * 종료 <-> 정산일사이에 있는 공구로서 정산일 완료상태
             */
            let settlement_date = new Date( temp[k].settlement_date ).getTime();
            if ( current >= settlement_date && current < settlement_date + lenOneMinute ) {
                await Products.update({
                    state: 5,
                    updated: new Date().toUTCString(),
                }, {
                    where: {
                        id: temp[ k ].id,
                    }
                });
            }
        } else if ( (temp[ k ].state === 3 && temp[ k ].product_role === "product") || ( temp[ k ].state === 2 && temp[k].product_role === "product" && temp[ k ].method === 1 ) ) {
            /**
             * 배달 <-> 종료일 사이에 있는 공구로서 공구종료상태
             */
            let ended_date = new Date( temp[k].ended_date ).getTime();
            if ( current >= ended_date && current < ended_date + lenOneMinute ) {
                await Products.update({
                    state: 4,
                    updated: new Date().toUTCString(),
                }, {
                    where: {
                        id: temp[ k ].id,
                    }
                });
                /**
                 * 구매자들에게 적립포인트 적용하기
                 */
                let sales = temp[ k ].salesHistories;
                for ( let i = 0; i < sales.length; i ++ ) {
                    if ( sales[i].purchaseUser.points + sales[i].apply_point > 0 ) {
                        await Users.update({
                            points: sales[i].purchaseUser.points + sales[i].apply_point,
                            updated: new Date().toUTCString(),
                        }, {
                            where: { id: Number( sales[i].user_id ) }
                        });
                        /**
                         * 적립 포인트 기록하기
                         * 공구종료시의 공구명으로 기록
                         */
                        if ( Number( sales[i].apply_point ) > 0 ) {
                            await Points.create({
                                user_id: Number( sales[i].user_id ),
                                product_id: temp[ k ].id,
                                product_name: temp[ k ].name,
                                sales_id: sales.id,
                                type: "received",
                                amount: Number( sales[i].apply_point ),
                                created: new Date().toUTCString(),
                            });
                        }
                    }
                }
                /**
                 * ProductHistory테이블에 레코드추가하기(이관시키기)
                 */
                let product_content = await ProductContents.findAll({
                    where: {
                        product_id: Number( temp[ k ].id ),
                    },
                    attributes: ['role', 'name', 'price'],
                });
                let history = {
                    product_id: temp[k].id,
                    user_id: temp[k].user_id,
                    counts: temp[k].counts,
                    method: temp[k].method,

                    registered: temp[k].created,
                    finish_date: temp[k].finish_date,
                    delivery_date: temp[k].delivery_date,
                    settlement_date: temp[k].settlement_date,
                    ended_date: temp[k].ended_date,

                    images: temp[k].images,
                    thumbnails: temp[k].thumbnails,
                    name: temp[k].name,
                    details: temp[k].details,
                    ended_state: "progressing",
                    p_apply_percentage: temp[k].p_apply_percentage,
                    settlement_period: temp[k].settlement_period,
                    brokerage_fee: temp[k].brokerage_fee,
                    range: temp[k].range,
                    latitude: temp[k].latitude,
                    longitude: temp[k].longitude,
                    address: temp[k].address,
                    address_detail: temp[k].address_detail,
                    product_content: JSON.stringify( product_content ),
                    created: new Date().toUTCString(),
                };
                /**
                 * old_product_id를 salesHistories테이블에 기록하기
                 * 공구종료시점부터 판매히스토리는 이 테이블에 따라 체크할것
                 */
                await ProductHistories.create( history ).then( async item => {
                    let old_product_id = item.id;
                    for ( let i = 0; i < sales.length; i ++ ) {
                        if ( sales[ i ].id ) {
                            await SalesHistories.update({
                                old_product_id: old_product_id,
                            }, {
                                where: { id: Number( sales[ i ].id ) }
                            });
                        }
                    }
                }).catch( err => {
                    console.log( err.toString());
                });
                console.log( temp[k].id, ' = 공구종료상태 업뎃시키기 ' );
            }
        } else if ( temp[ k ].state === 2 && temp[ k ].product_role === "product" && temp[ k ].method !== 1 ) {
            /**
             * 마감일 <-> 픽업/배달일 사이에 있는 공구
             */
            let delivery_date = new Date( temp[k].delivery_date ).getTime();
            let delivery_date_before_one = delivery_date - lenOneDay;
            let m = new Date( temp[ k ].delivery_date ).getMonth() + 1;
            let d = new Date( temp[ k ].delivery_date ).getDate();

            if ( current >= delivery_date_before_one && current < delivery_date_before_one + lenOneMinute ) {
                /**
                 * 픽업, 배달 하루전 알림
                 */
                title = "[공구마켓] " + temp[ k ].name;
                content = ( temp[ k ].method === 2 ? "픽업일" : "배달일(" ) + m + "/" + d + "일)이 다가오고 있어요.";
                user_id = temp[ k ].user_id;
                token = temp[ k ].saleUser.push_token;
                product_id = temp[ k ].id;
                /**
                 * 판매자 알림
                 */
                await Alarms.create({
                    user_id: Number( user_id ),
                    product_role: "product",
                    product_id: Number( product_id ),
                    title: title,
                    contents: content,
                    created: new Date().toUTCString(),
                });
                if ( token && temp[ k ].saleUser.delivery_notification ) {
                    const push_message = {
                        type: "BEFORE ONE DAY",
                        title: title,
                        body: content,
                        product_role: "product",
                        product_id: Number( product_id ),
                        token: [ token ],
                    };
                    await sendFCM(push_message);
                }
                /**
                 * 구매자 알림
                 */
                let salesHistories = temp[ k ].salesHistories;
                let tokensArray = [];
                for ( let i = 0; i < salesHistories.length; i ++ ) {
                    if ( salesHistories[ i ].user_id ) {
                        await Alarms.create({
                            user_id: Number( salesHistories[ i ].user_id ),
                            product_role: "product",
                            product_id: Number( product_id ),
                            title: title,
                            contents: content,
                            created: new Date().toUTCString(),
                        });
                        if ( salesHistories[ i ].purchaseUser.push_token && salesHistories[ i ].purchaseUser.delivery_notification )
                            tokensArray.push( salesHistories[ k ].purchaseUser.push_token );
                    }
                }
                if ( tokensArray.length > 0 ) {
                    const push_message = {
                        type: "DELIVERY",
                        title: title,
                        body: content,
                        product_role: "product",
                        product_id: Number( product_id ),
                        token: tokensArray,
                    };
                    await sendFCM(push_message);
                }
                console.log("공구 픽업/배달 하루전 알림 ", temp[ k ].id);
            } else if ( current >= delivery_date && current < delivery_date + lenOneMinute ) {
                /**
                 * 픽업, 배달 당일 알림
                 */
                product_id = temp[ k ].id;
                if ( temp[ k ].method !== 1  ) {
                    title = "[공구마켓] " + temp[ k ].name;
                    user_id = temp[ k ].user_id;
                    token = temp[ k ].saleUser.push_token;
                    content = temp[ k ].method === 2 ? "오늘은 픽업일입니다. 꼼꼼하게 상품을 준비해주세요." : "오늘은 배달일입니다. 꼼꼼하게 상품을 배달해주세요.";

                    //state: temp[k].none_method ? 4 : 2,                    // 전달방법이 없으면 종료상태로, 있으면 픽업/배달중으로
                    /**
                     * 판매자 알림
                     */
                    await Alarms.create({
                        user_id: Number( user_id ),
                        product_role: "product",
                        product_id: Number( product_id ),
                        title: title,
                        contents: content,
                        created: new Date().toUTCString(),
                    });
                    if ( token && temp[ k ].saleUser.delivery_notification ) {
                        const push_message = {
                            type: "BEFORE ONE DAY",
                            title: title,
                            body: content,
                            product_role: "product",
                            product_id: Number( product_id ),
                            token: [ token ],
                        };
                        await sendFCM(push_message);
                    }
                    /**
                     * 구매자 알림
                     */
                    let salesHistories = temp[ k ].salesHistories;
                    let tokensArray = [];
                    content = temp[ k ].method === 2 ? "오늘은 구매하신 상품을 받아가세요." : "구매하신 상품을 오늘 배달해요.";
                    for ( let i = 0; i < salesHistories.length; i ++ ) {
                        if ( salesHistories[ i ].user_id ) {
                            await Alarms.create({
                                user_id: Number( salesHistories[ i ].user_id ),
                                product_role: "product",
                                product_id: Number( product_id ),
                                title: title,
                                contents: content,
                                created: new Date().toUTCString(),
                            });
                            if ( salesHistories[ i ].purchaseUser.push_token && salesHistories[ i ].purchaseUser.delivery_notification )
                                tokensArray.push( salesHistories[ k ].purchaseUser.push_token );
                        }
                    }
                    if ( tokensArray.length > 0 ) {
                        const push_message = {
                            type: "DELIVERY",
                            title: title,
                            body: content,
                            product_role: "product",
                            product_id: Number( product_id ),
                            token: tokensArray,
                        };
                        await sendFCM(push_message);
                    }
                }

                await Products.update({
                    state: 3,
                    updated: new Date().toUTCString(),
                }, {
                    where: { id: Number( product_id ) }
                });
                console.log("공구 픽업/배달 당일 알림 ", temp[ k ].id );
            }
        } else if ( temp[ k ].state === 1 && temp[ k ].product_role === "product" ) {
            /**
             * 등록일 <-> 마감일 사이에 있는 공구
             */
            let finish_date = new Date( temp[k].finish_date ).getTime();

            if ( current >= finish_date && current < finish_date + lenOneMinute ) {
                title = "[공구마켓] " + temp[ k ].name;
                content = '공구가 마감되었어요. 공구 참여자를 확인해주세요.';
                user_id = temp[ k ].user_id;
                token = temp[ k ].saleUser.push_token;
                product_id = temp[ k ].id;

                await Alarms.create({
                    user_id: Number( user_id ),
                    product_role: "product",
                    product_id: Number( product_id ),
                    contents: content,
                    title: title,
                    created: new Date().toUTCString(),
                });
                await Products.update({
                    state: temp[ k ].method !== 1 ? 2 : 5,
                    updated: new Date().toUTCString(),
                }, {
                    where: { id: Number( product_id ) }
                });
                if ( token && temp[ k ].saleUser.tool_notification ) {
                    const push_message = {
                        type: "PRODUCT FINISHED",
                        title: title,
                        body: content,
                        product_role: "product",
                        product_id: Number( product_id ),
                        token: [ token ],
                    };
                    await sendFCM(push_message);
                }
                console.log("공구 마감 알림 ", temp[ k ].id);
            }
        }
    }


    /**
     * 종료된 공구의 정산기간 체크하기
     */
    let tempHistory = await ProductHistories.findAll({
        where: {
            ended_state: "progressing",                       // 함께 해요의 경우 종료날짜 확정됨
        },
        include: [{
            as: "histories",
            model: SalesHistories,
            where: { final_ended: null, },                    // 정산기간이 안된것만 필터하기
            required: false,
        }]
    });
    for ( let k = 0; k < tempHistory.length; k ++ ) {
        let settlement_date = new Date( tempHistory[k].settlement_date ).getTime();

        if ( current >= settlement_date && current < settlement_date + lenOneMinute ) {
            // 공구히스토리 업뎃시키기
            await ProductHistories.update({
                ended_state: "end",
            }, {
                where: {
                    id: Number( tempHistory[ k ].id ),
                }
            });
            console.log( "정산기간 만료됨", tempHistory[k].id );
            // 판매내역 업뎃시키기
            let histories = tempHistory[k].histories;
            for ( let i = 0; i < histories.length; i ++ ) {
                await SalesHistories.update({
                    final_ended: new Date().toUTCString(),
                }, {
                    where: {
                        id: Number( tempHistory[k].histories[i].id )
                    }
                })
            }
        }
    }
});

/**
 * 내가 받은 알람리스트 얻기
 */
router.all("/get-list", async (req, res) => {
    try {
        console.log( req.body.jwt_data.id, "내가 받은 알람리스트 얻기");
        let list = await Alarms.findAll({
            where: {
                user_id: req.body.jwt_data.id,
            },
            order: [['created', 'DESC']],
        });
        return res.status(200).json({ status: true, results: list });
    } catch (e) {
        return res.status(200).json({ status: false, msg: [ e.toString()] });
    }
});
/**
 * 받은 알람 삭제하기,
 * 배열로 요청하기
 */
router.all("/delete", async (req, res) => {
    try {
        console.log( req.body.jwt_data.id, "받은 알람삭제하기");
        if ( !req.body.ids )
            return res.status(200).json({ status: false, msg: ['삭제할 알람을 선택하세요']});
        await Alarms.destroy({
            where: {
                id: req.body.ids,
                user_id: req.body.jwt_data.id,
            }
        });
        return res.status(200).json({ status: true, msg: ['선택된 알람이 성공적으로 삭제되었숩니다'] });
    } catch (e) {
        return res.status(200).json({ status: false, msg: [ e.toString()] });
    }
});

module.exports = router;