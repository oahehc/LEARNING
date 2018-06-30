// var _ = require('lodash');
var R = require('ramda');
var moment = require('moment');
var Task = require('data.task');
var fs = require('fs');
var map = R.curry((f, x) => x.map(f));


var Maybe = function (x) {
  this.__value = x;
}

Maybe.of = function (x) {
  return new Maybe(x);
}

Maybe.prototype.isNothing = function () {
  return (this.__value === null || this.__value === undefined);
}

Maybe.prototype.map = function (f) {
  return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value));
}

//  safeHead :: [a] -> Maybe(a)
var safeHead = function (xs) {
  return Maybe.of(xs[0]);
};

var streetName = R.compose(map(R.prop('street')), safeHead, R.prop('addresses'));

var t = streetName({
  addresses: []
});
// console.log(t);
// Maybe(null)

var t = streetName({
  addresses: [{
    street: 'Shady Ln.',
    number: 4201
  }]
});
// console.log(t);
// Maybe("Shady Ln.")



var Left = function (x) {
  this.__value = x;
}

Left.of = function (x) {
  return new Left(x);
}

Left.prototype.map = function (f) {
  return this;
}

var Right = function (x) {
  this.__value = x;
}

Right.of = function (x) {
  return new Right(x);
}

Right.prototype.map = function (f) {
  return Right.of(f(this.__value));
}

//  getAge :: Date -> User -> Either(String, Number)
var getAge = R.curry(function (now, user) {
  var birthdate = moment(user.birthdate, 'YYYY-MM-DD');
  if (!birthdate.isValid()) return Left.of('Birth date could not be parsed');
  return Right.of(now.diff(birthdate, 'years'));
});

var t = getAge(moment(), {
  birthdate: '2005-12-12'
});
// console.log(t);
// Right(9)

var t = getAge(moment(), {
  birthdate: 'balloons!'
});
// console.log(t);
// Left("Birth date could not be parsed")


//  fortune :: Number -> String
var add = R.curry(function (a, b) {
  return a + b + ''
})
var fortune = R.compose(R.concat("If you survive, you will be "), add(1));

// //  zoltar :: User -> Either(String, _)
// var zoltar = R.compose(map(console.log), map(fortune), getAge(moment()));

// var t = zoltar({
//   birthdate: '2005-12-12'
// });
// // console.log(t);
// // "If you survive, you will be 10"
// // Right(undefined)

// var t = zoltar({
//   birthdate: 'balloons!'
// });
// // console.log(t);
// // Left("Birth date could not be parsed")


//  either :: (a -> c) -> (b -> c) -> Either a b -> c
var either = R.curry(function (f, g, e) {
  switch (e.constructor) {
    case Left:
      return f(e.__value);
    case Right:
      return g(e.__value);
  }
});

//  zoltar :: User -> _
var id = (x) => x;
var zoltar = R.compose(console.log, either(id, fortune), getAge(moment()));

// var t = zoltar({
//   birthdate: '2005-12-12'
// });
// // console.log(t);
// // "If you survive, you will be 10"
// // undefined

// var t = zoltar({
//   birthdate: 'balloons!'
// });
// // console.log(t);
// // Left("Birth date could not be parsed")
// // undefined




var IO = function (f) {
  this.__value = f;
};

IO.of = function (x) {
  return new IO(function () {
    return x;
  });
};

// default 都先執行 IO 內建函式 this.__value
IO.prototype.map = function (f) {
  // return new IO(_.flowRight(f, this.__value));
  return new IO(R.compose(f, this.__value));
};


//  io_window :: IO Window
var io_window = new IO(function () {
  return window;
});
var t = io_window.map(function (win) {
  return win.innerWidth;
});
// console.log(t);
// IO(1430)

var t = io_window.map(R.prop('location')).map(R.prop('href')).map(R.split('/'));
// console.log(t);
// IO(["http:", "", "localhost:8000", "blog", "posts"])




//  readFile :: String -> Task(Error, JSON)
var readFile = function (filename) {
  return new Task(function (reject, result) {
    fs.readFile(filename, 'utf-8', function (err, data) {
      err ? reject(err) : result(data);
    });
  });
};
var head = (arr) => arr[0];
var t = readFile("metamorphosis").map(R.split('\n')).map(head);
// console.log();
// Task("One morning, as Gregor Samsa was waking up from anxious dreams, he discovered that
// in bed he had been changed into a monstrous verminous bug.")


// // jQuery getJSON example:
// //========================

// //  getJSON :: String -> {} -> Task(Error, JSON)
// var getJSON = curry(function (url, params) {
//   return new Task(function (reject, result) {
//     $.getJSON(url, params, result).fail(reject);
//   });
// });

// getJSON('/video', {
//   id: 10
// }).map(_.prop('title'));
// // Task("Family Matters ep 15")

// // 传入普通的实际值也没问题
// Task.of(3).map(function (three) {
//   return three + 1
// });
// // Task(4)




// Pure application
//=====================
// blogTemplate :: String

//  blogPage :: Posts -> HTML
var blogPage = Handlebars.compile(blogTemplate);

//  renderPage :: Posts -> HTML
var renderPage = compose(blogPage, sortBy('date'));

//  blog :: Params -> Task(Error, HTML)
var blog = compose(map(renderPage), getJSON('/posts'));

// Impure calling code
//=====================
blog({}).fork(
  function (error) {
    $("#error").html(error.message);
  },
  function (page) {
    $("#main").html(page);
  }
);

$('#spinner').show();
