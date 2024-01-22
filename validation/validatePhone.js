const Validator = require("validator");
const isEmpty = require("is-empty");
const validatePhoneNumber = require('validate-phone-number-node-js');

module.exports = function validatePhone(data) {
    let array = [];
    let phone = data.phone;
    data.phone = !isEmpty(data.phone) ? data.phone.toString() : "";

    if ( phone === '' || phone === null || phone === undefined ) {
        array.push("폰번호를 정확하게 입력해주세요.");
    } else {
        let re = /[0-9]/g;
        let found = data.phone.match(re);
        if (!found || data.phone.length !== found.length) {
            array.push("폰번호가 타당하지 않습니다. 폰번호에는 숫자만이 포함되어야 합니다.");
        } else {
            if (Validator.isEmpty(data.phone)) {
            } else if (!validatePhoneNumber.validate(data.phone)) {
                array.push("폰번호가 타당하지 않습니다.");
            }
        }
    }
    return {msg: array, isValid: isEmpty(array)};
};
