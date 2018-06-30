handleChange({ target }) {
  this.setState({
    [target.name]: target.value,
  })
}

// bind event handler
handleEvent(event) {
  switch (event.type) {
    case 'click':
      console.log('clicked')
      break
    case 'dblclick':
      console.log('double clicked')
      break
    default:
      console.log('unhandled', event.type)
} }
render() {
  return (
    <button
      onClick={this.handleEvent}
      onDoubleClick={this.handleEvent}
    >
      Click me!
    </button>
  )
}