import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import { setUser, deleteUser } from '../../redux/users/usersActions'


const DataContainer = ({counter}) => {
    const dispatch = useDispatch()
    const data = useSelector((states) => states.usersList)
    const [loading, setLoading] = useState(true)

    async function fetchData(url, controller, actionCreator) {
        try {
            const response = await axios.get(url, {
                signal: controller.signal
            })
            dispatch(actionCreator(response.data))
            setLoading(false)
        } catch (err) {
            console.log(err)
            setLoading(false)
        }
    }
    
    useEffect(() => {
        // set up controller and fetch data
        const controller = new AbortController()
        fetchData("https://jsonplaceholder.typicode.com/users", controller, setUser)

        return () => { // cleanup function (optional)
            // abort API call if component unmounts before API call completes
            controller.abort()
        }
    }, [])

    const deleteUserById = (id) => {
        // make API call to delete user with given 'id'
        console.log('id', id)
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({id: id})
            }, 300)
        }).then(result => {
            // update redux to be in sync with DB by removing user with the specific id
            console.log('result', result)
            dispatch(deleteUser(result.id))
        }).catch(err => console.log('delete failed', err))
    }

    console.log('data', data)

    if (loading) {
        return <div className='bg-blue-500 w-full h-full'></div>
    }

    return (
        <div className='border border-black w-1/2 space-y-2'>
            {/* <h1><strong>{counter}</strong></h1> */}
            {/* {data?.name} */}
            {data.map((el) => {
                return (<div className='' key={el.id}>{el.name} <button className='bg-red-500' onClick={(event) => deleteUserById(el.id)}>Delete</button></div>)
            })}
        </div>
    )
}

export default DataContainer



// class Navbar extends Component {
//     constructor() {
//         super()
//     }

//     componentDidMount() {
//         // fetch data in here
//     }

//     componentWillUnmount() {
//         // perform cleanups
//     }

//     render() {
//         return (<div></div>)
//     }
// }



