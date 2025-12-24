import React from "react";

const withCounter = (WrappedComponent,incNum) => {
    class WithCounter extends React.Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
          incrementCount = () => {
            this.setState(prevState => {
                return {count:prevState.count+incNum}
            })
          }
        render(){
            return <WrappedComponent name="Vjay" count={this.state.count} incrementCount={this.incrementCount} {... this.props}/>
        }
    }
    return WithCounter
}

export default withCounter 