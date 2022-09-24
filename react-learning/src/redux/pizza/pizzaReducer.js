import { BUY, RETURN, RESET } from "./pizzaTypes"

export const initialPizza = 50

const pizzaReducer = (pizza = initialPizza, action) => {
    switch (action.type) {
        case BUY:
            return pizza - action.payload
        case RETURN:
            return pizza + parseInt(action.payload)
        case RESET:
            return action.payload
        default:
            return pizza
    }
}

export default pizzaReducer