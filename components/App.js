import React from 'react'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.addToCount = this.addToCount.bind(this)
    this.subtractFromCount = this.subtractFromCount.bind(this)
  }

  addToCount () {
    this.props.store.dispatch(
      { type: 'ADD_TO_COUNT' }
    )
  }

  subtractFromCount () {
    this.props.store.dispatch(
      { type: 'SUBTRACT_FROM_COUNT' }
    )
  }

  render () {
    console.log("state", this.props.state)
    return (
      <div>
        <h1>{this.props.state.count}</h1>
        <button onClick={this.subtractFromCount}>Subtract</button>
        <button onClick={this.addToCount}>Add</button>
      </div>
    )
  }
}
