require('../../support');
var Task = require('data.task');
var _ = require('ramda');

// Exercise 1
// ==========
// Use _.add(x,y) and _.map(f,x) to make a function that increments a value inside a functor
var ex1 = _.map(_.add(1));


// Exercise 2
// ==========
// Use _.head to get the first element of the list
var xs = Identity.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do']);
var ex2 = _.map(_.head);
// var ans = ex2(xs);
// console.log(ans);


// Exercise 3
// ==========
// Use safeProp and _.head to find the first initial of the user
var safeProp = _.curry(function (x, o) {
  return Maybe.of(o[x]);
});

var user = {
  id: 2,
  name: "Albert"
};
// string -> Maybe -> Maybe
var ex3 = _.compose(_.map(_.head), safeProp('name'));



// Exercise 4
// ==========
// Use Maybe to rewrite ex4 without an if statement

var ex4 = function (n) {
  if (n) {
    return parseInt(n);
  }
};

// number -> Maybe -> Maybe
var ex4 = _.compose(_.map(parseInt), Maybe.of);
// var ans = ex4();
// console.log(ans.isNothing(), ans);


// Exercise 5
// ==========
// Write a function that will getPost then _.toUpper the post's title

// getPost :: Int -> Future({id: Int, title: String})
var getPost = function (i) {
  return new Task(function (rej, res) {
    setTimeout(function () {
      res({
        id: i,
        title: 'Love them futures'
      })
    }, 300)
  });
};
var upperTitle = _.compose(toUpperCase, _.prop('title'));
// number -> obj -> string -> string
var ex5 = _.compose(_.map(upperTitle), getPost);


// Exercise 6
// ==========
// Write a function that uses checkActive() and showWelcome() to grant access or return the error
var showWelcome = _.compose(_.concat("Welcome "), _.prop('name'));

var checkActive = function (user) {
  return user.active ? Right.of(user) : Left.of('Your account is not active')
};
// obj -> either -> string -> string
var ex6 = _.compose(_.map(showWelcome), checkActive);
// var ans = ex6({
//   name: 'andrew',
//   active: true,
// })
// console.log(ans);


// Exercise 7
// ==========
// Write a validation function that checks for a length > 3. It should return Right(x) if it is greater than 3 and Left("You need > 3") otherwise
var ex7 = function (x) {
  return x.length > 3 ? Right.of(x) : Left.of('You need > 3')
  // return undefined; // <--- write me. (don't be pointfree)
};



// Exercise 8
// ==========
// Use ex7 above and either as a functor to save the user if they are valid or return the error message string. Remember either's two arguments must return the same type.
var save = function (x) {
  return new IO(function () {
    console.log("SAVED USER!");
    return x + '-saved';
  });
};
// userObj -> either -> 
var ex8 = _.compose(_.map(_.compose(save, _.prop('name'))), ex7);


var ex8 = _.compose(either(IO.of, save), ex7)
// either = curry(function (f, g, e) {
//   switch (e.constructor) {
//     case Left:
//       return f(e.__value);
//     case Right:
//       return g(e.__value);
//   }
// });
// IO.of = function (x) {
//   return new IO(function () {
//     return x;
//   });
// }


module.exports = {
  ex1: ex1,
  ex2: ex2,
  ex3: ex3,
  ex4: ex4,
  ex5: ex5,
  ex6: ex6,
  ex7: ex7,
  ex8: ex8
};
