const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary").v2
const PostStatus = require("../../models/postStatus");

cloudinary.config({
    cloud_name: "dxstaddot",
    api_key: "787511619417825",
    api_secret: "98eNv6ZTy3ut7rpdiiEvdGCgPU0"
});

router.post("/", async (req, res, next) => {
    const { userStatusId } = req.body;
    try {
        try {
            const post = await PostStatus.findOne({ _id: userStatusId });
            await cloudinary.uploader.destroy(post.publicId);
        } catch (error) {
            console.error("Error deleting image:", error);
        }
        
        await PostStatus.deleteOne({ _id: userStatusId });
        return res.json({ message: "Delete success", success: true });
    } catch (error) {
        res.json({ message: "Delete error", success: false });
    }
})

router.get("/", (req, res, next) => {
    res.send("deletePostRoute");
})

module.exports = router;