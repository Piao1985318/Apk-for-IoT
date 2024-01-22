/**
 * 함께해요 참여하기 테이블
 */
module.exports = (sequelize, Sequelize) => {
    const Togethers = sequelize.define("togethers", {
        user_id: {
            type: Sequelize.INTEGER,      // 등록한 사용자아이디
        },
        product_id: {
            type: Sequelize.INTEGER,
        },
        email: {
            type: Sequelize.STRING,
        },
        created: {
            type: Sequelize.DATE,
        },
        final_ended: {
            type: Sequelize.DATE,          // 종료된 상태 날짜
        }
    }, {
        timestamps: false,
        underscored: true,
    });
    return Togethers;
};