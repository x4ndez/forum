const User = require("../models/User.js");
const Thread = require("../models/Thread.js");
const Comment = require("../models/Comment.js");

const users = [

    {
        username: "alex",
        password: "cooldude",
    },
    {
        username: "admin",
        password: "admin123456",
    },
    {
        username: "superbro",
        password: "WHATTHEFUCK",
    },

];

const threads = [

    {
        title: "I like cats",
        content: "Like seriously, they're fucking awesome, who doesn't like cats?",
        user_id: 1,
    },
    {
        title: "Dogs",
        content: "DOGS ARE SO FUCKIN FLUFFY AND ADORABLE BRO",
        user_id: 2,
    },

];

const comments = [

    {
        content: "Meh, they're okay",
        user_id: 2,
        thread_id: 1
    },
    {
        content: "Lol, I'm talking to myself aye",
        user_id: 2,
        thread_id: 1
    },
    {
        content: "Nah, it's okay bro I'm here 4 u",
        user_id: 2,
        thread_id: 1
    },
    {
        content: "bromance<3",
        user_id: 3,
        thread_id: 1
    }

];

User.bulkCreate(users);
Thread.bulkCreate(threads);
Comment.bulkCreate(comments);

