import React, { useEffect } from 'react'
import axios from 'axios'

const DataContainer = () => {
    useEffect(() => {
        console.log('step 1: data container mounting, running useEffect to fetch data')

        // JS is synchronous (single threaded)
        // asynchronous JS (async)
        axios.get("https://jsonplaceholder.typicode.com/users") // returns a "promise" (receipt)
            .then(result => {
                console.log('step 3: successfully fetched data', result.data)
            })

        console.log('step 2: waiting for data to be returned')    

        return () => { // cleanup function
            console.log('FINAL step: container about to unmount, cleaning up')
        }
    }, [])

    // promises / async
    // useEffect & data fetching
    // cleanup and lifecycle

    return (
        <div>DataContainer</div>
    )
}

export default DataContainer