// State reducer function. Each state has its own reducer function.
// A reducer function is pure function (no side effects or mutations)
// Based on the action passed into the reducer, it will update the state

import {DEPOSIT, WITHDRAW} from "./balanceTypes"

// balance is your state

const initalBalance = 100

const balanceReducer = (balance = initalBalance, action) => {
    switch (action.type) {
        case DEPOSIT:
            return balance + action.payload
        case WITHDRAW:
            return balance - action.payload
        default:
            return balance    
    }
}

export default balanceReducer