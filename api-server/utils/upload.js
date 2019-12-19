const AWS = require('aws-sdk');

const endpoint = new AWS.Endpoint('https://kr.object.ncloudstorage.com');
const region = 'kr-standard';
const accessKey = `${process.env.ACCESS_KEY}`;
const secretKey = `${process.env.SECRET_KEY}`;

AWS.config.update({
  accessKeyId: accessKey,
  secretAccessKey: secretKey,
});

const s3 = new AWS.S3({
  endpoint,
  region,
});

const uploadImageFileToS3 = async (file, dir) => {
  const { filename, createReadStream } = await file;
  const stream = createReadStream();

  const extensionRegex = /(.jpg|.gif|.jpeg|.png)$/i;
  if (!extensionRegex.test(filename)) {
    return false;
  }

  const imageFile = await s3
    .upload({
      Bucket: `${process.env.BUCKET}`,
      ACL: 'public-read',
      Key: `${dir}/${Date.now().toString()}_${filename}`,
      Body: stream,
    })
    .promise();

  return imageFile;
};

module.exports = { s3, uploadImageFileToS3 };
