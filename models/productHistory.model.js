/**
 * 픽업/배달일이 지난(종료된) 공구 내역
 */
module.exports = (sequelize, Sequelize) => {
    const ProductHistories = sequelize.define("productHistories", {
        product_id: {
            type: Sequelize.INTEGER,  // 이전 공구 아이디로
        },
        user_id: {
            type: Sequelize.INTEGER,
        },

        registered: {
            type: Sequelize.DATE,     // 공구 판매일자 = 등록일자 = 재시작일자
        },
        finish_date: {
            type: Sequelize.DATE,     // 공구 종료기간( 금일부터 5일기간으로 선택처리 )
        },
        ended_date: {
            type: Sequelize.DATE,     // 종료일
        },
        ended_state: {
            type: Sequelize.STRING,   // 정산기간까지 완료되면 end, 아니면 디폴트로 null,
            defaultValue: "progressing",
        },
        settlement_date: {
            type: Sequelize.DATE,     // 정산일
        },
        counts: {
            type: Sequelize.INTEGER,  // 참여인원수(최대 100명까지)
        },
        method: {
            type: Sequelize.INTEGER,  // 상품전달방법( 1: 없음, 2: 픽업, 3: 배달 )
        },
        delivery_date: {
            type: Sequelize.DATE,     // 픽업 / 배달일( 공구기간이후로 설정해야 함, method가 1인 경우는 예외)
        },
        images: {
            type: Sequelize.TEXT,    // 상품 사진 리스트(최대 4장까지)
        },
        thumbnails: {
            type: Sequelize.TEXT,    // 상품사진 썸네일리스트
        },
        name: {
            type: Sequelize.STRING,    // 상품명
        },
        details: {
            type: Sequelize.TEXT,     // 상품 설명
        },
        p_apply_percentage: {
            type: Sequelize.DOUBLE,     // 적용 적립율
        },
        settlement_period: {
            type: Sequelize.INTEGER,    // 정산일기간
        },
        brokerage_fee: {
            type: Sequelize.DOUBLE,      // 중개수수료
        },
        range: {
            type: Sequelize.INTEGER,    // 동네범위
            defaultValue: 1,            // 1: 우리동네, 2: 동네근처, 3: 구, 4: 시
        },
        latitude: {
            type: Sequelize.DECIMAL,     // 위도
            defaultValue: 0,
        },
        longitude: {
            type: Sequelize.DECIMAL,     // 경도
            defaultValue: 0,
        },
        address: {
            type: Sequelize.STRING      // 공구주소
        },
        address_detail: {
            type: Sequelize.STRING      // 공구 상세주소
        },
        product_content: {
            type: Sequelize.TEXT,
        },
        created: {
            type: Sequelize.DATE,
        },
    }, {
        timestamps: false,
        underscored: true,
    });
    return ProductHistories;
};