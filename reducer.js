import clone from 'clone'

export default (state = {cartItems: [], stocks: {testproduct: 3, reallyGoodProduct: 6}}, action) => {
  let newState = clone(state)
  console.log(action)

  switch (action.type) {
    case 'ADD_TO_CART':
      newState.cartItems = [...newState.cartItems, action.product.props.name]
      newState.stocks[action.product.props.name]--
      return newState

    case 'REMOVE_FROM_CART':
      let itemToRemove = newState.cartItems.find((item) => item === action.listProduct.props.name)
      //this currently removes any identical item from the cart :|:|:|:|:|:|
      let indexToDelete = newState.cartItems.indexOf(itemToRemove)
      newState.cartItems.splice(indexToDelete, 1)
      newState.stocks[action.listProduct.props.name]++
      return newState

    default:
      return state
  }
}
