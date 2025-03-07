const mongoose = require("mongoose");

const userScheme = mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
});

const User = mongoose.model("User", userScheme);
module.exports = User;