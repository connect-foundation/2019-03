const express = require("express");
const oauth = express.Router();

oauth.get("/authorize", (req, res) => {
  res.status(200).json({});
});

oauth.post("/token", tokenRequestValidate, (req, res) => {
  res.status(200).json({});
});

module.exports = oauth;
