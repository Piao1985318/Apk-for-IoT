module.exports = {
    // SIM_API_URL: "http://52.78.97.107:8000/",
    // SIM_API_DOMAIN_URL: "http://www.popupplace.co.kr:8000/",

    // SIM_API_URL: "https://localhost/",
    SIM_API_URL: "https://www.popupplace.co.kr/",

    // SIM_API_DOMAIN_URL: "http://192.168.1.6:8000/",
    SIM_API_DOMAIN_URL: "https://www.popupplace.co.kr/",

    EXPIRESIN: 31556926,
    MINUTES: 60000,

    /** Admin Account **/
    ADMIN_ACCOUNT: {
        id: "admin",
        psw: "1234",
    },

    // Token options
    iss: 'pupupplace',			        // Issuer (Software organization who issues the token)
    sub: 'raiseduck@naver.com',			// Subject (intended user of the token)
    EXPIRESIN_CODE: 184,                // 3m 4s

    /**
     * Secret key for JWT
     * http://travistidwell.com/blog/2013/09/06/an-online-rsa-public-and-private-key-generator/
     */
    PRIVATE_KEY: "-----BEGIN RSA PRIVATE KEY-----\n" +
        "MIICWgIBAAKBgGtVhvttq8qVIiP7zrlvrmGVRFUqG4XeTDhHfQbZ5+FG/bNiPuOh\n" +
        "sTw42SWvRDxSMK+mdaFDsZ7cKvnt9Hui4AKdrlk5aCLXF4YNoMSb8zR0o0ybGixS\n" +
        "GkcLn3WbLNX7qL14glwXbMTG+V4DoVMnGb7k2pd92I2lHO7Uqv70I6yfAgMBAAEC\n" +
        "gYAX2jXZAhI/Ps0LehYCl5MFFIrO8kCTi0cc6qYaM6qYIZKXnqmjJHeijm+TNFPR\n" +
        "o+I15qQVZlm+l+blC8BdCWEGahuYOy5ofmvxxumvzKxVGwr+sMjuKx0ZunZqWqAU\n" +
        "yUubL5bPSgp2dCe+aN7PIJRZkPKYaM8O5Pl/UrK6P2EMQQJBAKkesu2kbGaIfpvC\n" +
        "SUlA5yAa+l+4i5q0z6HQC9Z6DA25YLl/FORMISfg64YNu6uL6zdhV/N2zdyR1sXi\n" +
        "IvhY1zcCQQCieT/yEolJLV1QVygsugFD7/+fBI4nV+G68iHSk7jR39CzumLRFYV7\n" +
        "jNYKCQKTd/4xTX3Gk6y6i3C3NlDfZjnZAkBZ5dStGCr7MfFDMLquMs7pNQ4EVd/3\n" +
        "w8dfN20jfErt/K2azR+433L8dMYdwy0QWlcVYCxVYcC6T9e/5p46L1dvAkAw1qm2\n" +
        "JoRGDvDh2ZEmALOorFf2gPQKN4yPGYG5PtZroA+oNvrFRubdALTGR3cSxRsPzu9j\n" +
        "5bgiSxASwq0EukHhAkA/NRUhhDAf0MCVEAeH5TyZw8Dv6ODK1xxrn+GOxnsIVk+B\n" +
        "bA6RiaDkqihBqfGJTNS+zbld9g3ugQbbJV/zLSkR\n" +
        "-----END RSA PRIVATE KEY-----",
    PUBLIC_KEY: "-----BEGIN PUBLIC KEY-----\n" +
        "MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgGtVhvttq8qVIiP7zrlvrmGVRFUq\n" +
        "G4XeTDhHfQbZ5+FG/bNiPuOhsTw42SWvRDxSMK+mdaFDsZ7cKvnt9Hui4AKdrlk5\n" +
        "aCLXF4YNoMSb8zR0o0ybGixSGkcLn3WbLNX7qL14glwXbMTG+V4DoVMnGb7k2pd9\n" +
        "2I2lHO7Uqv70I6yfAgMBAAE=\n" +
        "-----END PUBLIC KEY-----",
    /** Secret key for JWT **/
    SECRET_KEY: "MIICWQIBAAKBgEy3YzkLsosLAJoxWyYNUUWH5wAyq2DSK8IAPJm7r34CqlYNyNSk",
    PUSH_API_KEY: "AAAAs7akF24:APA91bHjCppqAlur-SAtEsI8yww68P7hTKs4mG_9V7BYoU2jqFzvM1Qzc_IyfeuLVW_NZUTG9A5wEYdQdw_i88-UveIsduj961ynEgKK0DOdvRj5d3gQnr43RozIWkjlkSEHgX-5aCD9",
    BS_ID: "raiseduck",       // 비즈톡 아이디
    PS_PWD: "9181d7d5446f23ec427f173c230a8211826838a9", // 비즈톡 PW
    COUNTRY_CODE: 82,              // 나라코드
    BS_PHONE: "0326545464",        // 회신번호
};
