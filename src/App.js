import {useSelector, useDispatch} from 'react-redux'
import { increment } from './actions/increment';
import { decrement } from './actions/increment';


function App() {
  const Counter = useSelector(state => 
    
      state.counterReducer)
  const dispatch = useDispatch()
  console.log(Counter,'form App')
  return (
    <div className="App">
      <h1>counter {Counter}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
