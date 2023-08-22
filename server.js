const express = require("express");
const path = require("path");
const routes = require("./routes");

const server = express();
const PORT = process.env.PORT || 3001;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "public")));
server.use(routes);

server.listen(PORT, () => {

    console.log(`Server listening on port ${PORT}`);

});