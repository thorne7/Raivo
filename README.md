# Tech-Blog Application

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2012.0.0-brightgreen.svg)](https://nodejs.org/)
[![Express Version](https://img.shields.io/badge/express-%3E%3D%204.17.1-blue.svg)](https://expressjs.com/)
[![Handlebars Version](https://img.shields.io/badge/handlebars-%3E%3D%204.7.7-orange.svg)](https://handlebarsjs.com/)
[![Sequelize Version](https://img.shields.io/badge/sequelize-%3E%3D%206.6.2-yellow.svg)](https://sequelize.org/)
[![MySQL2 Version](https://img.shields.io/badge/mysql2-%3E%3D%202.3.3-lightgrey.svg)](https://www.npmjs.com/package/mysql2)
[![dotenv Version](https://img.shields.io/badge/dotenv-%3E%3D%208.2.0-lightgrey.svg)](https://www.npmjs.com/package/dotenv)
[![bcrypt Version](https://img.shields.io/badge/bcrypt-%3E%3D%205.0.1-lightgrey.svg)](https://www.npmjs.com/package/bcrypt)
[![express-session Version](https://img.shields.io/badge/express--session-%3E%3D%2011.3.5-lightgrey.svg)](https://www.npmjs.com/package/express-session)
[![connect-session-sequelize Version](https://img.shields.io/badge/connect--session--sequelize-%3E%3D%205.2.0-lightgrey.svg)](https://www.npmjs.com/package/connect-session-sequelize)

## Description
The Tech-Blog application is a platform where users can share their thoughts and ideas through blog posts. It follows the Model-View-Controller (MVC) paradigm and is built using Node.js and Express.js for the server-side, MySQL database for data storage, and Handlebars.js for rendering views.

## Installation
1. Clone the repository.
2. Run `npm install` to install the required dependencies.
3. Set up the MySQL database and update the connection settings in `config/connection.js`.
4. Create a `.env` file in the project root and provide the following environment variables:
   - `DB_NAME`: MySQL database name
   - `DB_USER`: MySQL database username
   - `DB_PASSWORD`: MySQL database password
   - `SESSION_SECRET`: A secret key for session management
5. Run the application using `node server.js`.

## Features
- User Registration and Login with authentication and password hashing.
- Create, Read, Update, and Delete (CRUD) blog posts.
- User-specific dashboard to manage their posts.
- Responsive and user-friendly design.

## Technologies Used
- Node.js
- Express.js
- Handlebars.js
- Sequelize (MySQL2)
- dotenv
- bcrypt
- express-session
- connect-session-sequelize

## License
This project is licensed under the [MIT License](LICENSE).

