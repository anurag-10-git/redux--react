import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter.js';

const Counter = () => {
const dispatch = useDispatch();
const counter =  useSelector(state => state.counter.counter);
const show = useSelector(state => state.counter.showCounter)

const incrementHandler = () => {
  dispatch(counterActions.increment())
  {/*sending action*/}
}

const increaseHandler = () => {
  dispatch(counterActions.increase(10)) 
  {/*sending action*/}
}
{/* {type: SOME_UNIQUE_IDENTIFIER , payload: 10} */}


const decrementHandler = () => {
  dispatch(counterActions.decrement())
  {/*sending action ie object*/}
}

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {show && <div className={classes.value}>{counter }</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button  onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
