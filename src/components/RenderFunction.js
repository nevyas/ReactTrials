import React, { Component } from 'react'

class RenderFunction extends Component {
    render() {
        return (
            <div>
                {this.props.name(false)}
            </div>
        )
    }
}

export default RenderFunction
