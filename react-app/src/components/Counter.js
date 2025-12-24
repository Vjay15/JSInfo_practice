import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      count:0
    }
  }
  increment(){
    // this.setState({   // its an async call, can have a callback
    //   count: this.state.count + 1
    // })
    this.setState(prevState => ({   // always use previous state dont use current state
      count:prevState.count + 1
    }))
  }
  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick= {() => this.increment()}>Increment</button>
      </div>
    )
  }
}

export default Counter