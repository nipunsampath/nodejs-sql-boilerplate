module.exports = (sequelize, type) => {
    return sequelize.define("employee", {
        FirstName: {
            type: type.STRING,
            allowNull: false,
        },
        LastName: {
            type: type.STRING,
            allowNull: false,
        },
        DOB: {
            type: type.DATE,
            allowNull: false,
        },
        EmpType: {
            type: type.STRING,
            allowNull: false,
        },
        Address: {
            type: type.STRING,
            allowNull: true,
        }
    });
};