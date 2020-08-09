module.exports = (sequelize, type) => {
    return sequelize.define("employees", {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        FirstName: {
            type: type.STRING,
            allowNull: false,
        },
        LastName: {
            type: type.STRING,
            allowNull: false,
        },
        DOB:{
            type: type.DATE,
            allowNull: false,
        },
        Hours:{
            type: type.DOUBLE,
            allowNull: false,
        },
        Address:{
            type: type.STRING,
            allowNull:true,
        },
        EmpCategory:{
            type: type.INTEGER,
            allowNull: false,
        }
    });
};