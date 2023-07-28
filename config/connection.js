// config/connection.js
const Sequelize = require('sequelize');
require('dotenv').config();

const { DB_NAME, DB_USER, DB_PASS } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: 'localhost', // Replace with your database host if needed
  dialect: 'mysql',
});

module.exports = sequelize;