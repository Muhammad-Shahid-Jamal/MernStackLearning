import { useEffect, useState,useReducer } from "react";
import "./App.css";

const initialState = {
  count:0
};

function reducer_shahid(state,action){
  switch(action.type){
    case "increment":
      return {
        count:state.count+action.payload
      };
    case "decrement":
      return {
        count:state.count-action.payload
      }
    default :
      return initialState;
  }
}

function App() {
  const [count,setCount] = useState(0);
  const [_count,dispatch] = useReducer(reducer_shahid,initialState);
  useEffect(()=>{
    console.log("component rendring");
  })
  return (
    <div className="App">
      count: {count}
      json: {JSON.stringify(initialState)}
      json_updated: {JSON.stringify(_count)}
      <button onClick={()=>{
        setCount(count+1);
      }}>update count</button>
      <button onClick={()=>{
        dispatch({
          type:"increment",
          payload:2
        })
      }}>dispatch</button>
    </div>
  );
}

export default App;
