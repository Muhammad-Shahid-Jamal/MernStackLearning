import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          message:"Welcome to my world"
      }

      //approach 4
      //bind greetParent method as we have used this keyword in clickHandler()
      //this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler = () => {
        this.setState({
            message:"Good and thanks for visit"
        })
    }

  render() {
    return (
      <div> {this.state.message}
          {/* approach 1 :: Bind Event Handler*/}
          {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

          {/* approach 2 :: Bind Event Handler*/}
          {/* <button onClick={() => this.clickHandler()}>Click</button> */}
          
          {/* approach 3 :: Bind Event Handler*/}
          <button onClick={this.clickHandler}> Click</button>
      </div>
    )
  }
}

export default EventBind