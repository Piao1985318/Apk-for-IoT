const config = require("../config/db.local.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        operatorsAliases: '0',

        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        },
        logging: false,
    }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

/**
 * Initialize Table
 */
db.users = require("./users.model")(sequelize, Sequelize);
db.banners = require("./banners.model")(sequelize, Sequelize);
db.products = require("./products.model")(sequelize, Sequelize);
db.productContents = require("./productContents.model")(sequelize, Sequelize);
db.reports = require("./reports.model")(sequelize, Sequelize);
db.togethers = require("./togethers.model")(sequelize, Sequelize);
db.favorites = require("./favorite.model")(sequelize, Sequelize);
db.commits = require("./commits.model")(sequelize, Sequelize);
db.invites = require("./invites.model")(sequelize, Sequelize);
db.salesHistories = require("./salesHistory.model")(sequelize, Sequelize);
db.initials = require("./initials.model")(sequelize, Sequelize);
db.alarms = require("./alarms.model")(sequelize, Sequelize);
db.angcols = require("./angcols.model")(sequelize, Sequelize);
db.productHistories = require("./productHistory.model")(sequelize, Sequelize);
db.points = require("./points.model")(sequelize, Sequelize);

db.products.hasMany(db.productContents, {as: 'productContents', sourceKey: 'id', foreignKey: 'product_id'});
db.products.hasMany(db.salesHistories, {as: 'salesHistories', sourceKey: 'id', foreignKey: 'product_id'});
db.products.hasOne(db.togethers, {as: 'myParticipate', sourceKey: 'id', foreignKey: 'product_id'});
db.products.hasMany(db.togethers, {as: 'togethers', sourceKey: 'id', foreignKey: 'product_id'});
db.products.hasMany(db.angcols, {as: 'angcols', sourceKey: 'id', foreignKey: 'product_id'});
db.products.hasMany(db.commits, {as: 'commits', sourceKey: 'id', foreignKey: 'product_id'});
db.products.hasMany(db.reports, {as: 'togetherReports', sourceKey: 'id', foreignKey: 'product_id'});

db.products.hasOne(db.users, {as: 'saleUser', sourceKey: 'user_id', foreignKey: 'id'});
db.commits.hasOne(db.users, {as: 'users', sourceKey: 'user_id', foreignKey: 'id'});
db.togethers.hasOne(db.users, {as: 'participateUsers', sourceKey: 'user_id', foreignKey: 'id'});
db.salesHistories.hasOne(db.users, {as: 'purchaseUser', sourceKey: 'user_id', foreignKey: 'id'});
db.angcols.hasOne(db.users, {as: 'angcolUser', sourceKey: 'user_id', foreignKey: 'id'});
db.products.hasOne(db.favorites, {as: 'favorites', sourceKey: 'id', foreignKey: 'product_id'});
db.invites.hasOne(db.users, {as: 'invitedUser', sourceKey: 'invited_user_id', foreignKey: 'id'});

db.productHistories.hasMany(db.salesHistories, {as: 'histories', sourceKey: 'id', foreignKey: 'old_product_id'});
db.productHistories.hasOne(db.users, {as: 'historySaleUser', sourceKey: 'user_id', foreignKey: 'id'});

db.commits.hasMany(db.reports, {as: 'reportedCommits', sourceKey: 'id', foreignKey: 'commit_id'});
db.reports.hasOne(db.users, {as: 'reportedUser', sourceKey: 'user_id', foreignKey: 'id'});

// db.users.hasMany(db.products, {as: 'userProducts', sourceKey: 'id', foreignKey: 'user_id'});
db.products.hasMany(db.productHistories, {as: 'productHistories', sourceKey: 'id', foreignKey: 'product_id'});

db.sequelize.sync().then(() => {
    console.log( "연결 성공 ");
}).catch( err => {
    console.log( err.toString() );
});

// db.sequelize.sync();

module.exports = db;