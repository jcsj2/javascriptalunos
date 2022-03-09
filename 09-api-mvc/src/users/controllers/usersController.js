const { Router } = require('express');
const Yup = require('yup');
const jwt = require('jsonwebtoken');
const User = require('../entities/User');

class UsersController {
  constructor(usersModel) {
    this.usersModel = usersModel;
  }

  buildRouter() {
    const router = Router();
    router.post('/signup', this.signUpHandle.bind(this));
    router.post('/signin', this.signInHandle.bind(this));
    return router;
  }

  async signUpHandle(req, res) {
    const validator = Yup.object().shape({
      name: Yup.string().required().max(255),
      email: Yup.string().required().max(255).email(),
      birthday: Yup.date().required(),
      personalDocument: Yup.string().required().matches(/^[0-9]{11,14}$/),
      password: Yup.string().required().max(20),
    });

    if (!validator.isValidSync(req.body)) {
      /*
        IF DEV -> validateSync() catch error and return

      try {
        validator.validateSync(req.body, { abortEarly: false });
      } catch (err) {
        console.log(err);
      }
      */
      res.sendStatus(422);
      return;
    }

    const {
      name, email, personalDocument, birthday, password,
    } = req.body;

    const newUser = new User(
      name,
      email,
      personalDocument,
      new Date(birthday),
      User.hashPassword(password),
    );

    const count = await this.usersModel.countByEmailOrPersonalDocument(email, personalDocument);

    if (count > 0) {
      res.status(400).json({
        error: {
          code: 'USER_01',
          message: 'Invalid informations',
        },
      });
      return;
    }

    const userId = await this.usersModel.create(newUser);
    res.setHeader('Location', `/users/${userId}`);
    res.sendStatus(201);
  }

  async signInHandle(req, res) {
    const validator = Yup.object().shape({
      email: Yup.string().required().max(255).email(),
      password: Yup.string().required().max(20),
    });

    if (!validator.isValidSync(req.body)) {
      res.sendStatus(400);
      return;
    }

    const { email, password } = req.body;

    const userDb = await this.usersModel.findByEmail(email);
    if (!userDb || !User.checkPassword(password, userDb.password)) {
      res.status(400).json({
        error: {
          code: 'USER_02',
          message: 'Invalid e-mail/password',
        },
      });
      return;
    }

    const { id, name } = userDb;

    const { JWT_SECRET, JWT_EXPIRES_IN_MINUTES } = process.env;

    const token = jwt.sign({
      sub: id,
      nameOfUser: name,
    }, JWT_SECRET, { expiresIn: `${JWT_EXPIRES_IN_MINUTES}m` });

    res.json({
      token,
    });
  }
}

module.exports = UsersController;
