import React, { Component } from 'react'

class Conditional extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loggedin: false
        }
    }
    render() {

        if (this.state.loggedin) {
            return <div>hello LoggedinUser</div>
        } else {
            return <div>hello Guest</div>
        }
        // <div>
        //     Hello Dear!!
        // </div>

    }
}

export default Conditional
