const User = require("./User.js");
const Thread = require("./Thread.js");
const Comment = require("./Comment.js");

// 1 user has many threads, 1 thread has 1 user
User.hasMany(Thread, {
    foreignKey: "user_id",
});

Thread.belongsTo(User, {

});

// 1 user has many comments, 1 comment has 1 user
User.hasMany(Comment, {
    foreignKey: "user_id",
});

Comment.belongsTo(User, {

});

// 1 thread has many comments, 1 comment has 1 thread
Thread.hasMany(Comment, {
    foreignKey: "thread_id",
});

Comment.belongsTo(Thread, {
    // foreignKey: "thread_id",
});

module.exports = {

    User,
    Thread,
    Comment

}