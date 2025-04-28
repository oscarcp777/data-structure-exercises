import { createStore, combineReducers, compose } from 'redux'
import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle, max-len

export default () => createStore(
  combineReducers(reducers),
  composeEnhancers(),
)
