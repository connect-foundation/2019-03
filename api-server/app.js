const express = require('express');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const cors = require('cors');
const helmet = require('helmet');
const graphqlHTTP = require('express-graphql');
const { graphqlUploadExpress } = require('graphql-upload');

const initPassport = require('./config/passport-config');
const redisClient = require('./config/redis-config');
const { isAuthenticated } = require('./api/middlewares/auth');
const { schema } = require('./api/graphql');
const { formatError, errorName } = require('./error');

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
    store: new RedisStore({ client: redisClient }),
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
  graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
    context: { errorName },
    customFormatErrorFn: err => formatError.getError(err),
  }),
);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  if (err.status === 404) {
    return res.redirect('/');
  }
});

module.exports = app;
