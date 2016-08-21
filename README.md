```js
// reducer.js
import clone from 'clone'

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_COUNT':
      let newState = clone(state)
      newState.count++
      return newState

    default:
      return state
  }
}


// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.js'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const render = () => {
  ReactDOM.render(<App state={store.getState()} store={store}/>,
  document.getElementById('app'))
}

store.subscribe(render)
render()


// App.js
addToCount () {
  this.props.store.dispatch(
    { type: 'ADD_TO_COUNT', state: this.props.state }
  )
}

```
