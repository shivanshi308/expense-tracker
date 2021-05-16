
import './App.css'
import { Balance } from './Components/Balance'
import {Header} from './Components/Header'
import {AccountDetail} from './Components/AccountDetail'

function App() {
  return (
    <div>
      <Header/>
      <div className='container'>
        <Balance/>
        <AccountDetail/>
      </div>
    </div>
  );
}

export default App;
