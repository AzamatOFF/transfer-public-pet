require('dotenv').config();

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

// const { sequelize } = require('../db/models');
const ssr = require('./src/middleware/ssr');

// Импортируем созданный в отдельный файлах рутеры.
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/trans.api.router');
const isAuth = require('./src/middleware/isAuth');

const app = express();
// Выносим порт в .env и на всякий случай подставляем дефолтный через ||
const { PORT, SESSION_SECRET } = process.env;

const sessionConfig = {
  name: 'transfer', // * Название куки
  store: new FileStore(), // * подключение стора (БД для куки) для хранения
  secret: SESSION_SECRET ?? 'your key', // * ключ для шифрования куки
  resave: false, // * если true, пересохраняет сессию, даже если она не поменялась
  saveUninitialized: false, // * Если false, куки появляются только при установке req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 1, // * время жизни в ms (1 дней)
    httpOnly: true, // * куки только по http
  },
};

app.use(session(sessionConfig));

app.use(morgan('dev'));
// Чтобы наши статические файлы были видны браузеру, мы должны их подключить
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(ssr);

app.use('/', indexRouter);
app.use('/api', apiRouter);

app.get('*', (req, res) => {
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Сервер поднят на ${PORT} порту!`);
});
