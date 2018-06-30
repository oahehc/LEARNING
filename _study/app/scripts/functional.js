// https://www.youtube.com/watch?v=PW0JZJwMOXQ&list=TLGGb0Tm--zOR9swMzAxMjAxNw

const identity = (a) => a;
// console.log(identity(3));

const identityf = (x) => () => identity(x);
let three = identityf(3);
// console.log(three());

const addf = (x) => (y) => x + y;
// const addf = function(x) {
//     return function(y) {
//         return x + y;
//     }
// }
// console.log(addf(2)(3));
// let add3 = addf(3);
// console.log(add3(5));

const add = (x, y) => x + y;
const mul = (x, y) => x * y;
// console.log(add(2, 3));
// console.log(mul(2, 3));
const liftf = (func) => (x) => (y) => func(x, y);
// const liftf = function(func) {
//     return function(y) {
//         return function(x) {
//             return func(x, y);
//         }
//     }
// }
// const add_ = liftf(add);
// console.log(add_(2)(3));
// const mul_ = liftf(mul);
// console.log(mul_(2)(3));

const curry = (func, x) => (y) => func(x, y);
const add5 = curry(add, 5);
// console.log(add5(9));
// console.log(curry(mul, 5)(6));

// const test = () => {
//     // let args = Array.prototype.slice.call(arguments, 1);
//     console.log(arguments);
//     console.log(Array.prototype.slice(arguments));
//     console.log(Array.prototype.slice(arguments, 0));
// }