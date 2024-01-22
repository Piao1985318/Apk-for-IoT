/**
 * 판매테이블
 */
module.exports = (sequelize, Sequelize) => {
    const SalesHistory = sequelize.define("salesHistory", {
        user_id: {
            type: Sequelize.INTEGER,      // 구매자 아이디
        },
        product_id: {
            type: Sequelize.INTEGER,      // 상품 아이디
        },
        old_product_id: {                 // 판매정산내역을 위한 파라미터
            type: Sequelize.INTEGER,      // 공구종료시점에서 공구레코드를 ProductHistory테이블에 이관시키고 이 필드에 반영하기
        },
        final_ended: {
            type: Sequelize.DATE,          // 정산일 당일 시점에서 업뎃시키기, 초기 생성시 디폴트로 null
        },
        purchase_details: {
            type: Sequelize.STRING,        // 구매내역 상세
        },
        payment_amount: {
            type: Sequelize.DOUBLE,        // 결제금액
        },
        discount: {
            type: Sequelize.DOUBLE,        // 할인 포인트
        },
        buyer_phone: {
            type: Sequelize.STRING,        // 구매자 폰번호
        },
        buyer_address: {
            type: Sequelize.STRING,        // 구매자 주소
        },
        payment_method: {
            type: Sequelize.STRING,        // 결제수단
        },
        apply_point: {
            type: Sequelize.INTEGER,       // 공구종료시 구매자에게 할당될 포인트
        },
        none_method: {
            type: Sequelize.STRING         // 전달방법 있으면 null, 없으면 "none"
        },
        delivery_date: {
            type: Sequelize.DATE,          // 공구 전달 날짜
        },
        created: {
            type: Sequelize.DATE,          // 구매일짜
        },
        deleted: {
            type: Sequelize.DATE,          // 삭제일짜
        },
        tid: {
            type: Sequelize.STRING         // 전달방법 있으면 null, 없으면 "none"
        },
    }, {
        timestamps: false,
        underscored: true,
    });
    return SalesHistory;
};