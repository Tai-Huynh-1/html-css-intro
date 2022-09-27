import { combineReducers } from "redux";
import balanceReducer from "./balance/balanceReducer";
import pizzaReducer from "./pizza/pizzaReducer";
import usersReducer from "./users/usersReducer";

const rootReducer = combineReducers({
    bankBalance: balanceReducer,
    pizzaInventory: pizzaReducer,
    usersList: usersReducer
})

export default rootReducer