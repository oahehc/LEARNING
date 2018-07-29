import React from 'react'
import { connect } from 'react-redux'
import { startClock, serverRenderClock, incrementCount, decrementCount, resetCount } from '../redux/actions'

const format = t => `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`
const pad = n => n < 10 ? `0${n}` : n

class ReduxClock extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    reduxStore.dispatch(serverRenderClock(isServer))
    return {}
  }

  componentDidMount () {
    const {dispatch} = this.props
    this.timer = startClock(dispatch)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  increment = () => {
    const {dispatch} = this.props
    dispatch(incrementCount())
  }

  decrement = () => {
    const {dispatch} = this.props
    dispatch(decrementCount())
  }

  reset = () => {
    const {dispatch} = this.props
    dispatch(resetCount())
  }
  
  render () {
    const { lastUpdate, count } = this.props;
    return (
      <div>
        <div>
          {format(new Date(lastUpdate))}
          <style jsx>{`
            div {
              padding: 15px;
              display: inline-block;
              color: #82FA58;
              font: 50px menlo, monaco, monospace;
              background-color: #000;
            }
          `}</style>
        </div>
        <div>
          <h1>Count: <span>{count}</span></h1>
          <button onClick={this.increment}>+1</button>
          <button onClick={this.decrement}>-1</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { lastUpdate, count } = state
  return { lastUpdate, count }
}

export default connect(mapStateToProps)(ReduxClock)