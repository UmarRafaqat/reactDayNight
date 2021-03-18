import React, { useState } from 'react';
import './App.css';
import { Message } from './Message.js';

function App() {
  let [count, setCount] = useState(1);
  let [isMorning, setMorning] = useState(false);
  return (

    <div className={`box ${isMorning ? 'day' : ''}`}>
      <h1>Good {isMorning ? 'Morning' : 'Night'}</h1>
      <Message counter={count}></Message>
      {/* <h1>Value of counter variable is: {count}</h1>*/}

      < br />
      <button onClick={() => setCount(++count)}>Update Counter</button>
      <button onClick={()=>setMorning(!isMorning)}>Update Day</button>
    </div>
  );
}

export default App;
