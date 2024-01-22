module.exports = (sequelize, Sequelize) => {
    const Banners = sequelize.define("banners", {
        image: {
            type: Sequelize.STRING,
        },
        state: {
            type: Sequelize.BOOLEAN,                 // false: 비노출/ true: 노출
            defaultValue: false,
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
    return Banners;
};
