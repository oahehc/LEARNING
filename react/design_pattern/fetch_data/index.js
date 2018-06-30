
// HoC for fire api
const withData = url => Component => (
  class extends React.Component {
    constructor(props) {
      super(props)
      this.state = { data: [] }
    }
    componentDidMount() {
      const endpoint = typeof url === 'function'
        ? url(this.props)
        : url
      fetch(endpoint)
        .then(response => response.json())
        .then(data => this.setState({ data }))
    }
    render() {
      return <Component {...this.props} {...this.state} />
    }
  }
)

// List: stateless component
const List = ({ data: gists }) => (
  <ul>
    {gists.map(gist => (
      <li key={gist.id}>{gist.description}</li>
))} </ul>
)
List.propTypes = {
  data: React.PropTypes.array,
}

// adapt HoC
const withGists = withData(
  props => `https://api.github.com/users/${props.username}/gists`
)
const ListWithGists = withGists(List)

// pass username
<ListWithGists username="gaearon" />


// ---------------------
// apply react-refetch: https://github.com/heroku/react-refetch
import { connect } from 'react-refetch'

// fire when received parameter: id
const token = 'access_token=123'
const connectWithStar = connect(({ id }) => ({
  star: () => ({
    starResponse: {
      url: `https://api.github.com/gists/${id}/star?${token}`,
      method: 'PUT',
  }, }),
}))
const GistWithStar = connectWithStar(Gist)

// list all gists
const List = ({ gists }) => (
  gists.fulfilled && (
    <ul>
      {gists.value.map(gist => (
        <Gist key={gist.id} {...gist} />
      ))}
    </ul> 
  )
)
List.propTypes = {
  gists: React.PropTypes.object,
}

// display descirption add apply onClick to trigger fetch
const Gist = ({ description, star }) => (
  <li>
    {description}
    <button onClick={star}>+1</button>
  </li>
)
Gist.propTypes = {
  description: React.PropTypes.string,
  star: React.PropTypes.func,
}