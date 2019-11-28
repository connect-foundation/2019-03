const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const endpoint = new AWS.Endpoint('https://kr.object.ncloudstorage.com');
const region = 'kr-standard';
const access_key = '';
const secret_key = '';

AWS.config.update({
  accessKeyId: access_key,
  secretAccessKey: secret_key,
});

const s3 = new AWS.S3({
  endpoint,
  region,
});

const storage = multerS3({
  s3,
  bucket: '',
  acl: 'public-read',
  key(req, file, cb) {
    console.log(file);
    cb(null, `post/${Date.now().toString()}_${file.originalname}`);
  },
});

const uploads = multer({ storage }).single('file');

module.exports = uploads;
