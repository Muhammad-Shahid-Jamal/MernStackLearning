import React, { Component } from 'react'


export class Welcome extends Component {
    constructor() {
        super();
        this.state = {
            message: "Welcome to Class Component"
        }
    }

    changeMessage() {
        this.setState({
            message: "I do work in OETC"
        })
    }

    // changeMessage = () => {
    //     this.setState({
    //         message: "I do work in OETC"
    //     })
    // }

    render() {
        return (
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <h1>Hello {this.props.name} earning {this.props.salary}</h1>

                {<button onClick={() => this.changeMessage()}>Click Me</button>}
            </div>
        )
    }
}
