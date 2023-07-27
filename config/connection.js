const { Sequelize } = require('sequelize');

// Load environment variables from .env file
require('dotenv').config();

// Create a new Sequelize instance and establish the connection
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: 3306, // Change to your MySQL port if necessary
    logging: false, // Set to true to see SQL queries in the console (useful for debugging)
  }
);

module.exports = sequelize;