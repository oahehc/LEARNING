import Perf from 'react-addons-perf' // monitor performance

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: ['foo', 'bar'],
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillUpdate() {
    Perf.start()
  }

  componentDidUpdate() {
    Perf.stop()
    Perf.printOperations()
  }

  handleClick() {
    const items = this.state.items.slice()
    items.unshift('baz')
    this.setState({
      items,
    })
  }

  render() {
    return (
      <div>
        <ul>
          {
            // without key, react render whole list when add new one at the top
            this.state.items.map(item => <li>{item}</li>)
          }
        </ul>
        <ul>
          {this.state.items.map(item => <li key={item}>{item}</li>)}
        </ul>
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
}