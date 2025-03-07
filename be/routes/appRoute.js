const express = require("express");
const router = express.Router();
const apiRouter = require("./apiRouter");

router.use("/api", apiRouter);
router.use("/", (req, res) => {
    res.send("appRoute");
})

module.exports = router