import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from "./component/Title";
import Counter from "./component/Counter";
import counterGenerator from "./utility";

import UpdateName from './component/UpdateName';
import ShowCounter from './component/ShowCounter';
import UpdateObject from './component/UpdateObject';

const gen_count = counterGenerator();
const initial_ = gen_count.next().value;

function App() {
  // console.log(gen_count);
  // state hook
  const [store, setStore] = useState({
    count: initial_,
    title: "Smart Learning React!"
  });
  useEffect(() => {
    console.log("component mount!", store);
    if (store.count >= 5 && store.count <= 8) {
      let _title = "You have won the match!";
      setStore({
        ...store,
        title: _title
      });
    } else if (store.count >= 8) {
      let _title = "Smart Learning React!";
      setStore({
        ...store,
        title: _title
      });
    }
  }, [store.count])
  const addCountValue = () => {
    // let countValue = countRef.current.textContent.split(":")[1];
    // console.log(countValue);
    // countRef.current.textContent = `count:${parseInt(countValue)+1}`;
    // let c_count = count+1;
    // if(c_count <=10){
    //   setCount(count+1);
    // }
    // console.log(gen_count.next());
    let c_count = gen_count.next().value;
    let _store = {
      ...store,
      count: c_count
    };
    setStore(_store);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<Title title={store.title} />
        <Counter count={store.count} />
         <button onClick={() => { addCountValue(); }}>count add</button> */}


        {/* Lessons Practice  */}
        <UpdateName />
        <ShowCounter />

        <UpdateObject />
      </header>
    </div>
  );
}

export default App;
