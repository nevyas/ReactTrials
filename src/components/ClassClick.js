import React, { Component } from 'react'

class ClassClick extends Component {
    ClickHandler(){
        console.log("Button is Clicked")
    }
    render() {
        return (
            <div>
                <button onClick={this.ClickHandler}> Click Me!!</button>
            </div>
        )
    }
}
export default ClassClick

