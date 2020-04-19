import React, { Component } from 'react'

 class CounterRender extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    IncrementCount=()=>{
        this.setState(prevState=>{
            return{count: prevState.count+1}
        })
    }
    
    render() {
        const {count} = this.state
        return (<h1 onMouseOver={this.IncrementCount}> Click {count} times !</h1> )
    }
}

export default CounterRender
