import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DataContainer = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])


    useEffect(() => {
        setLoading(true)
        console.log('step 1: data container mounting, running useEffect to fetch data')


        // JS is synchronous (single threaded)
        // asynchronous JS (async)
        // originally async JS uses callbacks which results in "callback hell" => causes the code to be unreadable
        // promise is a ES6 feature
        // axios.get("https://jsonplaceholder.typicode.com/users") // returns a "promise" (placeholder or receipt for future value)
        //     .then(result => {
        //         console.log('step 3: successfully fetched users', result.data)
        //         axios.get("https://jsonplaceholder.typicode.com/comments")
        //         .then(result => {
        //             console.log("step 3: successfully fetched comments", result.data)
        //             axios.get("https://jsonplaceholder.typicode.com/posts")
        //             .then(result => {
        //                 console.log("step 3: successfully fetched posts", result.data)
        //             })
        //         })
        //     })
        //     .catch(error => console.log('api call failed', error))

        // Promise.all =========================
        const allMyPromises = [axios.get("https://jsonplaceholder.typicode.com/users"), axios.get("https://jsonplaceholder.typicode.com/comments"), axios.get("https://jsonplaceholder.typicode.com/posts")]
        
        Promise.all(allMyPromises).then(allResults => {
            allResults.forEach(el => console.log(el))
        })

        // async function fetchData(url) {
        //     try {
        //         const response = await axios.get(url)
        //         console.log("step 3: response has been retrieved", response)
        //     } catch (error) {
        //         console.log(error)
        //     }
        // }

        // fetchData("https://jsonplaceholder.typicode.com/users")

        console.log('step 2: waiting for data to be returned')    


        setLoading(false)

        return () => { // cleanup function
            console.log('FINAL step: container about to unmount, cleaning up')
        }
    }, [])

    // promises / async
    // useEffect & data fetching
    // cleanup and lifecycle

    return (
        <div className='border border-black w-1/2 h-80'>{loading ? "Loading" : "Data Fetched Successfully"}</div>
    )
}

export default DataContainer