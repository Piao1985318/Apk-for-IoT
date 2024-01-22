/**
 * 포인트내역 테이블
 */
module.exports = (sequelize, Sequelize) => {
    const Points = sequelize.define("points", {
        user_id: {
            type: Sequelize.INTEGER,      // 사용자 아이디
        },
        product_id: {
            type: Sequelize.INTEGER,      // 공구 아이디
        },
        product_name: {
            type: Sequelize.STRING,       // 구매/적립당시의 네임으로 기록
        },
        sales_id: {
            type: Sequelize.INTEGER,      // 판매내역 아이디
        },
        type: {
            type: Sequelize.STRING,      // 포인트 형태, 적립 -> "received", 사용 -> "used"
        },
        amount: {
            type: Sequelize.INTEGER,      // 적립/사용액수
        },
        created: {
            type: Sequelize.DATE,
        },
    }, {
        timestamps: false,
        underscored: true,
    });
    return Points;
};