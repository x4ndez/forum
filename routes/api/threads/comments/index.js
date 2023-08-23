// COMMENTS ROUTER

const router = require("express").Router();

router.use("/", require("./commentsRoutes.js"));

module.exports = router;