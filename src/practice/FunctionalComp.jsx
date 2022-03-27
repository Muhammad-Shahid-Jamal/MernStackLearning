import React from 'react';
import PropTypes from "prop-types";

// function Greet() {
//     return <div>
//         <h1>Hello Zeeshan !</h1>
//     </div>
// }
//OR

//writing Greet Function using arrow function
//=========================================
/*
 const Greet = () =>  {
    return <div>
            <h1>Hello Boy</h1>
         </div>
}
*/  
//=========================================

//Calling Prop as function
//=========================================
const Greet = props => {
    return (
        <div>
            <h1>Hello  {props.name} aka {props.departmentName}</h1>             
        </div>
    )
}

Greet.propTypes = {
    name:PropTypes.string.isRequired 
};

Greet.propTypes = {
    departmentName:PropTypes.string.isRequired 
};

export default Greet