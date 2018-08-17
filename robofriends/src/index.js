import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import 'tachyons'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { searchRobots, requestRobots } from './reducers'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
const logger = createLogger()

const rootreducer = combineReducers({
  searchRobots,
  requestRobots
})

const store = createStore(rootreducer, applyMiddleware(thunkMiddleware))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'))
registerServiceWorker()
