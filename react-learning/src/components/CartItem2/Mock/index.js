export const MyReactComponent = () => {

    const handleIncrease = (event) => {
        console.log(event)
    }

    return <div>
        <button onClick={handleIncrease}>Increment</button>
    </div>
}
