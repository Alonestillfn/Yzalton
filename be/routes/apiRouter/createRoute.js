const express = require("express");
const router = express.Router();
const User = require('../../models/user');
const bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res.status(400).json({ success: false, message: "Email existed!" });
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
        res.json({ success: true, message: "Đăng ký thành công!" });
    } catch (error) {
        console.log("Error: ", error);
        res.status(400).json({ success: false, message: "Server error!" });
    }
})

router.get('/', (req, res) => {
    res.send("createRoute");
})

module.exports = router;