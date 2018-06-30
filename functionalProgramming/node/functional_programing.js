const identity = x => x
const add = (x, y) => x + y
const sub = (x, y) => x - y
const mul = (x, y) => x * y
const identityf = (x) = () => x
const addf = (x) => (y) => x + y

const liftf = (func) => (x) => (y) => func(x, y)
const liftAdd = liftf(add)
// console.log('liftAdd', liftAdd(3)(4));
const liftMul = liftf(mul)
// console.log('liftMul', liftMul(3)(4));

const curry = (func) => (...x) => (...y) => func(...x, ...y)

const inc = liftf(add)(1)
// console.log('inc', inc(5), inc(inc(5)));

const addg = (x) => {
  if (x === undefined) return x
  return more = (y) => {
    if (y === undefined) return x
    x += y
    return more
  }
}
// console.log('addg()', addg());
// console.log('addg(2)()', addg(2)());
// console.log('addg(1)(2)(3)()', addg(1)(2)(3)());


const liftg = (func) => (x) => {
  if (x === undefined) return x
  return more = (y) => {
    if (y === undefined) return x
    x = func(x, y)
    return more
  }
}
// console.log('liftg(mul)()', liftg(mul)());
// console.log('liftg(mul)(2)()', liftg(mul)(2)());
// console.log('liftg(mul)(3)(2)(3)()', liftg(mul)(3)(2)(3)());

const doubl = (x) => 2 * x;
const square = (x) => x * x;
const compose = (unary1) => (unary2) => (x) => unary1(unary2(x))
// console.log('compose(doubl)(square)(5)', compose(doubl)(square)(5));


const squareArray = (...array) => array.map(square)
// console.log('squareArray(...[1,3,5], ...[2,4,6])', squareArray(...[1,3,5], ...[2,4,6]));

const composell = (unary1) => (unary2) => (arr1) => (arr2) => (
  [...arr1, ...arr2].map(unary2).map(unary1)
) 

console.log('composell(doubl)(square)([1,3,5])(2,4,6)', composell(doubl)(square)([1,3,5])([2,4,6]));