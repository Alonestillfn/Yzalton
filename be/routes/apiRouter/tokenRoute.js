const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const secretKey = "mysecretkey123456";

router.get("/", (req, res, next) => {
    const token = req.cookies.token;
    const decodeToken = jwt.verify(token, secretKey);
    return res.json({data: decodeToken});
})

module.exports = router;