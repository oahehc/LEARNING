import actionTypes from './constants'

export const serverRenderClock = (isServer) => dispatch => {
  console.log('--- serverRenderClock');
  return dispatch({ type: actionTypes.TICK, ts: Date.now() })
}

export const startClock = dispatch => {
  console.log('--- startClock');
  return setInterval(() => {
    // Dispatch `TICK` every 1 second
    dispatch({ type: actionTypes.TICK, ts: Date.now() })
  }, 1000)
}

export const incrementCount = () => dispatch => {
  return dispatch({ type: actionTypes.INCREMENT })
}

export const decrementCount = () => dispatch => {
  return dispatch({ type: actionTypes.DECREMENT })
}

export const resetCount = () => dispatch => {
  return dispatch({ type: actionTypes.RESET })
}

