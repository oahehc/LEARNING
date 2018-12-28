import React from 'react'
import {render, fireEvent} from 'react-testing-library'
import Counter from './localStorage'

afterEach(() => {
  window.localStorage.removeItem('count')
})

test('reads and updates localStorage', () => {
  window.localStorage.setItem('count', 3)
  const {container, rerender} = render(<Counter />)
  const button = container.firstChild
  expect(button.textContent).toBe('3')
  fireEvent.click(button)
  expect(button.textContent).toBe('4')
  rerender(<Counter />)
  expect(window.localStorage.getItem('count')).toBe('4')
})
