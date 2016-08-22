import React from 'react'
import Product from './product.js'
import ListProduct from './listProduct'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }


  render () {
    console.log(this.props.state);
    return (
      <div>
        <ul className='cartList'>
          <h1> Items in cart: </h1>
          {this.props.state.cartItems.map((item, i) => <ListProduct price={this.props.state.prices[item.split(' ').join('')]} name={item} key={i} state={this.props.store.getState()} store={this.props.store}/>)}
          <h2> Total Price: ${this.props.state.totalPrice} </h2>
        </ul>
        <div className='productList'>
          <h1> Product List </h1>
          <Product name='Testproduct' stock={this.props.state.stocks.Testproduct} state={this.props.store.getState()} store={this.props.store} price={this.props.state.prices.Testproduct}/>
          <Product name='Really Good Product' stock={this.props.state.stocks.ReallyGoodProduct} state={this.props.store.getState()} store={this.props.store} price={this.props.state.prices.ReallyGoodProduct}/>
          <Product name='Substantially Less Good Product' stock={this.props.state.stocks.SubstantiallyLessGoodProduct} state={this.props.store.getState()} store={this.props.store} price={this.props.state.prices.SubstantiallyLessGoodProduct}/>
        </div>
      </div>
    )
  }
}
