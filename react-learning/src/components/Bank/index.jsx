import { useDispatch, useSelector } from 'react-redux'
import { deposit, withdraw } from '../../redux/balance/balanceActions'

const Bank = () => {
    const balance = useSelector(state => state) // used to access redux state
    const dispatch = useDispatch()

    const handleDeposit = () => {
        const action = deposit()
        dispatch(action)
        // setBalance(prevBal => prevBal + 10)
    }

    const handleWithdraw = () => {
        const action = withdraw()
        dispatch(action)
        // setBalance(prevBal => prevBal - 10)
    }

    console.log('balance', balance)

    return (
        <div>
            <h1><strong>My Bank Account</strong></h1>
            <h2><strong>Balance: ${balance}</strong></h2>

            <button className='border p-2 rounded-md' onClick={handleDeposit}>Deposit $10</button>
            <button className='border p-2 rounded-md' onClick={handleWithdraw}>Withdraw $10</button>
        </div>
    )
}

export default Bank