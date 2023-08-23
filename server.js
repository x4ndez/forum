const express = require("express");
const sequelize = require("./db/connection.js");
const path = require("path");

const server = express();
const PORT = process.env.PORT || 3001;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(require("./routes/index.js"));
// server.use(express.static(path.join(__dirname, "public")));


sequelize.sync({ force: false }).then(() => {

    server.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

});