import React, {useState} from 'react';
import './room.css';

function Room() {
  // const state = useState(true);
  // const islite = state[0];
  // const setLit = state[1];

  let [isLite, setLit] = useState(false);
  let [age, setAge] = useState(23);
  return (
    <div className={`room ${isLite ? "lit" : "dark"}`}>
      <h1>The Room is  {isLite ? "lit" : "dark"} </h1>
      <br/>
      age = {age}
      <br />
      <br />
      <br />
      <button onClick={() => setLit(!isLite)}>Toggle Light</button>
      <br />
      <br />
      <br />
      <button onClick={() => setAge(++age)}>Update Age</button>
    </div>
  )
}

export default Room;