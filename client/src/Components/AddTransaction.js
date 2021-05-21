import React, {useContext, useState} from 'react'
import {GlobalContext} from '../Context/Globalstate'

import { useHistory } from 'react-router-dom';



export const AddTransaction = () => {

    const history = useHistory();


    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext)

    const onSubmit = e =>{

      e.preventDefault();

      // amount : + amount means the amount value is parsed as number, not string
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
      }
  
      addTransaction(newTransaction);
      setText('')
      setAmount(0)
      history.goBack()
    }
    

    return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label className='label' htmlFor="text">Description</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label className='label' htmlFor="amount"
            >Amount <br />
            (negative : expense, positive : income)
            </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <br/>
        <button className="btn">Add transaction</button>
      </form>
    </>
    )
}
