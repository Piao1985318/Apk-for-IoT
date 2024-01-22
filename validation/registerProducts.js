const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterProducts(data){
    let array = [];
    // Convert empty fields to an empty string so we can use validator functions
    let finish_date = data.finish_date;
    let counts = data.counts;
    let method = data.method;
    let delivery_date = data.delivery_date;
    let images = data.images;
    let main_products = data.main_products;
    let additional_products = data.additional_products;
    let is_ad = data.is_ad

    data.finish_date = !isEmpty(data.finish_date) ? data.finish_date : "";
    data.counts = !isEmpty(data.counts) ? data.counts.toString() : "";
    data.method = !isEmpty(data.method) ? data.method.toString() : "";
    if ( method !== 1 )
        data.delivery_date = !isEmpty(data.delivery_date) ? data.delivery_date : "";
    data.images = !isEmpty(JSON.stringify(data.images)) ? JSON.stringify(data.images) : "";

    data.name = !isEmpty(data.name) ? data.name : "";
    data.details = !isEmpty(data.details) ? data.details : "";

    data.main_products = !isEmpty(JSON.stringify(data.main_products)) ? JSON.stringify(data.main_products) : "";
    data.additional_products = !isEmpty(JSON.stringify(data.additional_products)) ? JSON.stringify(data.additional_products) : "";

    data.address = !isEmpty(data.address) ? data.address : "";
    data.longitude = !isEmpty(data.longitude) ? data.longitude.toString() : "";
    data.latitude = !isEmpty(data.latitude) ? data.latitude.toString() : "";
    data.range = !isEmpty(data.range) ? data.range.toString() : "";
    
    if(!is_ad)
    {
        if(Validator.isEmpty(data.finish_date)) {
            array.push("공구종료기간을 선택하세요.");
        } else {
            let ONE_DAY = 24 * 60 * 60 * 1000;
            let current = new Date().getTime();
            let temp = new Date(finish_date).getTime();
            if ( temp <= current || (temp- current > 5 * ONE_DAY) )
                array.push("공구기간은 금일부터 5일기간내로 선택되어야 합니다");
        }
        if(Validator.isEmpty(data.counts)){
            array.push("공구참여인원수를 선택하세요.");
        } else if ( !Number.isInteger( counts ) )
            array.push("공구참여인원을 정확하게 선택하세요");
        else if ( Number( counts ) > 100 )
            array.push("공구참여인원은 최대 100명까지로 선택가능합니다");
    
        if(Validator.isEmpty(data.method)) {
            array.push("상품전달방법을 선택하세요");
        } else if ( !Number.isInteger( method ) )
            array.push("상품전달방법 파라미터값은 숫값이어야 합니다");
        else if ( Number( method ) !== 1 && Number( method ) !== 2 && Number( method ) !== 3 )
            array.push("상품전달방법 파라미터값을 정확하게 선택하세요");
        if ( method !== 1 ) {
            if(Validator.isEmpty(data.delivery_date)) {
                array.push("픽업/배달일을 선택하세요");
            } else if ( !Validator.isEmpty(data.finish_date) && Number( method ) !== 1 ) {
                if ( new Date( delivery_date ).getTime() <= new Date( finish_date ) )
                    array.push( "픽업/배달일은 공구기간 이후로 선택되어야 합니다" );
            }
        }
    }
   
    if(Validator.isEmpty(data.images)){
        array.push("상품이미지를 선택하세요");
    } else if ( images.length > 4 )
        array.push("상품이미지는 최대 4장까지가 저장이 가능합니다");
    if(Validator.isEmpty(data.name)){
        array.push("상품명을 입력하세요");
    }
    if(Validator.isEmpty(data.details)){
        array.push("상품설명을 입력하세요");
    }
    if(Validator.isEmpty(data.main_products)){
        array.push("기본상품을 선택하세요");
    } else if ( main_products.length > 5 )
        array.push("기본상품은 최대 5개까지가 등록이 가능합니다");
    if(Validator.isEmpty(data.additional_products)){
        array.push("추가상품을 선택하세요.");
    } else if ( additional_products.length > 10 )
        array.push("추가상품은 최대 10개까지가 등록이 가능합니다");

    if (Validator.isEmpty(data.address)) {
        array.push("주소를 입력하세요");
    }
    if (Validator.isEmpty(data.longitude)) {
        array.push("선택된 주소의 위도를 입력하세요");
    }
    if (Validator.isEmpty(data.latitude)) {
        array.push("선택된 주소의 경도를 입력하세요");
    }
    if (Validator.isEmpty(data.range)) {
        array.push("동네범위을 선택하세요");
    }

    return { msg: array, isValid: isEmpty(array) };
};
