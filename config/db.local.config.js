module.exports = {
    HOST: "localhost",
    // HOST: "52.78.97.107",
    USER: "postgres",
    PASSWORD: 'Popuplace300@',
    PORT: 5432,
    DB: "postgres",

    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
};
