const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) return res.json({ success: false, message: "Chưa đăng nhập!"});

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ success: false, message: "Token không hợp lệ!" });
    }
};

module.exports = authMiddleware;