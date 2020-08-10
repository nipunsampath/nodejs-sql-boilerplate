module.exports = (sequelize, type) => {
    return sequelize.define("users", {
        name: {
            type: type.STRING,
            allowNull: false,
        },
    });
};