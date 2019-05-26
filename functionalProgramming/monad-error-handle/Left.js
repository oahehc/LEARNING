class Left {
  constructor(val) {
    this._val = val;
  }
  map() {
    // Left is the sad path
    // so we do nothing
    return this;
  }
  join() {
    // On the sad path, we don't
    // do anything with join
    return this;
  }
  chain() {
    // Boring sad path,
    // do nothing.
    return this;
  }
  toString() {
    const str = this._val.toString();
    return `Left(${str})`;
  }
}

module.exports = Left;
