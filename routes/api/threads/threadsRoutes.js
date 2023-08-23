const router = require("express").Router();
const {
    User, Thread, Comment
} = require("../../../models");

// localhost/api/threads

router.get("/", async (req, res) => {

    const threads = await Thread.findAll({
        // raw: true,
        include: [{ model: Comment }],
    });

    // const threadsx = threads.map((thread) => {
    //     return thread.get({ plain: true });
    // });

    res.status(200).json(threads);

});

router.get("/:id", async (req, res) => {

    const findThreadById = await Thread.findByPk({
        // raw: true,
        include: [{ model: Comment }, { model: User }],
    });

    const threadById = findThreadById.map((thread) => {
        return thread.get({ plain: true });
    });

    console.log(threadById);
    res.render("thread-detailed", { threadById });

});

module.exports = router;