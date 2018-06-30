// config access account (*should use cognito NOT hard code*)
// let myConfig = new AWS.Config();
// let newCredentails = new AWS.Credentials('', 'n+', 'session');
// console.log(newCredentails);
// myConfig.update({
//     region: 'us-east-1',
//     credentials: newCredentails,
// });
// console.log(myConfig);
let config = new AWS.Config({
    accessKeyId: 'AKIA',
    secretAccessKey: 'Eaa7',
    region: 'us-west-1',
});


let s3 = new AWS.S3({ // create s3 object
    apiVersion: '2006-03-01',
});
s3.config = config; // set config
s3.listBuckets(function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data); // successful response
});
let params = {
    Bucket: 'oahehc-test',
    Key: 'STRING_VALUE',
};
// s3.getObject(params, function(err, data) {
//     if (err) console.log(err, err.stack); // an error occurred
//     else console.log(data); // successful response
// });
// s3.listBuckets().on('success', (response) => {
//     console.log("Success!");
// }).on('error', (response) => {
//     console.log("Error!");
// }).on('complete', () => {
//     console.log("Always!");
// }).send();
// let params = {
//     Bucket: 'oahehcTest',
//     ACL: 'private',
// };
// s3.createBucket(params, function(err, data) {
//     if (err) console.log(err, err.stack); // an error occurred
//     else console.log(data); // successful response
// });

// let s3bucket = new AWS.S3({ // create s3 object by bucket
//     params: {
//         Bucket: 'oahehc'
//     },
//     apiVersion: '2006-03-01'
// });





// // create dynamoDB object
// let dynamodb = new AWS.DynamoDB({
//     apiVersion: '2012-08-10'
// });

// // set callback for async
// function callback(error, data) {
//     if (error) {
//         // error handling code
//         console.log('error', error);
//     } else {
//         // data handling code
//         console.log('success', data);
//     }
// };
// let s3 = new AWS.S3({
//     apiVersion: '2006-03-01',
// }, callback());

// bind callback to sucess event
// let s3 = new AWS.S3({
//     apiVersion: '2006-03-01',
// });
// console.log(s3);
