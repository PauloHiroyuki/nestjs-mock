var { DynamoDB } = require("aws-sdk");

const dynamoDb = new DynamoDB.DocumentClient({
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION
});

export default dynamoDb;