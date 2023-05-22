const {Model, DataTypes}= require('sequelize');
// const { USE } = require('sequelize/types/index-hints');
const sequelize = require('../config/connection');

class User extends Model {

}

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
       type: DataTypes.STRING,
       allowNull: false, 
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8]
        }
    },
    email: {
        type: DataTypes.STRING,
        unique:true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
}, {
    sequelize,
    timestamps:false,
    freezeTableName: true,
    underscored: true,
    modelName: "user"
});

module.exports = User;