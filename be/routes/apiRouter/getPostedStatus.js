const express = require("express");
const router = express.Router();
const PostStatus = require("../../models/postStatus");

router.get("/:id", async (req, res, next) => {
    try {
        const status = await PostStatus.find(req.params._id);
        res.json({ status });
    } catch (error) {
        res.status(500).json({ message: "cant get user id" });
    }
})

module.exports = router;