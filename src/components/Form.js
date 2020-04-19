import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            comments: '',
            Option:''
        }
    }

    handleruserNameCHange=(event)=>{
        this.setState({
                username: event.target.value
        })
    }

        handlerComments=(event)=>{
            this.setState({
                comments: event.target.value
            })

    }
    
    handleoption=(event)=>{
        this.setState({
            Option: event.target.value
        })
    }
    handlesubmit=(event)=>{
        alert(`${this.state.username}  ${this.state.Option}  ${this.state.comments}`)
        event.preventDefault()
        
    }
    render() {
        return (
            <form onSubmit={this.handlesubmit}>
            <div>
                <label>UserName</label>
                <input type ="text" value={this.state.username} onChange={this.handleruserNameCHange}></input>
                </div>
            <div>
               <label>Comments</label>
            <textarea type ="text" value={this.state.comments} onChange={this.handlerComments}></textarea>
            </div>
            <div>
                <select value={this.state.Option} onChange={this.handleoption}>
                    <option value='Angular'>Angular</option>
                    <option value='React'>React</option>
                    <option value='Vue'>Vue</option>
                </select>
            </div>
<div><button type = "submit">Submit</button></div>
            </form>
        )
    }
}

export default Form
