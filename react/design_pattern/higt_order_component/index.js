const withClassName = Component => props => (
  <Component {...props} className="my-class" />
)

// add resize event
const withInnerWidth = Component => (
  class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        innerWidth: window.innerWidth,
      }
      this.handleResize = this.handleResize.bind(this)
    }
    componentDidMount() {
      window.addEventListener('resize', this.handleResize)
    }
    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize)
    }
    handleResize() {
      this.setState({
        innerWidth: window.innerWidth,
      })
    }
    render() {
      return <Component {...this.props} {...this.state} />
    }
  }
)

// * https://github.com/acdlite/recompose
// flat prop to prevent pass object in props
const ProfileWithFlattenUser = flattenProp('user')(Profile)
// compose flat and rename and resize event handler
const enhance = compose(
  flattenProp('user'),
  renameProp('username', 'name'),
  withInnerWidth
)

// get text and transfer to prop
const withCurrency = getContext({
  currency: React.PropTypes.string
})
const PriceWithCurrency = withCurrency(Price)


// Function as Child
const Name = ({ children }) => children('World')
Name.propTypes = {
  children: React.PropTypes.func.isRequired,
}
<Name>
  {name => <div>Hello, {name}!</div>}
</Name>
// example, fetch api and set result as child function's parameter
<Fetch url="...">
  {data => <List data={data} />}
</Fetch>