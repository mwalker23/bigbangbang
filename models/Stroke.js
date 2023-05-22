// creating tables for database
const {Model, DataTypes} = require('sequelize');
const sequelize = require("../config/connection");
 
class Stroke extends Model {};

Stroke.init({ // accepts to paramters(objects) => ({column},{row})
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
     post: {
        type: DataTypes.TEXT,
        allowNull: false
     },
     videoUrl: {
        type:DataTypes.STRING,
        allowNull: true
     },
     //connects user table with stroke table (user has many strokes)
     userId:{
        type: DataTypes.INTEGER,
        references: {
            model: "user",
            key: "id"
        }
     }
},
//row
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'stroke'
}
); 
 
module.exports = Stroke;