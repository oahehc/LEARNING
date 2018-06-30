class Input extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
    this.reset = this.reset.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  reset() {
    this.setState({
      value: '',
    })
  }
  handleChange({ target }) {
    this.setState({
      value: target.value,
    })
  }
  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
      />
    )
  }
}

class Reset extends React.Component{
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.element.reset()
  }
  render() {
    return (
      <form>
        <Input ref={element => (this.element = element)} />
        <button onClick={this.handleClick}>Reset</button>
      </form>
    ) 
  }
}
