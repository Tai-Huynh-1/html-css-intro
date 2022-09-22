import { createStore } from 'redux'
import balanceReducer from './balance/balanceReducer'
// import in Pizza Reducer to use inside of createStore

// redux global state store
const store = createStore(balanceReducer)

export default store