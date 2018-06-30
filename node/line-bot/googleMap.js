var express = require('express');
var request = require('request');


// query address by googlemap api
var key = process.env.apikey || 'AIoA';
var options = {
    url: 'https://maps.googleapis.com/maps/api/place/details/json',
    method: 'GET',
    qs: {
        'key': key,
        'placeid': '',
    },
};
var placeArray = ['ChIJlXoEWLmrQjQR0H5nALEb-e4', 'ChIJHzxo8HKpQjQRBfRxUW6538E', 'ChIJExxI5G6pQjQRvwxapNQ25QQ'];
options.qs.placeid = placeArray[0];

// request(options, (error, response, body) => {
//     if (!error && response.statusCode === 200) {
//         const resultObj = JSON.parse(body);
//         console.log(resultObj);
//     } else {
//         console.log('STATUS', response.statusCode);
//         console.log('ERROR', error);
//     }
// });

// const promise = new Promise((resolve, reject) => {
//     request(options, (error, response, body) => {
//         if (!error && response.statusCode === 200) {
//             const resultObj = JSON.parse(body);
//             console.log(resultObj);
//             resolve(resultObj);
//         } else {
//             reject(new Error(error));
//             console.log('STATUS', response.statusCode);
//             console.log('ERROR', error);
//         }
//     });
// });
// promise.then((data) => {
//     console.log(data);
// })

function getDetail(placeId) {
    options.qs.placeid = placeId;
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                const resultObj = JSON.parse(body);
                // console.log(resultObj);
                resolve(resultObj);
            } else {
                // console.log('STATUS', response.statusCode);
                // console.log('ERROR', error);
                reject(new Error(error));
            }
        });
    });
}

// const promise1 = getDetail(placeArray[0]);
// promise1.then((data) => {
//     console.log(data);
// });

const promiseDetailArray = placeArray.map(placeId => getDetail(placeId));
Promise.all(promiseDetailArray).then((dataArray) => {
    dataArray.forEach((dataObj) => {
        console.log(dataObj.result.name);
        console.log(dataObj.result.formatted_phone_number);
        console.log(dataObj.result.international_phone_number);
    });
});
