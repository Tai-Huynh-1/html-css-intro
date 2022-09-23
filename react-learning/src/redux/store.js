import { createStore } from 'redux'
import rootReducer from './rootReducer'

// redux global state store
const store = createStore(rootReducer)

export default store