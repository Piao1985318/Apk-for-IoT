module.exports = (sequelize, Sequelize) => {
    const Alarms = sequelize.define("alarms", {
        user_id: {
            type: Sequelize.INTEGER,                 // 알람받는 사용자 아이디
        },
        product_role: {
            type: Sequelize.STRING,                 // 알람 발송된 유형(product: 공구마켓,together: 함께해요)
        },
        product_id: {
            type: Sequelize.INTEGER,                 // 생산물 아이디
        },
        title: {
            type: Sequelize.STRING
        },
        contents: {
            type: Sequelize.STRING
        },
        created: {
            type: Sequelize.DATE,
        },
    }, {
        timestamps: false,
        underscored: true,
    });
    return Alarms;
};
