class FontSize extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 16,
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange({ target }) {
    this.setState({
      value: Number(target.value),
    })
  }
  render() {
    return (
      <input
        type="number"
        value={this.state.value}
        onChange={this.handleChange}
        style={{ fontSize: this.state.value }}
      />
    )
  }
}

// radium: support pseudo-classes/media queries in inline style
import radium from 'radium'
const styles = {
  backgroundColor: '#ff0000',
  width: 320,
  padding: 20,
  borderRadius: 5,
  border: 'none',
  outline: 'none',
  ':hover': {
    color: '#fff',
  },
  '@media (max-width: 480px)': {
    width: 160,
  },
}
const Button = () => <button style={styles}>Click me!</button>
export default radium(Button)