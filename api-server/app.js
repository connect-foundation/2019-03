const express = require('express');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const helmet = require('helmet');
const graphqlHTTP = require('express-graphql');

const { schema } = require('./api/graphql');

const app = express();

app.use(
  session({
    secret: '@#@youth$romantic$flex@#@',
    resave: false,
    saveUninitialized: true,
  }),
);
app.use(passport.initialize());
app.use(passport.session());
app.use(helmet());
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const isProduction = process.env.NODE_ENV !== 'production';
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: isProduction,
  }),
);

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
