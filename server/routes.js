  
const express = require('express');
const router = express.Router();

//defining the routes based on data fetched by controllers who will interact with database
const {getTransactions, addTransaction, deleteTransaction} = require('./controllers/transactions')

router
    .route('/')
    .get(getTransactions)
    .post(addTransaction)

router
    .route('/:id')
    .delete(deleteTransaction)

module.exports=router