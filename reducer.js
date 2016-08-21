import clone from 'clone'

export default (state = {count: 0}, action) => {
  let newState = clone(state)

  switch (action.type) {
    case 'ADD_TO_COUNT':
      newState.count++
      return newState

    case 'SUBTRACT_FROM_COUNT':
      newState.count--
      return newState

    default:
      return state
  }
}
