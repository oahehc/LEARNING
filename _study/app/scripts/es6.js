import "babel-polyfill";

// let
// arrow function
let double = num => num * 2;
let showName = () => 'Andrew';

// function with default(also allow to use function for default value)
let concate = (message, name = 'Andrew') => message + name;

// const
const obj = { age: '32' };
obj.name = 'Andrew'; // can edit value in obj/array
// obj = 'Andrew'; // CANT edit whole obj/array
const test = 'test'; // const range base on {}
{
    const test = 'test1';
}

//define obj by variable
let name = 'Andrew',
    age = 32;
let me = { name, age }; //{name: "Andrew", age: 32}

//obj value: function
let meFunction = {
        name,
        age,
        showAge() {
            console.log(this.age);
        }
    } // meFunction.showAge();

//use variable as key
let fun = 'showAge';
let meFunc = {
        name,
        age,
        [fun]: function() {
            console.log(this.age);
        }
    } // meFunc.showAge();

// spread array by ...
let arr1 = [1, 2, 3],
    arr2 = [4, 5, 6];
arr1.push(...arr2); //[1, 2, 3, 4, 5, 6]

//combine variable and string
let combine = `${name} is ${age} years old`; //Andrew is 32 years old

//change line in variable 
let combineTest = `test1
test2
test3`;

//calculate in variable
let combineNext = `${name} is ${age-10} years old`;
let now = `It is ${new Date().toLocaleString()}`;

//set function for ``
let action = 'working',
    sentence = tag `I am ${action} in ${new Date().getHours()}`;

function tag(strings, ...values) {
    //console.log(strings); //["I am ", " in ", "",]
    //console.log(values); //["working", 11 (current hour)]
    if (values[1] < 6 || values[1] > 23) {
        values[0] = 'sleeping';
    }
    return `${strings[0]}${values[0]}${strings[1]}${values[1]}`;
}

//set partial object value to variable
function generateObj() {
    return {
        objname: 'Andrew',
        objage: 32
    }
}
var { objname, objage } = generateObj();
// console.log(objname, objage); //Andrew 32
var { objname: myname, objage: myage } = generateObj();
// console.log(myname, myage); //Andrew 32

//set partial array value to variable
var [first, , , , end] = [1, 2, 3, 4, 5];
// console.log(first, end); // 1 5

//get partial object value at forEach
var people = [{ name: 'Andrew', age: '32' }, { name: 'Queenie', age: '?' }, { name: 'Josh', age: '31' }];
// people.forEach(({ name }) => console.log(name)); //only pass name to function

// //export
// let testFunc = () => console.log('test');
// export {testFunc};//export function
// export function xxx = () => console.log('xxx');//export direct at function
// export var testArray = [a,b,c,d,e]; //export variable

// //import 
// import {testFunc,xxx} from './xxx.js';//import function
// import {testFunc as testFunc_} from './xxx.js';//import function and define new name for It
// import * as test from './xxx.js' //import everything from other file, file name will be test.testFunc and test.xxx
// import * as _ from 'lodash';
// var array = [1];
// var other = _.concat(array, 2);

//convert array-like object into an array
const list = Array.from(document.querySelectorAll('.list'));

//promise
var promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('hello');
    } else {
        reject('no bueno');
    }
});
// promise.then((data) => console.log('success: ', data)); //success:  hello
// promise.catch((error) => console.error('fail: ', error)); //fail: no bueno
// promise.then((data) => console.log('success: ', data), (error) => console.error('fail: ', error)); //combine success and fail
// promise.then( //chain multiple then and catch
//         (data) => {
//             console.log('success: ', data);
//             return 'foo bar';
//         }
//     ).then((data) => console.log('success2: ', data))
//     .catch((error) => console.log('error: ', error));

//generator
function* greet() {
    console.log('test1');
    yield 'step1';
    console.log('test2');
    yield 'step2';
    console.log('test3');
    yield 'step3';
}
let greeter = greet();
// console.log(greeter.next()); // {value: "step1", done: false}
// console.log(greeter.next()); // {value: "step2", done: false}
// console.log(greeter.next()); // {value: "step3", done: false}
// console.log(greeter.next()); // {value: undefined, done: true}
// for (let content of greeter) { //test1 step1 test2 step2 test3 step3
//     console.log(content);
// }

//generator with variable
function* greet2() {
    let yieldVal = yield 'step1';
    yieldVal = yield yieldVal + 'step2';
}
let greeter2 = greet2();
// console.log(greeter2.next()); //{value: "step1", done: false}
// console.log(greeter2.next('b')); //{value: "bstep2", done: false}
// console.log(greeter2.next('c')); //{value: undefined, done: true}

//infinite generator
function* graph() {
        let x = 0,
            y = 0;
        while (true) {
            yield { x: x, y: y }
            x += 2;
            y += 1;
        }
    }
    // var graphGeneator = graph();
    // console.log(graphGeneator.next().value); //{x: 0, y: 0}
    // console.log(graphGeneator.next().value); //{x: 2, y: 1}
    // console.log(graphGeneator.next().value); //{x: 4, y: 2}

//map property *similar to object
var myMap = new Map();
myMap.set('foo', 'bar');
myMap.set('hello', 'world');
// console.log(myMap.get('foo')); //bar
// console.log(myMap.size); //2
// console.log(myMap.has('foo')); //true
// myMap.clear(); //clear data in map
// for (let key of myMap.keys()) {
//     console.log(key); //foo hello
// }
// for (let value of myMap.values()) {
//     console.log(value); //bar world
// }
// for (let [key, value] of myMap.entries()) {
//     console.log(key + ' -> ' + value); //foo -> bar  hello -> world
// }

//WeakMap : can't use string as key and iterators method -> http://stackoverflow.com/questions/29413222/what-are-the-actual-uses-of-es6-weakmap
var myWeakMap = new WeakMap();

//set require parameter alert for function
function requireParameter(name) {
    throw new Error(`Missing parameter "${name}"`);
}