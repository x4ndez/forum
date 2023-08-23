const User = require("./User.js");
const Thread = require("./Thread.js");
const Comment = require("./Comment.js");

User.hasMany(Thread);

Thread.belongsTo(User, {
    foreignKey: "user_id",
});

User.hasMany(Comment);

Comment.belongsTo(User, {
    foreignKey: "user_id",
});

Thread.hasMany(Comment);

Comment.belongsTo(Thread, {
    foreignKey: "thread_id",
});

module.exports = {

    User,
    Thread,
    Comment

}