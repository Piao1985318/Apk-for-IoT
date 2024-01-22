/**
 * 신고접수 테이블
 */
module.exports = (sequelize, Sequelize) => {
    const Reports = sequelize.define("reports", {
        user_id: {
            type: Sequelize.INTEGER,
        },
        product_id: {
            type: Sequelize.INTEGER,
        },
        commit_id: {
            type: Sequelize.INTEGER,
        },
        created: {
            type: Sequelize.DATE,
        },
        deleted: {
            type: Sequelize.DATE,
        },
    }, {
        timestamps: false,
        underscored: true,
    });
    return Reports;
};
