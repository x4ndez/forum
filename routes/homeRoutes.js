const router = require("express").Router();
const {
    User, Thread, Comment
} = require("../models");

// localhost/

router.get("/", async (req, res) => {

    const findThreads = await Thread.findAll({
        include: [{ model: Comment }, { model: User }],
    });

    const threads = findThreads.map((thread) => {
        return thread.get({ plain: true });
    });
    console.log(threads);
    res.render("home", { threads });

});

module.exports = router;