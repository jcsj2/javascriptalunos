const { Router } = require('express');
const Yup = require('yup');
const authMiddleware = require('../../shared/middlewares/authMiddleware');

class MoviesController {
  constructor(moviesModel, categoriesModel) {
    this.moviesModel = moviesModel;
    this.categoriesModel = categoriesModel;
  }

  buildRouter() {
    const router = Router();
    router.post('/new', authMiddleware, this.newHandle.bind(this));
    router.get('/search', this.searchHandler.bind(this));
    return router;
  }

  async newHandle(req, res) {
    const validator = Yup.object().shape({
      title: Yup.string().required().max(255),
      price: Yup.number().required().positive(),
      quantity: Yup.number().required().positive(),
      categoryId: Yup.number().required().positive(),
    });

    if (!validator.isValidSync(req.body)) {
      res.sendStatus(422);
      return;
    }

    const {
      title, price, quantity, categoryId,
    } = req.body;

    const newMovie = {
      title,
      price,
      quantity,
      categoryId,
      userId: req.userId,
    };

    const categoryDb = await this.categoriesModel.findById(categoryId);

    if (!categoryDb) {
      res.status(422).json({
        error: {
          code: 'MOVIE_01',
          message: 'Category does not exists',
        },
      });

      return;
    }

    const movieId = await this.moviesModel.create(newMovie);
    res.setHeader('Location', `/movies/${movieId}`);
    res.sendStatus(201);
  }

  async searchHandler(req, res) {
    const { query } = req;

    const movies = await this.moviesModel.search(query);
    res.json({
      movies,
    });
  }
}

module.exports = MoviesController;
