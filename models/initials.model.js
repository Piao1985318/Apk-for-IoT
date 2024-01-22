/**
 * 기초테이블
 */
module.exports = (sequelize, Sequelize) => {
    const Initials = sequelize.define("initials", {
        brokerage_fee: {
            type: Sequelize.DOUBLE,      // 중개수수료 (ex: 6(%))
        },
        points_percentage: {
            type: Sequelize.DOUBLE,      // 포인트 적립률
        },
        settlement_period: {
            type: Sequelize.INTEGER,     // 정산기간
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
    return Initials;
};