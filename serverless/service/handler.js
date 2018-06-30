'use strict';

module.exports.apiGatewayGet = function(event, context, callback) {
    console.log('EVENT', event); // Contains incoming request data (e.g., query params, headers and more)
    console.log('CONTEXT', context);
    console.log('CALLBACK', callback);
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*", // Required for CORS support to work
            "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
        },
        body: JSON.stringify({ "message": "Hello World!" })
    };
    callback(null, response);
};
module.exports.apiGatewayPost = function(event, context, callback) {
    console.log('EVENT', event); // Contains incoming request data (e.g., query params, headers and more)
    console.log('CONTEXT', context);
    console.log('CALLBACK', callback);
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*", // Required for CORS support to work
            "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
        },
        body: JSON.stringify(event)
    };
    callback(null, response);
};

module.exports.apiGatewayAuth = function(event, context, callback) {
    console.log('apiGatewayAuth');
    console.log('EVENT', event); // Contains incoming request data (e.g., query params, headers and more)
    console.log('CONTEXT', context);
    console.log('CALLBACK', callback);
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*", // Required for CORS support to work
            "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
        },
        body: JSON.stringify(event)
    };
    callback(null, response);
};
module.exports.authorizerFunc = function(event, context, callback) {
    console.log('authorizerFunc');
    console.log('EVENT', event); // Contains incoming request data (e.g., query params, headers and more)
    console.log('CONTEXT', context);
    console.log('CALLBACK', callback);
    // var token = event.authorizationToken.split(' ')[1];
    // if (token === 'pass') {
    //     context.succeed(generatePolicy('user', 'Allow', event.methodArn));
    // } else {
    //     context.fail("Unauthorized");
    // }

    var token = event.authorizationToken;
    switch (token.toLowerCase()) {
        case 'allow':
            callback(null, generatePolicy('user', 'Allow', event.methodArn));
            break;
        case 'deny':
            callback(null, generatePolicy('user', 'Deny', event.methodArn));
            break;
        case 'unauthorized':
            callback("Unauthorized"); // Return a 401 Unauthorized response
            break;
        default:
            callback("Error: Invalid token");
    }
};

var generatePolicy = function(principalId, effect, resource) {
    var authResponse = {};

    authResponse.principalId = principalId;
    if (effect && resource) {
        var policyDocument = {};
        policyDocument.Version = '2012-10-17'; // default version
        policyDocument.Statement = [];
        var statementOne = {};
        statementOne.Action = 'execute-api:Invoke'; // default action
        statementOne.Effect = effect;
        statementOne.Resource = resource;
        policyDocument.Statement[0] = statementOne;
        authResponse.policyDocument = policyDocument;
    }

    // Can optionally return a context object of your choosing.
    // authResponse.context = {};
    // authResponse.context.stringKey = "stringval";
    // authResponse.context.numberKey = 123;
    // authResponse.context.booleanKey = true;
    return authResponse;
}

module.exports.cognitoAuth = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless v1.0! Your function executed successfully!',
            input: event,
        }),
    };

    callback(null, response);

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};