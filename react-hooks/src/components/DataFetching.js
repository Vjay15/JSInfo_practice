import React,{useState,useEffect} from 'react'
import axios from 'axios'
function DataFetching() {
  const [post,setPost] = useState({})
  const [id,setId] = useState(0)
  const [idFromButtonClick,setIdFromButtonClick] = useState(1)
  const clickHandler = () => {
    setIdFromButtonClick(id)
  }
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
    .then(res => {
        console.log(res.data)
        setPost(res.data)
    })
    .catch(err => {
        console.log(err)
    })
  },[idFromButtonClick])
  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)}></input>
        <button type='submit' onClick={clickHandler}>Fetch Post</button>
        <ul>
            {
                <li>{post.title}</li>
            }
        </ul>
    </div>
  )
}

export default DataFetching