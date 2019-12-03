const express = require("express");
const router = express.Router();
const registration = require("../services/registration");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

/*
req.body = {
  type
  redirectionURI
  app_name
  website
  description
}
*/
router.get("/register", async function(req, res, next) {
  const client = req.body;
  try {
    const clientInfo = await registration(client);
    res.json({ data: clientInfo });
  } catch (e) {
    if (e.name === "client_error") {
      res.json({ result: "fail", message: "e.message" });
    } else {
      res.json({ result: "fail", message: "server error" });
    }
  }
});

module.exports = router;
