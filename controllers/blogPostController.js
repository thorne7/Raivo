// controllers/postController.js

const express = require('express');
const router = express.Router();
const { Post } = require('../models');

// Route for creating a new post
router.post('/', async (req, res) => {
  try {
    const { title, content } = req.body;

    // Create a new post in the database
    const newPost = await Post.create({ title, content });

    // Respond with the newly created post data
    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error creating a new post:', error);
    res.status(500).json({ error: 'Error creating a new post' });
  }
});

// Route for fetching all posts
router.get('/', async (req, res) => {
  try {
    // Fetch all posts from the database
    const posts = await Post.findAll();

    // Respond with the list of posts
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Error fetching posts' });
  }
});

// Route for fetching a single post by ID
router.get('/:id', async (req, res) => {
  try {
    const postId = req.params.id;

    // Find the post in the database based on the ID
    const post = await Post.findByPk(postId);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Respond with the post data
    res.json(post);
  } catch (error) {
    console.error('Error fetching a post by ID:', error);
    res.status(500).json({ error: 'Error fetching a post by ID' });
  }
});

// Route for updating a post by ID
router.put('/:id', async (req, res) => {
  try {
    const postId = req.params.id;
    const { title, content } = req.body;

    // Find the post in the database based on the ID
    const post = await Post.findByPk(postId);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Update the post data
    post.title = title;
    post.content = content;
    await post.save();

    // Respond with the updated post data
    res.json(post);
  } catch (error) {
    console.error('Error updating a post by ID:', error);
    res.status(500).json({ error: 'Error updating a post by ID' });
  }
});

// Route for deleting a post by ID
router.delete('/:id', async (req, res) => {
  try {
    const postId = req.params.id;

    // Find the post in the database based on the ID
    const post = await Post.findByPk(postId);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Delete the post from the database
    await post.destroy();

    // Respond with a success message
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting a post by ID:', error);
    res.status(500).json({ error: 'Error deleting a post by ID' });
  }
});

module.exports = router;
