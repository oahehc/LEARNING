// Using mixins is no longer recommended

// create mixin
const WindowResize = {
  getInitialState() {
    return {
      innerWidth: window.innerWidth,
    }
  },
  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  },
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },
  handleResize() {
    this.setState({
      innerWidth: window.innerWidth,
    })
  },
}

// apply mixin
const MyComponent = React.createClass({
  mixins: [WindowResize],
  render() {
    console.log('window.innerWidth', this.state.innerWidth)
    ...
  }, 
})