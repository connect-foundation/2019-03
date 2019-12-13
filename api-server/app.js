const express = require('express');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const cors = require('cors');
const helmet = require('helmet');
const graphqlHTTP = require('express-graphql');
const multer = require('multer');
const initPassport = require('./config/passport-config');
const { isAuthenticated } = require('./api/middlewares/auth');

const { schema } = require('./api/graphql');
const upload = require('./upload');
const { insertPost } = require('./api/services/PostService');

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: process.env.WEB_URL,
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { httpOnly: true, maxAge: 86400000 },
  }),
);
initPassport(app);
app.use(logger('dev'));

app.use('/account', require('./api/routes/account-route'));

app.use(
  '/graphql',
  isAuthenticated,
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  }),
);

app.use('/upload', (req, res, next) => {
  try {
    upload(req, res, err => {
      const extensionRegex = /(.jpg|.gif|.jpeg|.png)$/i;
      if (!extensionRegex.test(req.file.originalname)) {
        return res.json({ result: 'fail', message: 'extension' });
      }

      if (err instanceof multer.MulterError) {
        return next(err);
      }
      if (err) {
        return next(err);
      }
      insertPost(req.file, req.body);

      return res.json({ result: 'success' });
    });
  } catch (e) {
    console.log(e.message);
  }
});

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // 나중에 에러 처리는 상세히
  res.status(err.status || 500).json({});
});

module.exports = app;
