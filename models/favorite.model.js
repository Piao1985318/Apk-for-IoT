/**
 * 좋아요 테이블
 */
module.exports = (sequelize, Sequelize) => {
    const Favorites = sequelize.define("favorites", {
        user_id: {
            type: Sequelize.INTEGER,      // 등록한 사용자아이디
        },
        product_id: {
            type: Sequelize.INTEGER,
        },
        state: {
            type: Sequelize.BOOLEAN,      // 좋아요 상태값, 1: 좋아요, 0: 좋아요 해지
        },
        created: {
            type: Sequelize.DATE,
        },
        updated: {
            type: Sequelize.DATE,
        }
    }, {
        timestamps: false,
        underscored: true,
    });
    return Favorites;
};