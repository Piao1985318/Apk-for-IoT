const jwt = require("jsonwebtoken");
const config = require("../config/config");

/**
 * Update the track played info From Existing site
 */
module.exports = async function verifyToken(data, expire_time) {
    try {
        /**
         * JST Verify
         */
        const iss = config.iss;			// Issuer (Software organization who issues the token)
        const sub = config.sub;			// Subject (intended user of the token)
        const aud = config.SIM_API_URL;	    // Audience (Domain within which this token will live and function)
        const exp = expire_time ? expire_time : config.EXPIRESIN;
        const alg = ["RS256"];
        // Token signing options
        const verifyOptions = {
            issuer: 	iss,
            subject: 	sub,
            audience: 	aud,
            expiresIn: 	exp,
            algorithm: 	alg,
        };

        const legit = await jwt.verify(data.token, config.PUBLIC_KEY, verifyOptions);
        console.log("\nJWT verification result: " + JSON.stringify(legit));
        try {
            /**
             * JST Decode
             */
            const decoded = await jwt.decode(data.token, {complete: true});
            return {
                state: true, // succeed
                result: decoded,
            }
        } catch (err) {
            return {
                state: false, // failed
                msg: "타당하지 않은 요청입니다.",
            }
        }
    } catch (err) {
        return {
            state: false, // failed
            msg: "타당하지 않은 요청입니다.",
        }
    }
};