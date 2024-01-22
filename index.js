const express = require("express");
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");
const path = require('path');

const passport = require("passport");
const auth = require("./routes/auth");
const users = require("./routes/users");
const admins = require("./routes/admins");
const banners = require("./routes/banners");
const products = require("./routes/products");
const alarms = require("./routes/alarms");
const reports = require("./routes/reports");
const favorites = require("./routes/favorites");
const invites = require("./routes/invites");
const commits = require("./routes/commits");

const phpExpress = require('php-express')({
    binPath: "/usr/bin/php"
});
const fs = require('fs');
const options = {
    key: fs.readFileSync('private.key'),
    cert: fs.readFileSync('checktonfiel_com.crt'),
    ca: [
        fs.readFileSync('checktonfiel_com.ca-bundle')
    ]
};

app.use(
    cors({
        origin: '*',
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);
// Body-parser middleware
app.use(bodyParser.json({ limit: '50mb', }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize(null)); // Passport middleware
require("./utils/passport")(passport);      // Passport config

app.use(express.static('public'));
app.use("/public", express.static("public"));

const publicPath = path.join(__dirname, 'admin_panel', 'introduction');
app.use(express.static(publicPath));
app.get(['/introduction' ], (req, res) => { res.sendFile(path.join(publicPath, 'index.html')); });

// web view by PHP
app.set('views', path.join(__dirname, '/views'));
app.engine('php', phpExpress.engine);
app.set('views engine', 'php');
app.all(/.+\.php\.*$/, phpExpress.router);

async function check(req, res, next) {
    passport.authenticate('jwt', {session: false}, function (err, data) {

        if (err) {
            return res.status(403).send({err: err.toString()});
        } else {
            if (data === "deleted user") {
                return res.status(403).send({msg: ["Deleted User"]})
            } else if (data === false) {
                return res.status(403).send({msg: "Mistaken token"})
            } else {
                req.body['jwt_data'] = data;
                return next();
            }
        }
    })(req, res, next);
}
app.use("/api/auth", auth);
app.use("/api/admins", check, admins);
app.use("/api/users", check, users);
app.use("/api/banners", check, banners);
app.use("/api/products", check, products);
app.use( "/api/alarms", check, alarms );
app.use( "/api/reports", check, reports );
app.use( "/api/favorites", check, favorites );
app.use( "/api/invites", check, invites );
app.use( "/api/commits", check, commits );

// const server = require('http').createServer(app);
// const port = process.env.PORT || 8000;

const port = process.env.PORT || '443';
app.set( 'port', port );
const server = require('https').createServer(options, app);
server.listen(port, () => console.log(`Server up and running on port ${port}!`));