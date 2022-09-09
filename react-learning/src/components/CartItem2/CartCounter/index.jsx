

const CartCounter = ({counter, setCounter}) => {
    // const pageContent = {
    //     greet: () => console.log("animal: Hi")
    // }

    // const layout = {
    //     bark: () => console.log("ruff ruff"),
    //     child: pageContent
    // }

    // layout.child.greet = () => console.log("dog greeting")
    // layout.child.greet()
    // // ===============
    
    const handleDecrement = () => {
        setCounter(prevCounter => prevCounter === 1 ? 1 : prevCounter - 1)
    }

    const handleIncrement = () => {
        setCounter(prevCounter => prevCounter === 10 ? 10 : prevCounter + 1)
    }

    return (
        <div className="flex">
            {/* Counter */}
            <div className="border-2 border-gray-300 w-7/12">
                <div className="flex w-full text-2xl p-1">
                    <button className="w-4/12" onClick={handleDecrement}><strong>-</strong></button>
                    <div className="w-4/12 text-md flex flex-col"><strong className="block my-auto">{counter}</strong></div>
                    <button className="w-4/12" onClick={handleIncrement}><strong>+</strong></button>
                </div>
            </div>

            <div className="w-5/12 flex flex-col">
                <button className="text-orange-500 my-auto"><strong>REMOVE</strong></button>
            </div>
        </div>
    )
}

export default CartCounter