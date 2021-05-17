
import './App.css'
import { Balance } from './Components/Balance'
import {Header} from './Components/Header'
import {AccountDetail} from './Components/AccountDetail'
import {TransactionList} from './Components/TransactionList'
import {AddTransaction} from './Components/AddTransaction'

import {GlobalProvider} from './Context/Globalstate'

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
        <Balance/>
        <AccountDetail/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
