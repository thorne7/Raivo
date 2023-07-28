const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection'); // Import the connection.js file
const exphbs = require('express-handlebars'); // Import express-handlebars
const helpers = require('./utils/helpers'); // Import your custom helper functions
const path = require('path');

const app = express();

// Create an instance of express-handlebars with custom options and helpers
const hbs = exphbs.create({ helpers });

// Configure express-handlebars as the view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware for parsing request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Configure express-session
const sess = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }, // Set to true for HTTPS
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(session(sess));

// Import your controllers
const userController = require('./controllers/userController');
const postController = require('./controllers/blogPostController');

// Set up routes
app.use('/users', userController);
app.use('/posts', postController);

app.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

// app.get('*', (req, res) => {
//   res.status(404).send('Page not found'); // You can render a 404 page or a custom error message here
// });

// Sync the database and start the server
sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`);
  });
});