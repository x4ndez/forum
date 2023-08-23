const router = require("express").Router();
const {
    User, Thread, Comment
} = require("../models");

// localhost/threads

router.get("/:id", async (req, res) => {

    const findThreadById = await Thread.findByPk(req.params.id, {
        include: [{ model: Comment, order: "id", include: { model: User } }, { model: User }],
    });

    const selectedThread = findThreadById.get({ plain: true });

    console.log(selectedThread);

    res.render("thread-detailed", { thread: selectedThread });

});

module.exports = router;