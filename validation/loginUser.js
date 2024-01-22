const Validator = require("validator");
const isEmpty = require("is-empty");
const validatePhoneNumber = require('validate-phone-number-node-js');

module.exports = function validateLoginUser(data){
    let array = [];
    let phone = data.phone;
    data.name = !isEmpty(data.name) ? data.name : "";
    data.nickname = !isEmpty(data.nickname) ? data.nickname : "";
    data.phone = !isEmpty(data.phone) ? data.phone.toString() : "";
    data.address = !isEmpty(data.address) ? data.address : "";
    data.address_detail = !isEmpty(data.address_detail) ? data.address_detail : "";
    data.longitude = !isEmpty(data.longitude) ? data.longitude : "";
    data.latitude = !isEmpty(data.latitude) ? data.latitude : "";

    if (Validator.isEmpty(data.nickname)) {
        array.push("이름을 입력하세요");
    }
    if (Validator.isEmpty(data.nickname)) {
        array.push("닉네임을 입력하세요");
    }
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
    if (Validator.isEmpty(data.address)) {
        array.push("주소를 입력하세요");
    }
    if (Validator.isEmpty(data.address_detail)) {
        array.push("상세주소를 입력하세요");
    }
    if (Validator.isEmpty(data.longitude)) {
        array.push("선택된 주소의 위도를 입력하세요");
    }
    if (Validator.isEmpty(data.latitude)) {
        array.push("선택된 주소의 경도를 입력하세요");
    }
    return { msg: array, isValid: isEmpty(array) };

};
