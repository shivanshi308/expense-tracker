import React, {useContext} from 'react'
import {GlobalContext} from '../Context/Globalstate'

import { useHistory } from 'react-router-dom';

export const Balance = () => {

    const history = useHistory();
    const {transactions} = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount);

    //calculate balance correct to 2 decimal places
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div>
            <h3 >Current Balance</h3>
            <h1 id="balance">${total}</h1>
            <br/>
            <button className="btn" onClick={() => history.push('/add')}>+ New transaction</button>
        </div>
    )
}
