import React, {useContext} from 'react'
import {GlobalContext} from '../Context/Globalstate'

export const AccountDetail = () => {

    const {transactions} = useContext(GlobalContext)

    //could have calculated amount once (in Balance.js) and received as prop here,
    // or create a separate state to be included in context
    // latter option redundant
    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    const expense = (
      amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *-1)
    .toFixed(2);

    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
            <p className="money plus">+ ${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">- ${expense}</p>
        </div>
      </div>
    )
}
