const mongoose = require("mongoose");

const postStatus = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },
    name: { type: String, require: true, trim: true },
    content: { type: String, require: true, trim: true },
    images: [{ type: String }],
    publicId: { type: String },
    visibility: { type: String, enum: ["Public", "Friends", "Private"], default: "Public" },
    createAt: { type: Date, default: Date.now },
    // likes: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    // comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }]
})

const PostStatus = mongoose.model("postStatus", postStatus);
module.exports = PostStatus;