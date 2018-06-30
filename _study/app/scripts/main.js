/* eslint-disable no-console */

// import * as _ from './plugin/lodash.min.js';
// import * as _ from 'lodash';
// var array = [1];
// var other = _.concat(array, 2);
// require('babel-core/register');
// require('babel-polyfill');


function doSomething1() {
    console.log('doSomething1 start')
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('doSomething1 end')
            resolve(1)
        }, 1000)
    })
}

function doSomething2() {
    console.log('doSomething2 start')
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('doSomething2 end')
            resolve(2)
        }, 1000)
    })
}

function finalThing(value) {
    console.log('finalThing start')
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('finalThing end')
            console.log(value)
            resolve(0)
        }, 1000)
    })
}

//第1種傳入參數，finalThing最後的值為2
doSomething1().then(doSomething2).then(finalThing)

//第2種傳入參數，finalThing最後的值為1
// doSomething1().then(doSomething2()).then(finalThing)

//第3種傳入參數，finalThing最後的值為undefined
// doSomething1().then(function() {
//     doSomething2()
// }).then(finalThing)

// //第4種傳入參數，finalThing最後的值為2
// doSomething1().then(function() {
//     return doSomething2()
// }).then(finalThing)
