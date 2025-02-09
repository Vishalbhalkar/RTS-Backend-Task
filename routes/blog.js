const express = require('express');
const router = express.Router();
const { createBlog, getBlogs } = require('../controllers/blogController');
const auth = require('../middlewares/auth');

router.post('/events', auth, createBlog);
router.get('/events', auth, getBlogs);

module.exports = router;