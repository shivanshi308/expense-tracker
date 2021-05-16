
import './App.css'
import { Balance } from './Components/Balance'
import {Header} from './Components/Header'
import {AccountDetail} from './Components/AccountDetail'
import {TransactionList} from './Components/TransactionList'
import {AddTransaction} from './Components/AddTransaction'

function App() {
  return (
    <div>
      <Header/>
      <div className='container'>
        <Balance/>
        <AccountDetail/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </div>
  );
}

export default App;
