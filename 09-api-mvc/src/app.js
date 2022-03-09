const express = require('express');
const morgan = require('morgan');
const dbConnection = require('./infra/database/dbConnection');
const MoviesController = require('./movies/controllers/moviesController');
const CategoriesModel = require('./movies/models/categoriesModel');
const MoviesModel = require('./movies/models/moviesModel');
const UsersController = require('./users/controllers/usersController');
const UsersModel = require('./users/models/usersModel');

const app = express();
app.use(morgan('common'));
app.use(express.json());

app.get('/health', (_, res) => {
  res.send();
});

const usersModel = new UsersModel(dbConnection);
const usersController = new UsersController(usersModel);
app.use('/users', usersController.buildRouter());

const categoriesModel = new CategoriesModel(dbConnection);
const moviesModel = new MoviesModel(dbConnection);
const moviesController = new MoviesController(moviesModel, categoriesModel);
app.use('/movies', moviesController.buildRouter());

module.exports = app;
