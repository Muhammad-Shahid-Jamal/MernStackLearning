import React from 'react'

function ChildComponent(props) {


  return (
    <div>
        {/* we are calling prop, written in a parent component 
        from a button in a child component by passing the method 
        as props to the child component */}
        <button onClick={props.parentHandler}>Greet Parent</button>

        {/* we are calling method, written in a parent component 
        from a button in a child component using props */}
        <button onClick={()=> props.childHandler('Zeeshan Azim')}>Greet Child</button>
    </div>
  )
}

export default ChildComponent