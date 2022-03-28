const Greeting = ({logout})=>{
    return (
        <>
            <h1>Welcome back!</h1>
            <button onClick={logout}>logout</button>
        </>
    )
};

export default Greeting;