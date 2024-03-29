const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");
const initPassport = require("./config/passport-config");
require("./db");

const clientRouter = require("./routes/client");
const apiRouter = require("./routes/api");
const oauthRouter = require("./routes/oauth");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.use(helmet());
app.use(
  cors({
    origin: "*",
    credentials: true
  })
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { httpOnly: true, maxAge: 600000 }
  })
);
initPassport(app);

app.use("/client", clientRouter);
app.use("/api", apiRouter);
app.use("/oauth2", oauthRouter);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error_name: err.name,
    error_message: err.message
  });
});

module.exports = app;
