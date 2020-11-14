const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//GET posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//CREATE post
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    desc: req.body.desc,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//SHOW post
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});
//DELETE post
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});
//UPDATE post
router.patch('/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      desc: req.body.desc,
    });
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
