const router = require("express").Router();

// localhost/

router.get("/", (req, res) => {

    res.render("home");

});

module.exports = router;