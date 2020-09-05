import React from 'react';
import numberReducer from './numberReducer';
import { useReducer } from 'react';

function Child2() {
  let [state, action]= useReducer(numberReducer, 52)
  return (
    <div >
    Child2 {state}
    <br/>
    Reducer buttons
    <br/>
    <br/>
    <button onClick={() => action({type:'Inc'})}>Increment</button>
    <br/>
    <br/>
    <button onClick={() => action({type:'Dec'})}>Decrement</button>
    </div>
  );
}

export default Child2;
