import './App.css';
//import { Clock } from './Components/Clock'
import { Chat } from './Components/Chat'
import Loader from './Components/Loader'

const App = () => {
  return(
    <div>
      {/* <Clock/> */}
      <Chat/>
      <Loader/>
    </div>
  )
}

export default App;
