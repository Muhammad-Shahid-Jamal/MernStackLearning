

//program to update Value using useState
import React, { useState } from 'react'

function UpdateName() {
    const [phrase, setphrase] = useState('Welcome to the Programming World')

    function UpdateName() {
        setphrase('Good Bye and Have a nice day')
    }
    return (
        <div>
            <h1>{phrase}</h1>
            {/* Call by function name */}
            <button onClick={() =>UpdateName()}> Update by function </button>
            
            {/* OR calling directly by state name */}
            <button onClick={() =>setphrase('Good By and Have a nice day')}> Update by state name</button>
        </div>
    )
}



export default UpdateName