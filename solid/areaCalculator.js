const areaCalculator = (shapes) => {
  const proto = {
    sum() {
      return this.shapes.reduce((s, shape) => s += shape.area(), 0)
    },
    output () {
      return `
        <h1>
          Sum of the areas of provided shapes: ${this.sum()} 
        </h1>`
    }
  }
  return Object.assign(Object.create(proto), {shapes})
}

module.exports = areaCalculator;