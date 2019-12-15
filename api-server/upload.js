const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const endpoint = new AWS.Endpoint('https://kr.object.ncloudstorage.com');
const region = 'kr-standard';
const access_key = `${process.env.ACCESS_KEY}`;
const secret_key = `${process.env.SECRET_KEY}`;

AWS.config.update({
  accessKeyId: access_key,
  secretAccessKey: secret_key,
});

const s3 = new AWS.S3({
  endpoint,
  region,
});

module.exports = s3;
