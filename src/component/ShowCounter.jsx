
//program to show Counter using useState
import React, { useState } from 'react'


function ShowCounter() {
    const [count, setCount] = useState(1)

    function updateCounter() {
        setCount(count+1)
    }
    return (
        <div>
           {`Counter Value:  ${count}`}
             
            <button onClick={()=>updateCounter()}> Update</button>
        </div>
    )
}

export default ShowCounter