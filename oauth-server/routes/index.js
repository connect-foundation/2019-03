const express = require("express");
const router = express.Router();
const registration = require("../services/registration");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/register", async function(req, res, next) {
  try {
    const client = req.body;
    await registration(client);
    res.json({ result: "success" });
  } catch (e) {
    if (e.name === "client_error") {
      res.json({ result: "fail", message: "e.message" });
    } else {
      res.json({ result: "fail", message: "server error" });
    }
  }
});

module.exports = router;
