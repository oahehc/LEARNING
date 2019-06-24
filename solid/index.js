const { square, circle, cubo } = require('./shapeFactory');
const areaCalculator = require('./areaCalculator');

const c2 = circle(2);
console.log('circle',c2,c2.area(), Object.getPrototypeOf(c2));

const shapes = [
  circle(2),
  square(5),
  cubo(6)
]
const areas = areaCalculator(shapes)
console.log(areas.output())