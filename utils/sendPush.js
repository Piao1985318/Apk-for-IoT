/**
 * FCM server environment
 */
const config = require("../config/config");
const fetch = require('node-fetch');

module.exports = async function sendFCM(data) {
    let token = data.token;
    let token_array  = [...new Set(token)];
    // notification object with title and text
    const notification = {
        title: data.title,
        body: data.body,
    };
    
    // fcm device tokens array
    const notification_body = {
        'notification': notification,
        'registration_ids': token_array,
        data: {
            type: data.type,
            product_role: data.product_role,
            product_id: data.product_id,
            user_id : data.user_id ? data.user_id : "temp",
        }
    };
    console.log("push_data :::", notification_body);
    fetch('https://fcm.googleapis.com/fcm/send', {
        'method': 'POST',
        'headers': {
            // replace authorization key with your key
            'Authorization': 'key=' + config.PUSH_API_KEY,
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify(notification_body)
    }).then(async function (response) {
        if ( response.error )
            console.log(response.error, " = push results ");
    }).catch(function (error) {
        if ( error )
            console.error(error, " = push error");
    })
};

