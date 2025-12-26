import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts:[],
       errors:''
    }
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
       this.setState({posts:response.data}) 
    })
    .catch(error => {
        this.setState({errors:"Error fetching list of posts"})
    })
  }
  render() {
    const {posts,errors} = this.state;
    return (
      <div>
        {
            posts.length?
            posts.map(post => <div key={post.id}>{post.title}</div>):
            null
        }
        { errors ? <div>{errors}</div>: null}
      </div>

    )
  }
}

export default PostList