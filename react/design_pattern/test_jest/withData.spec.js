// test HoC

import React from 'react'
import { shallow, mount } from 'enzyme'
import withData from './with-data'
import getJSON from './get-json'

const data = 'data'
const List = () => <div />

// replace the external module with the function
jest.mock('./get-json', () => (
  jest.fn(() => ({ then: callback => callback(data) }))
))

// username has been pass to prop
test('passes the props to the component', () => {
  const ListWithGists = withData()(List)
  const username = 'gaearon'
  const wrapper = shallow(<ListWithGists username={username} />)
  expect(wrapper.prop('username')).toBe(username)
})

// getJSON been called with parameter
test('uses the string url', () => {
  const url = 'https://api.github.com/users/gaearon/gists'
  const withGists = withData(url)
  const ListWithGists = withGists(List)
  mount(<ListWithGists />)
  expect(getJSON).toHaveBeenCalledWith(url)
})

test('uses the function url', () => {
  const url = jest.fn(props => (
    `https://api.github.com/users/${props.username}/gists`
  ))
  const withGists = withData(url)
  const ListWithGists = withGists(List)
  const props = { username: 'gaearon' }
  mount(<ListWithGists {...props} />)
  expect(url).toHaveBeenCalledWith(props)
  expect(getJSON).toHaveBeenCalledWith(
    'https://api.github.com/users/gaearon/gists'
  )
})

// data get from getJSON has been pass to component
test('passes the data to the component', () => {
  const ListWithGists = withData()(List)
  const wrapper = mount(<ListWithGists />)
  expect(wrapper.prop('data')).toEqual(data)
})