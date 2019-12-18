const redis = require('redis');

const redisClient = redis.createClient(
  process.env.REDIS_PORT,
  process.env.REDIS_HOST,
  { password: process.env.REDIS_PASSWORD },
);

module.exports = redisClient;
