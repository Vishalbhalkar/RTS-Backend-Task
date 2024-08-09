const Blog = require('../models/Blog');

exports.createBlog = async (req, res) => {
  const { image, name, date, description } = req.body;
  try {
    const newBlog = new Blog({
      user: req.user.id,
      image,
      name,
      date,
      description,
    });
    const blog = await newBlog.save();
    res.status(201).json(blog);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ user: req.user.id });
    res.json(blogs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};