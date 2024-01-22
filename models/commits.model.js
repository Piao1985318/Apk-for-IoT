/**
 * 댓글 테이블
 */
module.exports = (sequelize, Sequelize) => {
    const Commits = sequelize.define("commits", {
        user_id: {
            type: Sequelize.INTEGER,      // 등록한 사용자아이디
        },
        level: {
            type: Sequelize.INTEGER,      // 댓글 레벨
        },
        active_state: {
            type: Sequelize.BOOLEAN,      // 관리자에 의한 댓글/답글노출상태
            defaultValue: true,
        },
        parent_id: {
            type: Sequelize.STRING,
        },
        product_id: {
            type: Sequelize.INTEGER,
        },
        contents: {
            type: Sequelize.STRING,
        },
        created: {
            type: Sequelize.DATE,
        },
        updated: {
            type: Sequelize.DATE,
        },
        deleted: {
            type: Sequelize.DATE,
        },
    }, {
        timestamps: false,
        underscored: true,
    });
    return Commits;
};