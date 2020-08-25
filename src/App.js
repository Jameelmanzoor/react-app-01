import React from 'react';
import './App.css';
import SayHello from "./SayHello"

function App({name, age}) {
  return <div>Hello World from app.js updated. Created by {name}. Age = {age - 50}
  <br/>
  <SayHello firstName = {name}></SayHello>
  </div>;

}

export default App;
