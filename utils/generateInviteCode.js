/**
 * 초대코드얻기
 */
module.exports = function generateInviteCode() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code_temp = '';
    for( let i = 0; i < 6; i ++ ) {
        code_temp += chars.charAt( Math.floor(Math.random()*chars.length ));
    }
    return {
        status: true,
        results: code_temp,
    };
};