const express = require('express');
const { createPost, deletePost } = require('../controllers/post');
const {isAuthenticated} = require("../middlewares/auth");
const { likeAndUnlikePost } = require('../controllers/post');

const router = express.Router();

router.route("/post/upload").post(isAuthenticated,createPost);

router.route("/post/:id").get(isAuthenticated,likeAndUnlikePost).delete(isAuthenticated,deletePost);




module.exports= router;