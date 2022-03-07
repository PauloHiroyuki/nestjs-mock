import { Injectable } from "@nestjs/common";

var { DynamoDB } = require("aws-sdk");

@Injectable()
export class DynamoConfig {

    dynamoDb;

    constructor() {
        this.dynamoDb = new DynamoDB.DocumentClient({
            accessKeyId: process.env.AWS_KEY,
            secretAccessKey: process.env.AWS_SECRET_KEY,
            region: process.env.AWS_REGION
        });

        console.log({
            accessKeyId: process.env.AWS_KEY,
            secretAccessKey: process.env.AWS_SECRET_KEY,
            region: process.env.AWS_REGION
        });
    }

};