import {BUY, RESET, RETURN} from "./pizzaTypes"
import { initialPizza } from "./pizzaReducer"

export const buyPizza = (payload = 1) => ({
    type: BUY,
    payload
})

export const returnPizza = (payload = 1) => ({
    type: RETURN,
    payload
})

export const resetPizza = () => ({
    type: RESET,
    payload: initialPizza
})
