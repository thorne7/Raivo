const Sequelize = require('sequelize');
require('dotenv').config(); // Load environment variables from .env file

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

const User = require('./User');

// Define associations (if any) here

module.exports = { User };
