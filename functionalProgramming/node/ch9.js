var Task = require('data.task')
var R = require('ramda')
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

//  safeProp :: Key -> {Key: a} -> Maybe a
var safeProp = R.curry(function (x, obj) {
  return new Maybe(obj[x]);
});

//  safeHead :: [a] -> Maybe a
var safeHead = safeProp(0);

//  firstAddressStreet :: User -> Maybe (Maybe (Maybe Street) )
var firstAddressStreet = R.compose(
  map(map(safeProp('street'))), map(safeHead), safeProp('addresses')
);

var t = firstAddressStreet({
  addresses: [{
    street: {
      name: 'Mulburry',
      number: 8402
    },
    postcode: 'WC2N',
  }]
});
console.log(t);
// Maybe(Maybe(Maybe({name: 'Mulburry', number: 8402})))
