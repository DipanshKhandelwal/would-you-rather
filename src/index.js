import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import middleware from './middleware'
import reducers from './reducers'

const store = createStore(reducers, middleware)

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
)
