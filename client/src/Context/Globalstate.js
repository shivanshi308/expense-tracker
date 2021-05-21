import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

import axios from 'axios'

// Initial state
const initialState = {
  transactions: [],
  error: null,
  loading: true
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

// Actions - they make calls to reducer

async function getTransactions (){

  try{

    const res = await axios.get('/home')
    //console.log(res.data.data)
    dispatch({
      type: 'GET_TRANSACTIONS',
      payload: res.data.data
    })

  }
  catch(err){
    dispatch({
      type: 'TRANSACTION_ERROR',
      payload: err.response.data.error
    });
    //console.log(err)
  }
}


async function deleteTransaction(id) {

    try{

      axios.delete(`/home/${id}`) 

      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
      });

    }
     catch(err){
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }


  async function addTransaction(transaction) {

    //so that web framework will automatically parse data to json
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const res = await axios.post('/home', transaction, config);

      dispatch({
        type: 'ADD_TRANSACTION',
        payload: res.data.data
      });

    }
     catch(err){
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions, 
      error: state.error,
      loading: state.loading,
      getTransactions,
      deleteTransaction,
      addTransaction
    }}>
      {children}
    </GlobalContext.Provider>
  );
}