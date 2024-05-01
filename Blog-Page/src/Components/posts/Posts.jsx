import Post from "../post/Post"
import Post1 from "../post/Post1"
import Post2 from "../post/Post2"
import Post3 from "../post/Post3"
import Post4 from "../post/Post4"
import "./posts.css"

const Posts = () => {
  return (
    <div className="posts">
     <Post/>
     <Post2/>
     <Post1/>
     <Post3/>
     <Post4/>
      <button className="btn">See More...</button>
    </div>
  )
}

export default Posts
