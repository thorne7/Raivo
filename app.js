const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sequelize = require('./config/connection'); // Import the sequelize instance
const userRoutes = require('./controllers/userroutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Import routes here once you create them in the controllers folder

// Configure Handlebars as the view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Middleware for parsing request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware for serving static files from the public folder
app.use(express.static('public'));

// Middleware for session management using express-session
app.use(
  session({
    secret: '',
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
    cookie: {
      maxAge: 60 * 60 * 1000,
    },
  })
);

app.use('/api/users', userRoutes);

// Start the server
sequelize.authenticate().then(() => {
    console.log('Database connection has been established successfully.');
  
    // Start the server after the database connection is established
    app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`);
    });
  }).catch((err) => {
    console.error('Unable to connect to the database:', err);
  });