/* eslint-disable no-console */
const identity = x => x;
console.log(identity(3));

const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const mul = (x, y) => x * y;
console.log(add(3, 4));
console.log(sub(3, 4));
console.log(mul(3, 4));

const identityf = x => () => x;
const three = identityf(3);
console.log(three());

const addf = first => second => first + second;
console.log(addf(3)(4));

const liftf = func => first => second => func(first, second);
const addfNew = liftf(add);
console.log(addfNew(3)(4));
console.log(liftf(mul)(3)(4));

const curry = func => (...param1) => (...param2) => func(...param1, ...param2); // eslint-disable-line no-unused-vars

const increment = liftf(add)(1);
console.log(increment(5));
console.log(increment(increment(5)));

const addg = (first) => {
    if (first !== undefined) {
        return function more(next) {
            if (next === undefined) {
                return first;
            } else {
                first += next;
                return more;
            }
        };
    }
    return first;
};
console.log(addg());
console.log(addg(2)());
console.log(addg(2)(3)());
console.log(addg(2)(3)(4)());

const liftg = func => (first) => { // eslint-disable-line no-unused-vars
    if (first !== undefined) {
        return function more(next) {
            if (next === undefined) {
                return first;
            } else {
                first = func(first, next);
                return more;
            }
        };
    }
    return first;
};
console.log(liftg(mul)());
console.log(liftg(mul)(2)());
console.log(liftg(mul)(2)(3)());
console.log(liftg(mul)(2)(3)(4)());

const compose = func1 => func2 => x => func1(func2(x));
const doubl = liftf(mul)(2);
const square = x => x * x;
console.log(compose(doubl)(square)(5));
console.log(compose(square)(doubl)(5));

const square2 = (...param) => {
    console.log(param);
    return param.map(x => x * x);
};
console.log(square2(...[1, 3, 5], ...[2, 4, 6]));

const composell = func1 => func2 => array1 => (array2) => {
    const arr = array1.concat(array2);
    return arr.map(x => func1(func2(x)));
};
console.log(composell(doubl)(square)([1, 3, 5])([2, 4, 6]));

// solution
const doublNew = (...numbers) => numbers.map(x => x * 2);
const squareNew = (...numbers) => numbers.map(x => x * x);
const composellNew = func1 => func2 => numbers1 => numbers2 => func1(...func2(...numbers1, ...numbers2));
console.log(composellNew(doublNew)(squareNew)([1, 3, 5])([2, 4, 6]));


const test = (...numbers) => {
    console.log(numbers);
}
test(1, 2, 3);
test([1, 2, 3])
