/**
 * 상품 테이블: 공구마켓, 함께 해요
 */
module.exports = (sequelize, Sequelize) => {
    const Products = sequelize.define("products", {
        product_role: {
            type: Sequelize.STRING,   // "product": 공구마켓, "together": 함께 해요
        },
        user_id: {
            type: Sequelize.INTEGER,
        },
        state: {
            type: Sequelize.INTEGER,    // 1: 진행중, 2: 픽업/배달중, 3: 종료(픽업/배달일로부터 3일후), 4. 정산기간( 앵콜외쳐요 가능한 상태 ) 5. 공구 종료
            defaultValue: 1,
        },
        finish_date: {
            type: Sequelize.DATE,       // 공구 종료기간( 금일부터 5일기간으로 선택처리 )
        },
        delivery_date: {
            type: Sequelize.DATE,       // 픽업 / 배달일( 공구기간이후로 설정해야 함, method가 1인 경우는 예외)
        },
        ended_date: {
            type: Sequelize.DATE,       // 종료일
        },
        settlement_date: {
            type: Sequelize.DATE,       // 정산일
        },
        counts: {
            type: Sequelize.INTEGER,    // 참여인원수(최대 100명까지)
        },
        method: {
            type: Sequelize.INTEGER,    // 상품전달방법( 1: 없음, 2: 픽업, 3: 배달 )
        },
        images: {
            type: Sequelize.TEXT,      // 상품 사진 리스트(최대 4장까지)
        },
        thumbnails: {
            type: Sequelize.TEXT,      // 상품사진 썸네일리스트
        },
        name: {
            type: Sequelize.STRING,    // 상품명
        },
        details: {
            type: Sequelize.TEXT,      // 상품 설명
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
        active_state: {
            type: Sequelize.BOOLEAN,    // 관리자에 의한 노출상태( 1: 노출, 0: 비노출(디폴트로)) ### 기본상품 리스트는 상품 컨텐츠 리스트에 저장
            defaultValue: true,
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
        created: {
            type: Sequelize.DATE,
        },
        deleted: {
            type: Sequelize.DATE,
        },
        updated: {
            type: Sequelize.DATE,
        }
    }, {
        timestamps: false,
        underscored: true,
    });
    return Products;
};