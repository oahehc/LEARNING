const Circle = ({ x, y, radius, fill }) => (
  <svg>
    <circle cx={x} cy={y} r={radius} fill={fill} />
  </svg>
)
Circle.propTypes = {
  cx: React.PropTypes.number,
  cy: React.PropTypes.number,
  r: React.PropTypes.number,
  fill: React.PropTypes.string,
}

const RedCircle = ({ x, y, radius }) => (
  <Circle x={x} y={y} radius={radius} fill="red" />
)