const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const db = require("../models");
const Users = db.users;
const { SECRET_KEY } = require("../config/config");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = SECRET_KEY;

module.exports = async passport => {
    await passport.use(
        await new JwtStrategy(opts, (jwt_payload, done) => {
            Users.findOne(
                {
                    where: { id: jwt_payload.id, },
                }
            ).then(async user => {
                if (user) {
                    if (user.deleted) {
                        return done(null, "deleted user");
                    } else {
                        /**
                         * 앱접속시간 업데이트
                         */
                        let unit = 60 * 1000; // 10분
                        let last_connected = new Date(user.last_connected).getTime();
                        let last_calculated = new Date( user.last_calculated ).getTime();
                        let current_time = new Date().getTime();
                        let temp;
                        if ( current_time - last_connected >= unit ) {
                            temp = {
                                last_connected: current_time,
                                last_calculated: current_time,
                                eccumulated: user.eccumulated + Math.floor( ( last_connected - last_calculated ) / 1000 ),
                            }
                        } else {
                            temp = {
                                last_connected: current_time,
                            }
                        }
                        await Users.update( temp,
                            {
                                where: {
                                    id: jwt_payload.id,
                                }
                            });
                        const data = {
                            id: user.id,
                            role: user.role,
                            name: user.name,
                            phone: user.phone,
                            nickname: user.nickname,
                            token: user.push_token,
                        };
                        return done(null, data);
                    }
                } else {
                    return done(null, false);
                }
            }).catch(err => console.log(err));
        })
    );
};
