import { combineReducers } from "redux";
import balanceReducer from "./balance/balanceReducer";
import pizzaReducer from "./pizza/pizzaReducer";

const rootReducer = combineReducers({
    bankBalance: balanceReducer,
    pizzaInventory: pizzaReducer
})

export default rootReducer