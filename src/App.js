import React, { useState } from 'react';
import Parant from './Parant';
import ValueContext from './ValueContext';


function App({ name }) {
  let value = useState(400);
  return (
    <ValueContext.Provider value={value}>
      <div >
        Hello World {name}.
      <Parant />
      </div>
    </ValueContext.Provider>
  );
}

export default App;
