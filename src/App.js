import { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from "./component/Title";
import Counter from "./component/Counter";


import Greet from './practice/FunctionalComp';
import { Welcome } from './practice/ClassComp';

import Increment from './practice/Increment';
import EventBind from './practice/EventBind';
import ParentComponent from './practice/ParentComponent';

function App() {
  const title = "smart learning react";
  const countRef = useRef();
  const addCountValue = () => {
    let countValue = countRef.current.textContent.split(":")[1];
    console.log(countValue);
    countRef.current.textContent = `count:${parseInt(countValue) + 1}`;
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title title={title} />
        <Counter count={1} ref={countRef} />
        <button onClick={() => {
          addCountValue();
        }}>count add</button>
      </header>

      {/* Practice By Zeeshan :: Functional Component */}
      {/* <Greet name="Zeeshan" departmentName="Finance"/>
      <Greet name="Shahid" departmentName="Info Tech"/> */}

      {/* Practice By Zeeshan :: Class Component */}
      {/* <Welcome name="farhan" salary="40000"/>
      <Welcome name="Shahrukh" salary="50000"/> */}

      {/* <Increment addValue="3"/>
      <EventBind/> */}

      <ParentComponent/>
    </div>
  );
}

export default App;
