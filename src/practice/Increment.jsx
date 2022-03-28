import React, { Component } from 'react'

//When you will use export keyword with class definition
// then you will refer with curly braces { } in parent component
class Increment extends Component {

    //rconst snippet
    constructor(props) {
        super(props)

        //initialize count value by 0
        this.state = {
            count: 0
        }
    }

    clickMe(){
        
        //increment count value by 1 withint this.state function
        // this.setState({
        //     count:  this.state.count + 1 // add 1 in current state
        // }, ()=> console.log('callback value' , this.state.count))         
        // console.log(this.state.count);

        //how to get previous state
        this.setState((prevStateValue, props)=>({
            count:  prevStateValue.count + parseInt(props.addValue)
        }))
        console.log(this.state.count)
    }

    render() {
        return (
            <div>
                {this.state.count}

                <button onClick={() => this.clickMe()}>Increment</button>
            </div>
        )
    }
}

//when you will use export default Increment 
//then you will refer with curly braces
export default Increment;
