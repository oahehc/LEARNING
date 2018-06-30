/** use benchmark for performent test
 * https://benchmarkjs.com/
 */
var suite = new Benchmark.Suite;

//test function
let test1 = function(array1, array2, target) {
    let targetIndex = array2.indexOf(target);
    return (targetIndex > -1) ? array1[targetIndex] : 'not exist';
}
let test2 = function(obj, target) {
    let result;
    $.each(obj, function(index, element) {
        if (element == target) result = index;
    });
    if (result == undefined) result = 'not exist';
    return result;
}
let test3 = function(array, condition) {
    if (array.indexOf(condition) != -1) {
        return true;
    }
}

let array1 = [1, 2, 3],
    array2 = ['a', 'b', 'c'],
    obj = {
        '1': 'a',
        '2': 'b',
        '3': 'c'
    },
    target = 'b';
console.log(test1(array1, array2, target));
console.log(test2(obj, target));

// add tests
suite.add('Test#1', function() {
        test1(array1, array2, target)
    })
    .add('Test#2', function() {
        test2(obj, target)
    })
    // .add('Test#3', function() {
    //     test3(array, condition)
    // })
    // add listeners
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });