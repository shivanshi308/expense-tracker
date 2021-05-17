import React, {useContext} from 'react'
import {GlobalContext} from '../Context/Globalstate'

export const Balance = () => {

    const {transactions} = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount);

    //calculate balance correct to 2 decimal places
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div>
            <h4>Current Balance</h4>
            <h1 id="balance">${total}</h1>
        </div>
    )
}
