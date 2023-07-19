const router = require('express').Router();

const Home = require('../views/Home');
const Login = require('../views/Login');
const Register = require('../views/Register');
const Selflist = require('../views/Selflist');
const Errorpage = require('../views/Errorpage');
const isAuth = require('../src/middleware/isAuth');
const { Passenger, Driver } = require('../db/models');
const Stats = require('../views/Stats');

router.get('/', (req, res) => {
  res.redirect('/home');
});

router.get('/home', async (req, res) => {
  try {
    const passlist = await Passenger.findAll({
      order: [['arrivalDate', 'ASC']],
    });
    res.render(Home, { passlist, user: req.session.user });
  } catch (error) {
    res.render(Errorpage, {
      message: 'Не удалось получить записи из базы данных.',
      error: {},
    });
  }
});

router.get('/home', (req, res) => {
  res.render(Home, {});
});

router.get('/signup', async (req, res, next) => {
  try {
    res.render(Register, {});
  } catch (error) {
    next(error);
  }
});

router.get('/login', async (req, res, next) => {
  try {
    res.render(Login, {});
  } catch (error) {
    next(error);
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.log(error);
    } else {
      res.clearCookie('transfer');
      res.redirect('/');
    }
  });
});

router.get('/self', isAuth, async (req, res, next) => {
  const { id } = req.session.user;
  try {
    const passlist = await Passenger.findAll({
      order: [['arrivalDate', 'ASC']],
      include: [
        {
          model: Driver,
          where: { id },
        },
      ],
    });
    res.render(Selflist, { passlist, user: req.session.user });
  } catch (error) {
    next(error);
  }
});

router.get('/stats', isAuth, async (req, res, next) => {
  const { id } = req.session.user;
  try {
    const pass = await Passenger.findAll({
      where: { completed: true },
      order: [['arrivalDate', 'ASC']],
      include: [
        {
          model: Driver,
          where: { id },
        },
      ],
    });
    const passlist = pass.map((e) => e.get({ plain: true }));
    res.render(Stats, { passlist, user: req.session.user });
  } catch (error) {
    next(error);
  }
});

router.patch('/reserve/:id', isAuth, async (req, res) => {
  try {
    const pass = await Passenger.update(
      { driverId: req.session.user.id },
      {
        where: { id: req.params.id },
        returning: true,
        plain: true,
      }
    );
    res.json({ msg: 'OK' });
  } catch (error) {
    console.log(error);
  }
});

router.patch('/completed/:id', isAuth, async (req, res) => {
  try {
    const pass = await Passenger.update(
      { completed: true },
      {
        where: { id: req.params.id },
        returning: true,
        plain: true,
      }
    );
    res.json({ msg: 'OK' });
  } catch (error) {
    console.log(error);
  }
});

router.delete('/self/:id', isAuth, async (req, res) => {
  try {
    await Passenger.destroy({ where: { id: req.params.id } });
    res.json({ msg: 'OK' });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
