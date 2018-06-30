// support array and obj
_.map(collection, [iteratee = _.identity]);
_.filter(collection, [predicate = _.identity]);
_.reject(collection, [predicate = _.identity]); // The opposite of _.filter
_.reduce(collection, [iteratee = _.identity], [accumulator]);
_.reduceRight(collection, [iteratee = _.identity], [accumulator])
_.forEach(collection, [iteratee = _.identity]);
_.forEachRight(collection, [iteratee = _.identity]);

// 找出数组中不同的值
_.difference([1, 2, 3, 4, 5], [5, 2, 10]); // → [1, 3, 4]

// 找出数组中相同的值
_.intersection([1, 2, 3], [5, 2, 1, 4], [2, 1]); // → [1, 2]

// 移除数组中指定的值
_.pull([1, 2, 3, 1, 2, 3], 2, 3); // → [1, 1]

// 移除指定索引的數組元素, 返回移除元素後的新數組
var array = [5, 10, 15, 20];
var evens = _.pullAt(array, 1, 3);
console.log(array); // => [5, 15]
console.log(evens); // => [10, 20]

// 移除數組array中滿足predicate條件的所有元素，返回的是被移除元素數組
var array = [1, 2, 3, 4];
var evens = _.remove(array, (n) => {
    return n % 2 == 0;
});
console.log(array); // => [1, 3]
console.log(evens); // => [2, 4]


// 返回一个范围数组
_.range(4); // → [0, 1, 2, 3]
_.range(1, 5); // → [1, 2, 3, 4]
_.range(0, 20, 5); // → [0, 5, 10, 15]
_.range(1, 4, 0); // → [1, 1, 1]
_.rangeRight([start = 0], end, [step = 1]);

// 將array中的前n個元素去掉，然後返回剩餘的部分
_.drop(array, [n = 1])
_.dropRight(array, [n = 1])

// 返回符合查詢條件的元素的索引值,未找到則返回-1.
_.findIndex(users, {
    'user': 'fred',
    'active': false
});
_.findLastIndex(array, [predicate = _.identity], [thisArg])

// 從右向左遍歷數組
_.lastIndexOf([1, 2, 1, 2], 2); // => 3

// 獲取數組array的第一/最後一個元素
_.first(array)
_.last(array)

// 將嵌套數組的維數減少
_.flatten(array, [isDeep])
_.flatten([1, [2, 3, [4]]]); // => [1, 2, 3, [4]]
_.flatten([1, [2, 3, [4]]], true); // => [1, 2, 3, 4]

// 去除數組第一/最後一個元素
_.initial([1, 2, 3]); // => [1, 2]
_.rest([1, 2, 3]); // => [2, 3]

// 使用二進制搜索，以確定在該最低索引value應該插入array，以保持它的排列順序
_.sortedIndex([30, 50], 40); // => 1
_.sortedIndex([4, 4, 5, 5], 5); // => 2
_.sortedLastIndex([4, 4, 5, 5], 5); // => 4

// 從數組的起始位置開始，取n個元素;n默認是1
_.take([1, 2, 3], 2); // => [1, 2]
_.takeRight([1, 2, 3], 2); // => [2, 3]

// 創建唯一值的數組
_.union([1, 2], [4, 2], [2, 1]); // => [1, 2, 4]

// 創建一個數組的一個無重複的版本
_.uniq(array, [isSorted], [iteratee], [thisArg])
    // [isSorted] （布爾）：指定數組排序。
    // [iteratee] （函數|對象|字符串）：每次迭代函數被調用。
    // [thisArg] （*） ：本this結合iteratee。
_.uniq([1, 1, 2], true); // => [1, 2]
_.uniq([1, 2.5, 1.5, 2], function(n) {
    return this.floor(n);
}, Math); // => [1, 2.5]

// 接受分組元素的數組，並創建一個數組重組的元素
var zipped = _.zip(['fred', 'barney'], [30, 40], [true, false]); // => [['fred', 30, true], ['barney', 40, false]]
_.unzip(zipped); // => [['fred', 'barney'], [30, 40], [true, false]]
_.zipWith([1, 2], [10, 20], [100, 200], _.add); // => [111, 222]
_.unzipWith([
    [1, 10, 100],
    [2, 20, 200]
], _.add); // => [3, 30, 300]

// 排除使用所有提供的值的數組
_.without([1, 2, 1, 3], 1, 2); // => [3]

