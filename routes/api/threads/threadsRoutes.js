const router = require("express").Router();
const {
    User, Thread, Comment
} = require("../../../models");

// localhost/api/threads

router.get("/", async (req, res) => {

    const x = await Thread.findAll({
        include: [{ model: Comment }],
    });

    res.status(200).json(x);

});

module.exports = router;