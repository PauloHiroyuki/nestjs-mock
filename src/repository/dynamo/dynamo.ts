var { DynamoDB } = require("aws-sdk");

const dynamoDb = new DynamoDB.DocumentClient({
    accessKeyId: 'AKIA45BWE46JXZCZGYJA',
    secretAccessKey: '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',
    region: 'sa-east-1'
});

export default dynamoDb;