// 返回一個從屬性名稱和值的數組組成的對象
_.zipObject([
    ['fred', 30],
    ['barney', 40]
]); // => { 'fred': 30, 'barney': 40 }
_.zipObject(['fred', 'barney'], [30, 40]); // => { 'fred': 30, 'barney': 40 }

// group array value
_.countBy([6.1, 4.2, 6.3], Math.floor); // => { '4': 1, '6': 2 }
_.groupBy([6.1, 4.2, 6.3], Math.floor); // => { '4': [4.2], '6': [6.1, 6.3] }

// Checks if predicate returns truthy for all elements of collection
_.every([true, 1, null, 'yes'], Boolean); // => false
// Checks if predicate returns truthy for any element of collection
_.some(collection, [predicate = _.identity]);

// returning the first element predicate returns truthy
var users = [{
    'user': 'fred',
    'age': 40,
    'active': false
}, {
    'user': 'pebbles',
    'age': 1,
    'active': true
}];
_.find(users, {
    'age': 1,
    'active': true
}); // => object for 'pebbles'
_.findLast(collection, [predicate = _.identity], [fromIndex = collection.length - 1])
_.findKey(object, [predicate = _.identity]) // returns the key of the first element find
_.findLastKey(object, [predicate = _.identity])

// map
_.flatMap(collection, [iteratee = _.identity]);
_.flatMapDeep(collection, [iteratee = _.identity]); // iterate all dimention
_.flatMapDepth(collection, [iteratee = _.identity], [depth = 1]); // iterate by assign dimention

// Checks if value is in collection. If collection is a string, it's checked for a substring of value
_.includes(collection, value, [fromIndex = 0]);
_.includes([1, 2, 3], 1, 2); // => false
_.includes({
    'a': 1,
    'b': 2
}, 1); // => true
_.includes('abcd', 'bc'); // => true

// Creates an object composed of keys generated from the results of running each element of collection thru iteratee
var array = [{
    'dir': 'left',
    'code': 97
}, {
    'dir': 'right',
    'code': 100
}];
_.keyBy(array, 'dir'); // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }


// This method is like _.sortBy except that it allows specifying the sort orders of the iteratees to sort by
var users = [{
    'user': 'fred',
    'age': 48
}, {
    'user': 'barney',
    'age': 34
}, {
    'user': 'fred',
    'age': 40
}, {
    'user': 'barney',
    'age': 36
}];
_.orderBy(users, ['user', 'age'], ['asc', 'desc']); // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]

// split into two groups, the first of which predicate returns truthy, the second predicate returns falsey
var users = [{
    'user': 'barney',
    'age': 36,
    'active': false
}, {
    'user': 'fred',
    'age': 40,
    'active': true
}, {
    'user': 'pebbles',
    'age': 1,
    'active': false
}];
_.partition(users, {
    'age': 1,
    'active': false
}); // => objects for [['pebbles'], ['barney', 'fred']]

// Gets a random element from collection.
_.sample(collection);
// Gets n random elements at unique keys from collection up to the size of collection.
_.sampleSize(collection, [n = 1]); // [n=1] (number): The number of elements to sample.

// Creates an array of shuffled values
_.shuffle([1, 2, 3, 4]); // => [4, 1, 3, 2]

// Gets the size of collection
_.size([1, 2, 3]); // => 3
_.size({
    'a': 1,
    'b': 2
}); // => 2
_.size('pebbles'); // => 7

// Creates an array of elements, sorted in ascending order by the results of running each element in a collection thru each iteratee.
var users = [{
    'user': 'fred',
    'age': 48
}, {
    'user': 'barney',
    'age': 36
}, {
    'user': 'fred',
    'age': 40
}, {
    'user': 'barney',
    'age': 34
}];
_.sortBy(users, ['user', 'age']); // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]

// creates a function that invokes func once it's called n or more times.
_.after(n, func);
// Creates a function that invokes func, with the this binding and arguments of the created function, while it's called less than n times
_.before(n, func);

// Creates a function that invokes func with the this binding of thisArg and partials
function greet(greeting, punctuation) {
    console.log(greeting + ' ' + this.user + punctuation);
}
var object = {
    'user': 'fred'
};
var bound = _.bind(greet, object, 'hi');
bound('!'); // => 'hi fred!'
var bound = _.bind(greet, object, 'hi', '!');
bound(); // => 'hi fred!'
var bound = _.bind(greet, object);
bound('hi', '!'); // bound('hi')('!');

