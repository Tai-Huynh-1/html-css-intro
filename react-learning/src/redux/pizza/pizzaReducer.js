import { BUY, RETURN } from "./pizzaTypes"

const initialPizza = 50

const pizzaReducer = (pizza = initialPizza, action) => {
    switch (action.type) {
        case BUY:
            return pizza - action.payload
        case RETURN:
            return pizza + parseInt(action.payload)
        default:
            return pizza
    }
}

export default pizzaReducer