const express = require('express');
const router = express.Router();
const loginRoute = require('./loginRoute');
const createAcc = require('./createRoute');
const checkLogin = require("./checkLogin");
const logout = require("./logoutRoute");
const postStatus = require("./postStatusRoute");
const tokenRoute = require("./tokenRoute")
const getPostedStatus = require("./getPostedStatus");
const deletePostRoute = require("./deletePostRoute");

router.use("/login", loginRoute);
router.use('/createAcc', createAcc);
router.use('/checkLogin', checkLogin);
router.use('/logout', logout)
router.use("/postStatus", postStatus);
router.use('/tokenRoute', tokenRoute);
router.use("/getPostedStatus", getPostedStatus);
router.use("/deletePost", deletePostRoute)

module.exports = router;
