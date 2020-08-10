module.exports = (sequelize, type) => {
    return sequelize.define("user", {
        name: {
            type: type.STRING,
            allowNull: false,
        },
    });
};