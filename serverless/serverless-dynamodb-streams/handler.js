'use strict';

const AWS = require('aws-sdk');

function display(object) {
    return JSON.stringify(object, null, 2);
};
module.exports.updateProfile = (event, context, callback) => {
    const dynamoDb = new AWS.DynamoDB.DocumentClient();

    const data = event;
    data.updatedAt = new Date().getTime();

    const params = {
        TableName: 'users',
        Item: data
    };

    return dynamoDb.put(params, (error, data) => {
        if (error) {
            callback(error);
        }
        callback(null, { message: 'Profile successfully updated', params });
    });
};

module.exports.logger = (event, context, callback) => {
    // console.log(`The following happend in the DynamoDB database table "users":\n${JSON.stringify(event.Records[0].dynamodb, null, 2)}`);
    // callback(null, { event });
    console.log('Event: ', display(event));
    console.log('Context: ', display(context));
    callback(null, { event });
    // const response = {
    //     statusCode: 200,
    //     body: JSON.stringify({
    //         message: 'Go Serverless v1.0! Your function executed successfully!',
    //         input: event,
    //     }),
    // };
};