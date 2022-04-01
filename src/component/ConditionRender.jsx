import React, { Component } from 'react'

class ConditionRender extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    render() {

        //approach 01:
        //=======================
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>Welcome inside the portal</div>
        //     )
        // }
        // else {
        //     return (
        //         <div>Please Login</div>
        //     )
        // }
        //=======================

        //approach 02:
        //=======================
        // let message // message is the variable which stores the element to be rendered 
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome inside the portal</div>
        // }
        // else {
        //     message = <div>Please Login</div>
        // }
        // return {message};
        //=======================

        //approach 03: Ternary Operator approach
        //=======================        
        // return this.state.isLoggedIn ? 
        // (<div>Welcome inside the portal</div>) : (<div>Please Login</div>)            
        //=======================
        
        //approach 04: short circuit operator approach
        //=======================        
        return this.state.isLoggedIn &&
        (<div>Welcome inside the portal</div>)           
        //=======================
        
        // return (
        //   <div>
        //       <div>Welcome inside the portal</div>
        //       <div>Please Login</div>
        //   </div>
        // )
    }
}

export default ConditionRender