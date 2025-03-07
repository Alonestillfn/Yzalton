const express = require("express");
const router = express.Router();

const authMiddleware = require("../../middlewares/auth");

router.get("/", authMiddleware, (req, res) => {
    return res.json({ success: true, user: req.user });
});

module.exports = router;