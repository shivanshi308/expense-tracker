import React from 'react'

export const TransactionList = () => {
    return (
        <>      
        <h3>Recent Transactions</h3>
        <ul id='list' className='list'>
            <li className='minus'>
                Cash <span>-$250</span><button className='delete-btn'>x</button>
            </li>
        </ul>
        </>

    )
}