// Creates a function that invokes func with partials prepended to the arguments it receives
function greet(greeting, name) {
    return greeting + ' ' + name;
}
var sayHelloTo = _.partial(greet, 'hello');
sayHelloTo('fred'); // => 'hello fred'
_.partialRight(func, [partials]);

// Creates a function that invokes the method at object[key] with partials prepended to the arguments it receives.
var object = {
    'user': 'fred',
    'greet': function(greeting, punctuation) {
        return greeting + ' ' + this.user + punctuation;
    }
};
var bound = _.bindKey(object, 'greet', 'hi');
bound('!'); // => 'hi fred!'

// curry
var abc = (a, b, c) => [a, b, c];
var curried = _.curry(abc);
curried(1)(2)(3); // => [1, 2, 3]
_.curryRight(func, [arity = func.length]);

// Creates a debounced function that delays invoking func until after wait milliseconds
jQuery(window).on('resize', _.debounce(calculateLayout, 150)); // Avoid costly calculations while the window size is in flux.

// Creates a throttled function that only invokes func at most once per every wait milliseconds
jQuery(window).on('scroll', _.throttle(updatePosition, 100)); // Avoid excessively updating the position while scrolling.

// Defers invoking the func until the current call stack has cleared
_.defer((text) => {
    console.log(text);
}, 'deferred'); // => Logs 'deferred' after one millisecond.

// Invokes func after wait milliseconds
_.delay(function(text) {
    console.log(text);
}, 1000, 'later'); // => Logs 'later' after one second.

// Creates a function that invokes func with arguments reversed
_.flip(func);

// Creates a function that memoizes the result of func
_.memoize(func, [resolver]);
var values = _.memoize(_.values);
values(object); // result will be memorized
values.cache.set(object, ['a', 'b']); // Modify the result cache.

// Creates a function that is restricted to invoking func once
_.once(func);

// Creates a function that invokes func with its arguments transformed.
function doubled(n) {
    return n * 2;
};

function square(n) {
    return n * n;
};
var func = _.overArgs(function(x, y) {
    return [x, y];
}, [square, doubled]);;
func(9, 3); // => [81, 6]

// re-arrange arguments
var rearged = _.rearg(function(a, b, c) {
    return [a, b, c];
}, [2, 0, 1]);
rearged('b', 'c', 'a'); // => ['a', 'b', 'c']

// adjust rest argument as an array
_.rest(func, [start = func.length - 1]);
say('hello', 'fred', 'barney', 'pebbles'); - > say('hello', ['fred', 'barney', 'pebbles'])

// translate array to arguments
_.spread(func, [start = 0])

// Creates a function that accepts up to one argument, ignoring any additional arguments.
_.unary(func);

// Creates a function that provides value to wrapper as its first argument
_.wrap(value, [wrapper = identity]);

// Casts value as an array if it's not one.
_.castArray(value);

// clone
_.clone(value);
_.cloneDeep(value);
_.cloneWith(value, [customizer]);

// Performs a SameValueZero comparison between two values to determine if they are equivalent.
var object = {
    'a': 1
};
var other = {
    'a': 1
};
_.eq(object, other); // => false
_.eq('a', Object('a')); // => false
_.eq(NaN, NaN); // => true

// Checks if value is greater than other.
_.gt(value, other)
_.gte(value, other) // >=
_.lt(value, other) // <
_.lte(value, other) // <=

// check value
_.isArguments(value)
_.isArray(value)
_.isArrayLike(value)
_.isNumber(value)
_.isObject(value)
_.isString(value)
_.isSymbol(value)
_.isMap(value)
_.isSet(value)
_.isBoolean(value)
_.isDate(value)
_.isEmpty(value)
_.isEqual(value, other)
_.isError(value)
_.isFunction(value)
_.isInteger(value)
_.isFinite(value)
_.isNaN(value)
_.isNil(value) //Checks if value is null or undefined.
_.isNull(value)
_.isUndefined(value)
_.isRegExp(value)
_.isSafeInteger(value) //IEEE-754 double precision number
_.isNative(value) //Checks if value is a pristine native function.
_.isMatch(object, source) // Performs a partial deep comparison between object and source to determine if object contains equivalent property values.
_.isElement(value) // DOM element.

// Converts value
_.toArray(value).
_.toInteger(value)
_.toNumber(value)
_.toString(value)

