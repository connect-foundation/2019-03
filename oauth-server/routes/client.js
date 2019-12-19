const express = require("express");
const client = express.Router();
const { register } = require("../services/client-service");

client.get("/register", async function(req, res, next) {
  try {
    const client = req.body;
    await register(client);
    res.json({ result: "success" });
  } catch (err) {
    next(err);
  }
});

module.exports = client;
