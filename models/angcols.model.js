/**
 * 앵콜외침 테이블
 */
module.exports = (sequelize, Sequelize) => {
    const Angcol = sequelize.define("angcol", {
        user_id: {
            type: Sequelize.INTEGER,      // 앵콜외침한 사용자 아이디
        },
        product_id: {
            type: Sequelize.INTEGER,      // 앵콜외침한 상품 아이디
        },
        created: {
            type: Sequelize.DATE,         // 생성 날짜
        },
        deleted: {
            type: Sequelize.DATE,         // 삭제날짜
        },
        updated: {
            type: Sequelize.DATE,
        }
    }, {
        timestamps: false,
        underscored: true,
    });
    return Angcol;
};