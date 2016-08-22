import React from 'react'

export default class Product extends React.Component {
  constructor(props) {
    super(props)
    this.addToCart = this.addToCart.bind(this)
  }

  addToCart () {
    if(this.props.state.stocks[this.props.name.split(" ").join("")] > 0){
      this.props.store.dispatch(
        { type: 'ADD_TO_CART', product: this }
      )
    }
  }

  render () {
    return (
      <div>
        <h3> I am a {this.props.name}! </h3>
        <h4> there are currently {this.props.stock} more of me in stock </h4>
        <button onClick={this.addToCart}>Add to cart</button> Price: ${this.props.price}
      </div>
    )
  }
}
