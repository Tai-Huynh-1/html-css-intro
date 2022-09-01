import { useState } from 'react'

const initialForm = {
    name: "",
    email: "",
    password: ""
}

function Form () {
    const [form, setForm] = useState(initialForm)
    const [name, setName] = useState("")
    const [counter, setCounter] = useState(0)
    
    const handleInput = (event) => {
        setName(event.target.value)
    }

    const increaseCounter = () => {
        setCounter(counter + 1)
        for (let i = 1; i < 6; i++) {
            // setCounter(counter + 1) // setCounter(1)
            setCounter((prevCounter) => (prevCounter + 1))
        }
    }

    const decreaseCounter = () => {
        // setCounter(counter - 1)
        for (let i = 1; i < 6; i++) {
            setCounter(counter - 1)
        }
    }

    return (
        <>
           

            <form className="flex flex-col border border-black mt-4 w-full md:w-6/12 lg:w-3/12 mx-auto p-4 space-y-4">
                <h1 className="text-3xl"><strong>Register</strong></h1>

                <h2 className='text-3xl'>{counter}</h2>
            <button type="button" className='border border-black' onClick={increaseCounter}>+5</button>
            <button type="button" className='border border-black' onClick={decreaseCounter}>-5</button>

                <div className="space-y-4">
                    <label className="flex flex-col text-start">
                        Name 
                        <input className="border border-black p-2 rounded-md" onChange={handleInput} />
                    </label>

                    <label className="flex flex-col text-start">
                        Email 
                        <input className="border border-black p-2 rounded-md" />
                    </label>
                    
                    <label className="flex flex-col text-start">
                        Password 
                        <input className="border border-black p-2 rounded-md" />
                    </label>
                </div>

                <button className="bg-blue-500 p-2 text-white rounded-md">Submit</button>
        </form>
        </>
    )
}

export default Form