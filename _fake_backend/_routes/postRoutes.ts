// const express = require('express');
// const r = express.Router();
const { protect: protectPosts } = require('../_middlewares/auth_middleware');

const expressPost = require('express');
const postR = expressPost.Router();

const blogC = require('../_controllers/blogArticleController');

postR.get('/posts', blogC.getPosts);
postR.get('/post/:id', blogC.getPostById);
postR.post('/posts', protectPosts, blogC.createPost);


module.exports = postR;