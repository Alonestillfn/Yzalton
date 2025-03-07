const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const PostStatus = require("../../models/postStatus");

const secretKey = "mysecretkey123456";

router.post("/", async (req, res, next) => {
    const { content, images, publicId, visibility } = req.body;
    const token = req.cookies.token;
    const decodeToken = jwt.verify(token, secretKey);
    const { id: userId, name } = decodeToken;
    const newPost = new PostStatus({ userId, name, content, images, publicId, visibility });
    await newPost.save();
})

router.get("/", (req, res) => {
    res.send("PostStatusRoute");
})

module.exports = router;