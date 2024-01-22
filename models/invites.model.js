/**
 * 초대 테이블
 */
module.exports = (sequelize, Sequelize) => {
    const Invites = sequelize.define("invites", {
        user_id: {
            type: Sequelize.INTEGER,      // 초대한 회원 아이디
        },
        invited_user_id: {
            type: Sequelize.INTEGER,       // 초대받은 회원 아이디(회원등록후 채워짐)
        },
        code: {
            type: Sequelize.STRING,        // 초대코드
        },
        created: {
            type: Sequelize.DATE,           // 초대날짜
        },
        deleted: {
            type: Sequelize.DATE,
        },
        used: {
            type: Sequelize.DATE,            // 초대코드 이용날짜
        },
    }, {
        timestamps: false,
        underscored: true,
    });
    return Invites;
};