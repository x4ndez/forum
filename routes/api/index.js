// API ROUTER

const router = require("express").Router();

router.use("/threads", require("./threads"));

module.exports = router;