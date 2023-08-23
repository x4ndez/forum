const User = require("../models/User.js");

const users = [

    {
        username: "alex",
        password: "cooldude",
    },
    {
        username: "admin",
        password: "admin123456",
    },

];

User.bulkCreate(users);
