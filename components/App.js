import React from 'react'
import Product from './product.js'
import ListProduct from './listProduct'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }


  render () {
    return (
      <div>
        <h1> Items in cart: </h1>
        <ul className='cartList'>
          {this.props.state.cartItems.map((item, i) => <ListProduct name={item} key={i} state={this.props.store.getState()} store={this.props.store}/>)}
        </ul>
        <Product name='testproduct' stock={this.props.state.stocks.testproduct} state={this.props.store.getState()} store={this.props.store}/>
        <Product name='Really Good Product' stock={this.props.state.stocks.reallyGoodProduct} state={this.props.store.getState()} store={this.props.store}/>
      </div>
    )
  }
}
