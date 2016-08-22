import clone from 'clone'

export default (state = {cartItems: [],
   stocks: {Testproduct: 3, ReallyGoodProduct: 6, SubstantiallyLessGoodProduct: 500},
    totalPrice: 0,
    prices: {Testproduct: 5, ReallyGoodProduct: 700, SubstantiallyLessGoodProduct: 1}}, action) => {
  let newState = clone(state)
  console.log(action)

  switch (action.type) {
    case 'ADD_TO_CART':
      newState.cartItems = [...newState.cartItems, action.product.props.name]
      newState.stocks[action.product.props.name.split(" ").join("")]--
      newState.totalPrice += action.product.props.price
      return newState

    case 'REMOVE_FROM_CART':
      let itemToRemove = newState.cartItems.find((item) => item === action.listProduct.props.name)
      //this currently removes any identical item from the cart :|:|:|:|:|:|
      let indexToDelete = newState.cartItems.indexOf(itemToRemove)
      newState.cartItems.splice(indexToDelete, 1)
      newState.stocks[action.listProduct.props.name.split(" ").join("")]++
      newState.totalPrice -= action.listProduct.props.price
      return newState

    default:
      return state
  }
}
