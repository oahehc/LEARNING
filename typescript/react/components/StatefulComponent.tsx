import React, { Component } from 'react'
import Button from './StatelessComponent'

const initialState = { clicksCount: 0 }
type State = Readonly<typeof initialState>


class ButtonCounter extends Component<object, State> {
  readonly state: State = initialState

  private handleIncrement = () => this.setState(incrementClickCount)
  private handleDecrement = () => this.setState(decrementClickCount)

  render() {
    const { clicksCount } = this.state

    return (
      <>
        <Button onClick={this.handleIncrement}>+</Button>
        <Button onClick={this.handleDecrement}>-</Button>
        clicked: {clicksCount}
      </>
    )
  }
}

const incrementClickCount = (prevState: State) => ({ clicksCount: prevState.clicksCount + 1})
const decrementClickCount = (prevState: State) => ({ clicksCount: prevState.clicksCount - 1})

export default ButtonCounter