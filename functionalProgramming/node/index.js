// var curry = require('lodash/curry');
// var map = curry(function (f, ary) {
//   return ary.map(f);
// });
// var getImg = (obj) => {
//   return obj.img
// };
// var recordImg = map(getImg)
// var arr = [{
//   "img": "15002985350460.png",
//   "time": 0
// }, {
//   "img": "15002985350481.png",
//   "time": 11
// }, {
//   "img": "15002985350492.png",
//   "time": 22
// }, {
//   "img": "15002985350493.png",
//   "time": 33
// }, {
//   "img": "15002985350494.png",
//   "time": 43
// }]
// console.log(recordImg(arr));

//---------------------------------------------------------------
var _ = require('ramda');
// // 練習 1
// // 透過部分套用（partially applying）重構此 function 移除所有參數。
// var words = function (str) {
//   return _.split(' ', str);
// };
// var words = _.split(' ');
// console.log(words('i am a engineer'));


// // 練習 1a
// // 使用 map 建立一個新的 words fn，讓它可以操作字串的陣列。
// var sentences = undefined;
// var sentences = _.map(words);


// // 練習 2
// // 透過部分套用（partially applying）重構此 function 移除所有參數。
// var filterQs = function (xs) {
//   return _.filter(function (x) {
//     return match(/q/i, x);
//   }, xs);
// };
// var filterQs = _.filter(match(/q/i));


// // 練習 3
// // 使用 helper function _keepHighest 重構 max，讓它不需參考任何參數。
// var _keepHighest = function (x, y) {
//   return x >= y ? x : y;
// };
// var max = function (xs) {
//   return _.reduce(function (acc, x) {
//     return _keepHighest(acc, x);
//   }, -Infinity, xs);
// };
// var max = _.reduce(_keepHighest, -Infinity);


// // 加分題 1：
// // 封裝陣列的 slice 讓它變為 functional 的 curry function。
// // [1, 2, 3].slice(0, 2)
// var slice = _.curry(function (start, end, xs) {
//   return xs.slice(start, end);
// });


// // 加分題 2：
// // 使用 slice 定義一個「take」function，讓它擷取字串從頭開始的的 n 個元素。此 function 必須為 curry function。
// // 輸入「Something」且 n=4 時結果必須為「Some」
// var take = _.curry(function (n, str) {
//   return str.slice(0, n);
// });
// var take = slice(0);


// ---------------------------------------------
// var accounting = require('accounting');

// 範例資料
var CARS = [{
  name: 'Ferrari FF',
  horsepower: 660,
  dollar_value: 700000,
  in_stock: true,
}, {
  name: 'Spyker C12 Zagato',
  horsepower: 650,
  dollar_value: 648000,
  in_stock: false,
}, {
  name: 'Jaguar XKR-S',
  horsepower: 550,
  dollar_value: 132000,
  in_stock: false,
}, {
  name: 'Audi R8',
  horsepower: 525,
  dollar_value: 114200,
  in_stock: false,
}, {
  name: 'Aston Martin One-77',
  horsepower: 750,
  dollar_value: 1850000,
  in_stock: true,
}, {
  name: 'Pagani Huayra',
  horsepower: 700,
  dollar_value: 1300000,
  in_stock: false,
}];

// 練習 1：
// 使用 _.compose() 重寫以下的 function。提示： _.prop() 是 curry function。
var isLastInStock = function (cars) {
  var last_car = _.last(cars);
  return _.prop('in_stock', last_car);
};
var isLastInStock = _.compose(_.prop('in_stock'), _.last);


// 練習 2：
// 使用 _.compose()、 _.prop() 及 _.head() 來取得第一筆 car 的 name。
var nameOfFirstCar = _.compose(_.prop('name'), _.head);


// 練習 3：
// 使用 helper function _average 來重構 averageDollarValue 使之為 compose function。
var _average = function (xs) {
  return _.reduce(_.add, 0, xs) / xs.length;
}; // <- 不需改動

var averageDollarValue = function (cars) {
  var dollar_values = _.map(function (c) {
    return c.dollar_value;
  }, cars);
  return _average(dollar_values);
};
var averageDollarValue = _.compose(_average, _.map(_.prop('dollar_value')));


// 練習 4：
// 使用 compose 撰寫一個 function：sanitizeNames()，回傳一個 car 的 name 為全小寫及底線連接的列表：
// 例如：sanitizeNames([{name: 'Ferrari FF', horsepower: 660, dollar_value: 700000, in_stock: true}]) 
//=> ['ferrari_ff']。
var _underscore = _.replace(/\W+/g, '_'); //<-- leave this alone and use to sanitize
var sanitizeNames = _.map(_.compose(_underscore, toLowerCase, _.prop('name')));


// 加分題 1：

var availablePrices = function (cars) {
  var available_cars = _.filter(_.prop('in_stock'), cars);
  return available_cars.map(function (x) {
    return accounting.formatMoney(x.dollar_value);
  }).join(', ');
};
var formatPrice = _.compose(accounting.formatMoney, _.prop('dollar_value'));
var availablePrices = _.compose(join(', '), _.map(formatPrice), _.filter(_.prop('in_stock')));

// 加分題 2：
// 重構使它 pointfree。提示: 你可以使用 _.flip()。

var fastestCar = function (cars) {
  var sorted = _.sortBy(function (car) {
    return car.horsepower;
  }, cars);
  var fastest = _.last(sorted);
  return fastest.name + ' is the fastest';
};
var append = _.flip(_.concat);
var fastestCar = _.compose(append(' is the fastest'),
  _.prop('name'),
  _.last,
  _.sortBy(_.prop('horsepower')));
