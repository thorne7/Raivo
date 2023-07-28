const express = require('express');
const router = express.Router();
const { hashPassword, comparePassword } = require('../utils/auth');
const { User } = require('../models/User');

// Route for user registration
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username already exists
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already taken' });
    }

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Create a new user in the database
    const newUser = await User.create({ username, password: hashedPassword });

    // Optionally, you can log in the user automatically after registration
    req.session.userId = newUser.id;

    // Respond with a success message or redirect to a dashboard page
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during user registration:', error);
    res.status(500).json({ error: 'Error during user registration' });
  }
});

// Route for user login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user in the database based on the username
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare the password with the hashed password in the database
    const isPasswordMatch = await comparePassword(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Store the user ID in the session to keep the user logged in
    req.session.userId = user.id;

    // Redirect to the dashboard page or respond with a success message
    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error during user login:', error);
    res.status(500).json({ error: 'Error during user login' });
  }
});

// Route for rendering the dashboard
router.get('/dashboard', async (req, res) => {
  try {
    // Check if the user is logged in
    if (!req.session.userId) {
      return res.status(401).json({ error: 'You must be logged in to access the dashboard' });
    }

    // Fetch user data based on the logged-in user's ID
    const user = await User.findByPk(req.session.userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Respond with user data in JSON format
    res.json({ username: user.username, email: user.email }); // Add more user data properties as needed
  } catch (error) {
    console.error('Error fetching user data for dashboard:', error);
    res.status(500).json({ error: 'Error fetching user data for dashboard' });
  }
});

module.exports = router;