// math
var objects = [{
    'n': 4
}, {
    'n': 2
}, {
    'n': 8
}, {
    'n': 6
}];
_.meanBy(objects, o => o.n); // => 5
_.minBy(objects, o => o.n);
_.maxBy(objects, o => o.n);
_.sumBy(objects, o => o.n);
_.random(0, 5); // => an integer between 0 and 5
// Checks if n is between start and up to
_.inRange(3, 2, 4); // => true

// assign value from object
var object = {
    'a': [{
        'b': {
            'c': 3
        }
    }, 4]
};
_.at(object, ['a[0].b.c', 'a[1]']); // => [3, 4]
_.at(object, ['a[0].b.d', 'a[1]']); // => [undefined, 4]

// pick/omit value from object
var object = {
    'a': 1,
    'b': '2',
    'c': 3
};
_.pick(object, ['a', 'c']); // => { 'a': 1, 'c': 3 }
_.omit(object, ['a', 'c']); // => { 'b': '2' }
_.pickBy(object, _.isNumber); // => { 'a': 1, 'c': 3 }
_.omitBy(object, _.isNumber); // => { 'b': '2' }

// Gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place.
_.get(object, path, [defaultValue]);
_.result(object, path, [defaultValue]); // like _.get except if the resolved is a function it's invoked with this binding of its parent object and its result is returned.
_.set(object, path, value); // Sets the value at path of object
_.unset(object, path); // Removes the property at path of object.
_.update(object, path, updater); // like _.set except that accepts updater to produce the value to set
// Checks if path is a direct property of object.
_.has(object, path);
// Checks if path is a direct or inherited property of object.
_.hasIn(object, path)

// combine object, Once a property is set, additional values of the same property are ignored.
_.defaults({
    'a': 1
}, {
    'b': 2
}, {
    'a': 3
}); // => { 'a': 1, 'b': 2 }
_.defaultsDeep(object, [sources]) // like _.defaults except that it recursively assigns default properties.

// inverted keys and values of object. If object contains duplicate values, subsequent values overwrite property assignments of previous values.
var object = {
    'a': 1,
    'b': 2,
    'c': 1
};
_.invert(object); // => { '1': 'c', '2': 'b' }

// group object keys by values
var object = {
    'a': 1,
    'b': 2,
    'c': 1
};
_.invertBy(object); // => { '1': ['a', 'c'], '2': ['b'] }
_.invertBy(object, function(value) {
    return 'group' + value;
}); // => { 'group1': ['a', 'c'], 'group2': ['b'] }

// Invokes the method at path of object.
_.invoke(object, path, [args])

// Creates an array of the own enumerable property names of object.
_.keys(object);
// Creates an array of the own and inherited enumerable property names of object.
_.keysIn(object);
_.values(object);
_.valuesIn(object);

//  creates an object with the same values as object and keys generated
_.mapKeys({
    'a': 1,
    'b': 2
}, function(value, key) {
    return key + value;
}); // => { 'a1': 1, 'b2': 2 }
_.mapValues({
    'fred': {
        'user': 'fred',
        'age': 40
    },
    'pebbles': {
        'user': 'pebbles',
        'age': 1
    }
}, 'age'); // => { 'fred': 40, 'pebbles': 1 }

// merge two objects
_.merge(object, [sources])

// Returns the key-value pairs.
function Foo() {
    this.a = 1;
    this.b = 2;
}
_.toPairs(new Foo); // => [['a', 1], ['b', 2]]

// CHAIN
_(value); // Creates a lodash wrapper
_.chain(value); // Creates a lodash wrapper
_.prototype.chain(); // Creates a lodash wrapper
_.tap(value, interceptor); // "tap into" a method chain sequence in order to modify intermediate results.
_.thru(value, interceptor); // like _.tap except that it returns the result of interceptor
_.prototype[Symbol.iterator](); // Enables the wrapper to be iterable.
_.prototype.at([paths]); // wrapper version of _.at.
_.prototype.commit(); // Executes the chain sequence and returns the wrapped result.
_.prototype.next(); // Gets the next value on a wrapped object following the iterator protocol.
_.prototype.plant(value); // Creates a clone of the chain sequence planting value as the wrapped value.
_.prototype.reverse(); // wrapper version of _.reverse.
_.prototype.value(); // Executes the chain sequence to resolve the unwrapped value.

