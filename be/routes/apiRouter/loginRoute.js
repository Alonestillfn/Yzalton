const express = require("express")
const router = express.Router();
const User = require("../../models/user")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (!existingUser)
            return res.status(400).json({ success: false, message: "Email or password is incorrect!" });
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch)
            return res.status(400).json({ success: false, message: "Password incorrect!" });
        
        const token = jwt.sign(
            { id: existingUser._id, name: existingUser.name},
            process.env.JWT_SECRET,
            { expiresIn: "5h" },
        )

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            maxAge: 3600000,
            sameSite: "lax",
        })

        return res.status(200).json({ success: true, message: "Login complete" });
    } catch (error) {
        console.log("Error: ", error);
        res.status(400).json({ success: false, message: "Server error!" });
    }
})

router.get("/", (req, res) => {
    res.send("loginRoute");
})

module.exports = router