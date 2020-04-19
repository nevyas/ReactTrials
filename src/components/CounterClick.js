import React, { Component } from 'react'
import UpdatedComponent from './UpdateComponent'

export class CounterClick extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState(prevstate => {
            return { count: prevstate.count + 1 }
        })

    }

    //   incrementCount = () => {
    //     this.setState(this.state=this.state+1)

    // }


render() {
    const { count } = this.state
return (<button onClick={this.incrementCount}>{this.props.name} Clicked {count} me!</button>)
}
}

export default UpdatedComponent(CounterClick)
