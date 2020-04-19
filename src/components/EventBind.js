import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "Hello"
        }
    }

    // ClickHandler(){
    //     this.setState({
    //         message:"Yayie on UI"
    //     })
    //     console.log("Button is clicked!")
    // }

    ClickHandler = () => {
        this.setState({
            message: "Yayiee on UI"
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.ClickHandler.bind(this)}>Click for Binding</button> */}
                <button onClick={this.ClickHandler} > Click for Binding</button>
            </div>
        )
    }

}

export default EventBind