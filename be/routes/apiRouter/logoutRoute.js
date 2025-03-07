const express = require('express');
const router = express.Router();

router.post("/", (req, res) => {
    res.clearCookie("token", { path: "/" });
    res.status(200).json({ message: "Loggout successfully!" });
})

router.get("/", (req, res) => {
    res.send("logoutRoute");
})

module.exports = router;