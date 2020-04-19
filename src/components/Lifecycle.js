import React, { Component } from 'react'

 class Lifecycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Neha'
        }
        console.log('Lifyclecle Constructor')
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('Lifecycle GetDerivedStateFromProps')
        return null
    
    }

    componentDidMount()
{
    console.log('Lifecycle componentDidMount')
}    

render() {
    console.log('Lifecycle REnder')
        return (

            <div>
                LifeCYcle Understanding
            </div>
        )
    }
}

export default Lifecycle
