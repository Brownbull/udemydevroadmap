import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import 'tachyons'
// ReduxSetup 5 13 18
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
// ReduxSetup 5 18
import { searchRobots, requestRobots } from './reducers'
// ReduxSetup 14
import thunkMiddleware from 'redux-thunk'
// ReduxSetup 13
import { createLogger } from 'redux-logger'
const logger = createLogger()

// ReduxSetup 18
const rootreducer = combineReducers({
  searchRobots,
  requestRobots
})

// ReduxSetup 6 13 14 18
const store = createStore(rootreducer, applyMiddleware(thunkMiddleware, logger))

// ReduxSetup 7 add store on provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'))
registerServiceWorker()