// STRING
_.camelCase([string = '']); // Converts string to camel case.
_.capitalize([string = '']); // first character of string to upper case 
_.upperCase([string = '']); // Converts string, as space separated words, to upper case. -> wll remove special character
_.toUpper([string = '']); // Converts string, as a whole, to upper case
_.lowerCase([string = '']);
_.toLower([string = '']);
_.lowerFirst([string = '']);
_.upperFirst([string = '']);
_.endsWith([string = ''], [target], [position = string.length]); // Checks if string ends with the given target string.
_.startsWith([string = ''], [target], [position = 0]);
_.trimEnd([string = ''], [chars = whitespace]);
_.trimStart([string = ''], [chars = whitespace]);
_.escape([string = '']); // Converts the characters "&", "<", ">", '"', and "'" in string to their corresponding HTML entities.
_.unescape([string = ''])
_.escapeRegExp([string = '']); // Escapes the RegExp special characters "^", "$", "", ".", "*", "+", "?", "(", ")", "[", "]", "{", "}", and "|" in string.
_.kebabCase([string = '']); // Converts string to kebab case.
_.kebabCase('Foo Bar'); // => 'foo-bar'
_.kebabCase('fooBar'); // => 'foo-bar'
_.kebabCase('__FOO_BAR__'); // => 'foo-bar'
_.snakeCase([string = '']); // Converts string to snake case. : 'foo_bar'
_.startCase([string = '']); // Converts string to start case.
_.pad([string = ''], [length = 0], [chars = ' ']); // fillup string by setting chars
_.padEnd([string = ''], [length = 0], [chars = ' ']);
_.padStart([string = ''], [length = 0], [chars = ' ']);
_.repeat([string = ''], [n = 1]); // Repeats the given string n times.
// Splits string by separator.
_.split('a-b-c', '-', 2); // => ['a', 'b']
_.truncate([string = ''], [options = {}]); // Truncates string if it's longer than the given maximum string length
_.words([string = ''], [pattern]); // Splits string into an array of its words.
_.words('fred, barney, & pebbles'); // => ['fred', 'barney', 'pebbles']

// Attempts to invoke func, Avoid throwing errors for invalid selectors.
_.attempt(func, [args]);

// Binds methods of an object to the object itself, overwriting the existing method.
_.bindAll(object, methodNames);

// Creates a function that iterates over pairs and invokes the corresponding function of the first predicate to return truthy
_.cond(pairs);

// The defaultValue is returned if value is NaN, null, or undefined.
_.defaultTo(value, defaultValue);

// Creates a function that returns the result of invoking the given functions with the this binding of the created function
_.flow([funcs]);
_.flowRight([funcs]);

// Creates a function that performs a partial deep comparison between a given object and source
_.matches(source);
_.filter(objects, _.matches({
    'a': 4,
    'c': 6
}));

// Creates a function that invokes the method at path of a given object.
_.method(path, [args]);

// Reverts the _ variable to its previous value
var lodash = _.noConflict();

// return undefined
_.noop();

// Creates a function that gets the argument at index n.
_.nthArg([n = 0]);

// Creates a function that invokes iteratees with the arguments it receives and returns their results.
var func = _.over([Math.max, Math.min]);
func(1, 2, 3, 4); // => [4, 1]

// Creates a function that checks if all of the predicates return truthy
_.overEvery([predicates = [_.identity]]);

// Creates a function that checks if any of the predicates return truthy 
_.overSome([predicates = [_.identity]]);

// Creates a function that returns the value at path of a given object.
_.property(path);
// creates a function that returns the value at a given path of object
_.propertyOf(object)

// returns a new empty array.
_.stubArray();
// returns false.
_.stubFalse();
// returns true.
_.stubTrue();
// returns a new empty object.
_.stubObject();
// returns an empty string.
_.stubString();

// Invokes the iteratee n times
_.times(n, [iteratee = _.identity]);

// Converts value to a property path array.
_.toPath(value);
_.toPath('a.b.c'); // => ['a', 'b', 'c']
_.toPath('a[0].b.c'); // => ['a', '0', 'b', 'c']


// TEMPLATE
_.template([string = ''], [options = {}]); // Creates a compiled template function that can interpolate data properties in
var compiled = _.template('hello <%= user %>!');
compiled({
    'user': 'fred'
}); // => 'hello fred!'
_.templateSettings.escape; // detect data property values to be HTML-escaped.
_.templateSettings.evaluate; // detect code to be evaluated.
_.templateSettings.imports; // import variables into the compiled template.
_.templateSettings.interpolate; // detect data property values to inject.
_.templateSettings.variable; // reference the data object in the template text.
