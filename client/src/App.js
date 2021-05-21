
import './App.css'
import { Balance } from './Components/Balance'
import {Header} from './Components/Header'
import {AccountDetail} from './Components/AccountDetail'
import {TransactionList} from './Components/TransactionList'
import {AddTransaction} from './Components/AddTransaction'

import {GlobalProvider} from './Context/Globalstate'

import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'> 
        
        <Router>
          <Route path="/" exact>
              
              <AccountDetail/>
              <TransactionList/>
              <Balance/>
          </Route>

          <Route path="/add" exact>
            <AddTransaction />
          </Route>
        </Router>

      </div>
    </GlobalProvider>
  );
}



export default App;
