/**
 * FCM server environment
 */
const config = require("../config/config");
const axios = require("axios");

module.exports = async function sendSMSTemplate(data) {
    try {
        const getToken = await axios({
            url: "https://www.biztalk-api.com/v2/auth/getToken",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            json: true,
            data: {
                bsid: config.BS_ID,    // 비즈톡 아이디
                passwd: config.PS_PWD, // 비즈톡 PW
            }
        });
        const {token} = getToken.data;
        const result = await axios({
            url: "https://www.biztalk-api.com/v2/kko/sendMms",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "bt-token": token,
            },
            data: {
                msgIdx: `return_end_${ new Date().getTime() }`, // 비즈톡 아이디
                recipient: data.phone,
                callback: config.BS_PHONE,
                message: data.msg,
                subject: "[팝업플레이스]",
            }
        });
        const { responseCode, msg} = result.data;
        console.log('response: ', responseCode, msg);
    } catch (e) {
        console.log( e.toString() );
    }
};

