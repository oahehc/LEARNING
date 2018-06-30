/** use benchmark for performent test
 * https://benchmarkjs.com/
 */
var suite = new Benchmark.Suite;

//test function
let test1 = function(array) { // 69,581 ops/sec ±3.11%
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += i;
    }
    return sum;
}
let test2 = function(array) { // 72,970 ops/sec ±0.66%
    let sum = 0;
    for (let i = 0, max = array.length; i < max; i++) {
        sum += i;
    }
    return sum;
}
let test3 = function(array) { // 4,753 ops/sec ±0.95%
    let sum = 0;
    array.forEach(value => sum += value);
    return sum;
}
let test4 = function(array) { // 4,708 ops/sec ±0.81%
    let sum = array.reduce((temp, value) => {
        return temp += value;
    }, 0);
    return sum;
}

// add tests
let array = [];
for (let i = 0; i < 10000; i++) {
    array.push(i);
};

suite.add('Test#1', function() {
        test1(array)
    })
    .add('Test#2', function() {
        test2(array)
    })
    .add('Test#3', function() {
        test3(array)
    })
    .add('Test#4', function() {
        test4(array)
    })
    // add listeners
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });