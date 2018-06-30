// re-render when prop, state change, and shallowEqual only

class Item extends React.PureComponent {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.onClick(this.props.item)
  }

  render() {
    return (
      <li onClick={this.handleClick}>
        {this.props.item}
      </li>
    )
  }
}