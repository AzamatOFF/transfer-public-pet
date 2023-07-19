const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Driver } = require('../db/models');

router.post('/signup', async (req, res) => {
  const { name, password, phone, car } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const userData = await Driver.create({
      name,
      password: hashPassword,
      phone,
      car,
    });
    const user = userData.get({ plain: true });
    res.json({ message: 'OK' });
  } catch (error) {
    res.json({ message: 'Такой пользователь уже зарегистрироан' });
  }
});

router.post('/login', async (req, res) => {
  const { name, password } = req.body;
  try {
    const userData = await Driver.findOne({ where: { name } });
    const user = userData.get({ plain: true });
    const passwordCheck = await bcrypt.compare(password, user.password);
    if (passwordCheck) {
      req.session.user = user;
    }
    res.json({ message: 'OK' });
  } catch (error) {
    res.json({ message: 'Такой пользователь не зарегистрироан' });
  }
});

module.exports = router;
