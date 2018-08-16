import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import 'tachyons'
// ReduxSetup 5 13
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { searchRobots } from './reducers'
// ReduxSetup 13
import { createLogger } from 'redux-logger'
const logger = createLogger()

// ReduxSetup 6 13
const store = createStore(searchRobots, applyMiddleware(logger))

// ReduxSetup 7 add store on provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'))
registerServiceWorker()
