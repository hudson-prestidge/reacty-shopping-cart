import React from 'react'

export default class ListProduct extends React.Component {
  constructor(props) {
    super(props)
    this.RemoveFromCart = this.RemoveFromCart.bind(this)
  }

  RemoveFromCart () {
    this.props.store.dispatch(
      { type: 'REMOVE_FROM_CART', listProduct: this }
    )
  }

  render () {
    return (
      <div>
        <h3> {this.props.name} </h3>
        <button onClick={this.RemoveFromCart}>Remove from cart</button>
      </div>
    )
  }
}
