var moment = require('moment');
var _ = require('lodash');

// return this = bypass function = do nothing
var Left = function (x) {
  this.__value = x;
};
Left.of = (x) => new Left(x);
Left.prototype.map = function (f) {
  return this;
}

// return f(input) = execute function normally 
var Right = function (x) {
  this.__value = x;
};
Right.of = (x) => new Right(x);
Right.prototype.map = function (f) {
  return Right.of(f(this.__value));
}

var t = Right.of('rain').map((str) => `b${str}`)
// console.log(t);
// Right('brain')

var t = Left.of('rain').map((str) => `b${str}`)
// console.log(t);
// Left('rain')

// getAge :: Date -> User -> Either(String, Number)
var getAge = _.curry(function (now, user) {
  var birthdate = moment(user.birthdate, 'YYYY-MM-DD', true);
  if (!birthdate.isValid()) return Left.of('Birth date could not be parsed');
  return Right.of(now.diff(birthdate, 'years'));
});

var t = getAge(moment(), {
  birthdate: '2005-12-12',
});
// console.log(t);
// Right(11)

var t = getAge(moment(), {
  birthdate: '20051212',
});
// console.log(t);
// Left('Birth date could not be parsed')


var add = _.curry(_.add);
var concat = _.curry((x, y) => x + y);
var map = _.curry((f, x) => {
  return x.map(f)
})
// fortune :: Number -> String
var fortune = _.flowRight(concat('If you survive, you will be '), add(1));



// zoltar :: User -> Either(String, _)
/** getAge(moment())  @returns Right(age) || Left('Birth date could not be parsed')
 *  fortune           @returns age + 1 then concat string
 */
var zoltar = _.flowRight(map(console.log), map(fortune), getAge(moment()));

// var t = zoltar({
//   birthdate: '2005-12-12',
// });
// console.log('t', t);
// // 'If you survive, you will be 10' <- print by map(console.log)
// // Right(undefined) <- console.log wont return value

// var t = zoltar({
//   birthdate: 'balloons!',
// });
// console.log('t', t);
// // Left('Birth date could not be parsed') <- Right.map will do nothing, keep passing error msg



//  either :: (a -> c) -> (b -> c) -> Either a b -> c
var either = _.curry(function (f, g, e) {
  switch (e.constructor) {
    case Left:
      return f(e.__value);
    case Right:
      return g(e.__value);
  }
});
var id = (x) => x;

//  zoltar :: User -> _
var zoltar = _.flowRight(console.log, either(id, fortune), getAge(moment()));

var t = zoltar({
  birthdate: '2005-12-12',
});
console.log('t', t);
// "If you survive, you will be 10"
// undefined

var t = zoltar({
  birthdate: 'balloons!',
});
console.log('t', t);
// "Birth date could not be parsed"
// undefined
