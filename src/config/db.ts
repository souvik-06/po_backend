import AWS, { config, DynamoDB, S3 } from "aws-sdk";
import dotenv from "dotenv";
dotenv.config();
AWS.config.update({
  accessKeyId: process.env.MY_ACCESS_KEY_ID,
  secretAccessKey: process.env.MY_SECRET_ACCESS_KEY,
  region: process.env.MY_REGION,
});

const docClient = new AWS.DynamoDB.DocumentClient();
const s3bucket = new S3({
  accessKeyId: process.env.MY_ACCESS_KEY_ID,
  secretAccessKey: process.env.MY_SECRET_ACCESS_KEY,
  region: process.env.MY_REGION,
});

export { docClient, s3bucket };
