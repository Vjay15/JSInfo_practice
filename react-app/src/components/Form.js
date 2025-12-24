import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username:''
    }
  }
  handlerUserNameChange = (event) => {
    this.setState({
        username: event.target.value
    })
  }
  handleSubmit = (event) => {
    alert(`Welcome ${this.state.username}`)
    event.preventDefault();
  }
  render() {
    return (
    <form onSubmit={this.handleSubmit}>
        <div>
            <label>Username</label>
            <input type='text' value={this.state.username} onChange={this.handlerUserNameChange}></input>
            <button type="submit">Submit</button>
        </div>
    </form>
    )
  }
}

export default Form