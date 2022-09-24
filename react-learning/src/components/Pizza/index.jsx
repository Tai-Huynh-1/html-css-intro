import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyPizza, returnPizza, resetPizza } from '../../redux/pizza/pizzaActions'


const Pizza = () => {
    const pizzaInventory = useSelector(states => states.pizzaInventory) // used to access redux state
    const dispatch = useDispatch()
    const [pizzaToBuy, setPizzaToBuy] = useState(1)
    
    const handlePizzaToBuy = (event) => {
        setPizzaToBuy(event.target.value)
    }

    const handleBuy = () => {
        const action = buyPizza(pizzaToBuy) // {type: "BUY", payload: pizzaToBuy}
        dispatch(action)
    }

    const handleReturn = () => {
        const action = returnPizza(pizzaToBuy)
        dispatch(action)
    }

    const handleReset = () => {
        const action = resetPizza()
        dispatch(action)
    }


    return (
        <div>
            <h1><strong>My Pizza Store</strong></h1>
            <h2><strong>Pizza Inventory: {pizzaInventory}</strong></h2>


            <label>
                Amount to buy: <input className='border-black border p-2' min={1} type="number" value={pizzaToBuy} onChange={handlePizzaToBuy} />
            </label>
            <br />
            <button className='border p-2 rounded-md' onClick={handleBuy}>Buy Pizza</button>
            <button className='border p-2 rounded-md' onClick={handleReturn}>Return Pizza</button>
            <button className='border p-2 rounded-md' onClick={handleReset}>Reset Pizza</button>
        </div>
    )
}

export default Pizza