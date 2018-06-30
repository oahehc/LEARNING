// Building the toggle component

import React from 'react'
// 🐨 uncomment this import to get the switch component.
// It takes an `onClick` and an `on` prop
import { Switch } from '../switch'

class Toggle extends React.Component {
  state = {
    on: false,
  }
  handleClick = () => {
    this.setState((currentState) => {
      return { on: !currentState.on }
    }, () => {
      this.props.onToggle(this.state.on)
    });
  }
  render(){
    return (
      <Switch
        onClick={this.handleClick}
        on={this.state.on}
      />
    )
  }
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.
// You can make all the tests pass by updating the Toggle component.
function Usage({
  onToggle = (...args) => console.log('onToggle', ...args),
}) {
  return <Toggle onToggle={onToggle} />
}
Usage.title = 'Build Toggle'

export { Toggle, Usage as default }
