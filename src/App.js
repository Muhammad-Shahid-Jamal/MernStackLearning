import { useState } from "react";
import Greeting from "./component/Greeting";
import GuestGreeting from "./component/GuestGreeting";

function App() {
  const [isLogin,setLogin] = useState(false);
  return (
    <div className="App">
      {isLogin?<Greeting logout={()=>{setLogin(false)}}/>:<GuestGreeting login={()=>{setLogin(true)}}/>}
      {isLogin && <h2>Shahid</h2>}
    </div>
  );
}

export default App;
