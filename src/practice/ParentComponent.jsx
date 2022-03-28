import React, { Component } from 'react'

//include childComponent 
import ChildComponent from './ChildComponent';

export class ParentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parentName: 'I am Parent',
            //childName: 'I am child'
        }

        //bind greetParent method as we have used this keyword in greetParent()
        this.greetParent = this.greetParent.bind(this);
        this.greetChild = this.greetChild.bind(this);
    }

    greetParent() {
        alert(`Hello ${this.state.parentName}`)
    }

    greetChild(childName) {
        alert(`${this.state.parentName} called by child  ${childName}`)
    }
 
    render() {
        return (
            <div>

                {/* Passing greetParent function as prop: props are function arguments */}
                <ChildComponent parentHandler={this.greetParent}
                                childHandler={this.greetChild} 
                />
            </div>
        )
    }
}

export default ParentComponent