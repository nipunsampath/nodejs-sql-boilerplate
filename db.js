const Sequelize = require("sequelize");
UserModel = require("./users");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD, {
        host: process.env.MYSQL_HOST,
        dialect: "mysql",
        logging: false,
        pool: {
            max: 5,
            min: 0,
            idle: 10000,
        },
        define: {
            timestamps: false,
        },
    }
);

const User = UserModel(sequelize, Sequelize.DataTypes);

module.exports = { User };