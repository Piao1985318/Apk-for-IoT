module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
        role: {
            type: Sequelize.STRING,                  // 회원구분: 관리자/사용자
            defaultValue: "user",
        },
        admin_id: {
            type: Sequelize.STRING,
        },
        admin_password: {
            type: Sequelize.STRING,
        },
        name: {
            type: Sequelize.STRING,                   //
        },
        nickname: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING,
        },
        device_type: {
            type: Sequelize.STRING,                   // 설치앱 Android, IOS
        },
        address: {
            type: Sequelize.STRING
        },
        address_detail: {
            type: Sequelize.STRING
        },
        latitude: {
            type: Sequelize.DECIMAL,                   // 위도
            defaultValue: 0,
        },
        longitude: {
            type: Sequelize.DECIMAL,                   // 경도
            defaultValue: 0,
        },
        photo: {
            type: Sequelize.STRING,
        },
        thumbnail: {
            type: Sequelize.STRING,
        },
        points: {
            type: Sequelize.DOUBLE,                   // 보유 포인트
            defaultValue: 0,
        },
        comment_notification: {                       // 댓글 알림
            type: Sequelize.BOOLEAN,
            defaultValue: true,
        },
        angol_notification: {                        // 앵골외침 알림
            type: Sequelize.BOOLEAN,
            defaultValue: true,
        },
        tool_notification: {                        // 공구마감 알림
            type: Sequelize.BOOLEAN,
            defaultValue: true,
        },
        delivery_notification: {                    // 픽업/배달 알림
            type: Sequelize.BOOLEAN,
            defaultValue: true,
        },
        last_connected: {
            type: Sequelize.DATE,                   // 마지막으로 접속한 시간
        },
        last_calculated: {
            type: Sequelize.DATE,                   // 마지막으로 계산된 시간
        },
        eccumulated: {
            type: Sequelize.INTEGER,                // 체류시간(초단위로 계산됨)
            defaultValue: 0,
        },
        logins: {
            type: Sequelize.INTEGER,                // 로그인횟수
            defaultValue: 0,
        },
        push_token: {
            type: Sequelize.STRING,                 // firebase push token
        },
        
        business_num: {
            type: Sequelize.STRING,                 // 사업자 등록번호
        },
        bank_name: {
            type: Sequelize.STRING,                 // 은행명
        },
        bank_account: {
            type: Sequelize.STRING,                 // 계좌번호
        },
        
        created: {
            type: Sequelize.DATE,
        },
        updated: {
            type: Sequelize.DATE,
        },
        deleted: {
            type: Sequelize.DATE,
        }
    }, {
        timestamps: false,
        underscored: true,
    });
    return Users;
};
