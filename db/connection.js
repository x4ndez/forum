const Sequelize = require("sequelize");
require("dotenv").config();
// process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
const sequelize = new Sequelize(
    "forum_db",
    "root",
    "root",
    {
        host: "localhost",
        dialect: "mysql",
        port: 3306,
    }
);

// try {

//     await sequelize.authenticate();
//     console.log("Connected to database successfully!");

// } catch (err) {

//     console.log("Failed to connect to database");

// }

module.exports = sequelize;