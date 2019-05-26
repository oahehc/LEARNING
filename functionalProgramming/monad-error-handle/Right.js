class Right {
  constructor(val) {
    this._val = val;
  }
  map(fn) {
    return new Right(fn(this._val));
  }
  // flat nested : Right(Right) --> Right
  join() {
    if (this._val instanceof Left || this._val instanceof Right) {
      return this._val;
    }
    return this;
  }
  // combine map(put result into Right) and join(get result out of Right)
  chain(fn) {
    return fn(this._val);
  }
  toString() {
    const str = this._val.toString();
    return `Right(${str})`;
  }
}

module.exports = Right;
