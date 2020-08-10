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
        Hours: {
            type: type.DOUBLE,
            allowNull: false,
        },
        EmpCategory: {
            type: type.INTEGER,
            allowNull: false,
        },
        Address: {
            type: type.STRING,
            allowNull: true,
        }
    });
};