import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Count: 0
        }
    }

    Increment() {
        // this.setState({
        //     Count: this.state.Count + 1
        // },
        // ()=>{
        //     console.log('Callback Value',this.state.Count)
        // }
        // )
        this.setState((prevState) => ({
            Count: prevState.Count + 1
        }))
        console.log(this.state.Count)
    }

    IncrementAll() {
        this.Increment();
        this.Increment();
        this.Increment();
        this.Increment();
        this.Increment();

    }

    render() {
        return (
            <div>
                <div><h1>  Count  - {this.state.Count} </h1></div>
                <button onClick={() => this.IncrementAll()}>Increment </button>
            </div>
        )
        // return <h1> {this.state.message} </h1>
    }
}
export default Counter

