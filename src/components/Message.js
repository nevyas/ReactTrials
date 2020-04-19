import React, { Component } from 'react'

class Message extends Component {
    constructor(){
        super()
        this.state ={
            message:'Namaste Corona!!'
        }
    }

    changeMessage(){
        this.setState({
            message:'Yippie We are free Now!!'
        })
    }

    render() {
        return (
            <div>
                <h1> {this.state.message} </h1>
                <button onClick={()=> this.changeMessage()}>Kill </button>
            </div>
        )
        // return <h1> {this.state.message} </h1>
    }
}
export default Message

