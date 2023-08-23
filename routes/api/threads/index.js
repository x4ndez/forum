// THREADS ROUTER

const router = require("express").Router();

router.use("/", require("./threadsRoutes.js"));
router.use("/comments", require("./comments"));

module.exports = router;