import { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from "./component/Title";
import Counter from "./component/Counter";

function App() {
  const title="smart learning react";
  const countRef= useRef();
  const addCountValue = ()=>{
    let countValue = countRef.current.textContent.split(":")[1];
    console.log(countValue);
    countRef.current.textContent = `count:${parseInt(countValue)+1}`;
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title title={title}/>
        <Counter count={1} ref={countRef}/>
        <button onClick={()=>{
          addCountValue();
        }}>count add</button>
      </header>
    </div>
  );
}

export default App;
