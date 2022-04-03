const main = document.getElementById("main");
const {useState} = React;
const App = ()=>{
    const [title,setTitle] = useState("Hi Title");
    return(
        <div>
            <h1>{title}</h1>
            <button onClick={()=>setTitle("Title change")}>click me</button>
        </div>
    )
};
ReactDOM.render(<App/>,main);
