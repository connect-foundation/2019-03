const express = require("express");

const { validateAccessToken } = require("../middlewares");
const userService = require("../services/user-service");

const api = express.Router();

api.get("/profile", validateAccessToken, async (req, res, next) => {
  try {
    const { resourceOwner: username } = req.tokenInfo;
    const profile = await userService.getUserProfile(username);

    res.status(200).json({
      id: profile.id,
      username: profile.username,
      name: profile.name,
      email: profile.email,
      profileImage: profile.profileImage
    });
  } catch (err) {
    next(err);
  }
});

module.exports = api;
