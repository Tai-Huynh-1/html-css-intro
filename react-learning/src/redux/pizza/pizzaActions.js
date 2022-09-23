import {BUY, RETURN} from "./pizzaTypes"

export const buyPizza = (payload = 1) => ({
    type: BUY,
    payload
})

export const returnPizza = (payload = 1) => ({
    type: RETURN,
    payload
})