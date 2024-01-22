const jwt = require("jsonwebtoken");
const config = require("../config/config");
/**
 * generating the Token by Security_key
 */
module.exports =  function generateSecurityToken(data) {
    try {
        const payload = {
            id: data.id,
        };
        let expireTime = {expiresIn: 31556926};
        let temp = jwt.sign(payload, config.SECRET_KEY, expireTime);
        if (temp) {
            return {
                status: true,
                flag: '토큰생성이 성공하였습니다.',
                result: "Bearer " + temp,
            };
        } else {
            return {
                status: false,
                flag: '토큰생성이 실패하였습니다.',
                result: "존재하지 않습니다.",
            };
        }
    } catch (e) {
        return {
            status: false,
            flag: '토큰생성이 실패하였습니다.',
            msg: e.toString(),
        };
    }
};