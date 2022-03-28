const GuestGreeting = ({login})=>{
    return (
        <>
            <h1>Guest greeting</h1>
            <button onClick={login}>Login</button>
        </>
    )
};

export default GuestGreeting;