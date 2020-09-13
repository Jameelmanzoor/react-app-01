import React, { useContext } from 'react';
import ValueContext from './ValueContext';

function Child() {
  let [number, SetNumber] = useContext(ValueContext);
  return (
    <div >
      Child Num {number}.
      <br/>
      <button onClick={() => SetNumber(++number)}>Click me</button>
    </div>
  );
}

export default Child;
