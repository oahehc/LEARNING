// apply enzyme
import React from 'react'
import { shallow } from 'enzyme'
import Button from './button'

// render text
test('renders with text', () => {
  const text = 'text'
  const button = shallow(<Button text={text} />)
  expect(button.type).toBe('button')
  expect(button.props.children).toBe(text)
})

// click trigger function
test('fires the onClick callback', () => {
  const onClick = jest.fn()
  const button = shallow(<Button onClick={onClick} />)
  button.simulate('click')
  expect(onClick).toBeCalled()
})