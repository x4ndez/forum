// ROUTER START

const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes.js");
const threadRoutes = require("./threadRoutes.js");

router.use("/", homeRoutes);
router.use("/thread", threadRoutes);
router.use("/api", apiRoutes);

module.exports = router;