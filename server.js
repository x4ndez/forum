const express = require("express");
const sequelize = require("./db/connection.js");
const path = require("path");
require("./models");

const server = express();
const PORT = process.env.PORT || 3001;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
// server.use(express.static(path.join(__dirname, "public")));

server.use(require("./routes"));

sequelize.sync({ force: true }).then(() => {

    server.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

});