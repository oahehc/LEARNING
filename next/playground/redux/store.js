import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { exampleInitialState, reducer } from './reducer'

export function initializeStore (initialState = exampleInitialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}