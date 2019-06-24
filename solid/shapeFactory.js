const shapeInterface = (state) => ({
  type: 'shapeInterface',
  area: () => state.area(state)
})
const solidShapeInterface = (state) => ({
  type: 'solidShapeInterface',
  volume: () => state.volume(state)
})
const manageShapeInterface = (fn) => ({
  type: 'manageShapeInterface',
  calculate: () => fn()
})


const circle = (radius) => {
  const proto = { 
    radius,
    type: 'Circle',
    area : (args) => Math.pow(args.radius, 2) * 3.14
  }
  const basics = shapeInterface(proto)
  const abstraction = manageShapeInterface(() => basics.area())
  const composite = Object.assign({}, basics, abstraction)
  return Object.assign(Object.create(composite), {radius})
}
const square = (length) => {
  const proto = {
    length,
    type: 'Square',
    area : (args) => Math.pow(args.length, 2)
  }
  const basics = shapeInterface(proto)
  const abstraction = manageShapeInterface(() => basics.area())
  const composite = Object.assign({}, basics, abstraction)
  return Object.assign(composite, {length})
}
const cubo = (length) => {
  const proto = {
    length,
    type   : 'Cubo',
    area   : (args) => Math.pow(args.length, 2),
    volume : (args) => Math.pow(args.length, 3)
  }
  const basics  = shapeInterface(proto)
  const complex = solidShapeInterface(proto)
  const abstraction = manageShapeInterface(
    () => basics.area() + complex.volume()
  )
  const composite = Object.assign({}, basics, abstraction)
  return Object.assign(Object.create(composite), {length})
}


module.exports = {
  circle,
  square,
  cubo,
}