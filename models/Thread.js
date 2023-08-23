const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/connection.js");

class Thread extends Model { };

Thread.init(

    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "users",
                key: "id",
            }
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "threads",
    },

);

module.exports = Thread;