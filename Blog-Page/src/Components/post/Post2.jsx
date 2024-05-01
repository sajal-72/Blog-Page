import { Link } from "react-router-dom"
import "./post.css"

const Post2 = () => {
  return (
    <div className="post">
    <div className="postinfo">
      <div className="postcat">By Rose Harmon</div>
      <div className="posttitle"><Link style={{ textDecoration:'none'}} to="/post1"><p>Tom Odell and His Rise to Fame</p></Link></div>
      <p className="postdesc">
      Tom Odell is one of the most successful British artists of the twentieth century and is one of the iconic ushers of Indie pop into modern culture.</p>
      <div>
      <div className="postdate">Nov 3, 2020</div>
      <br />
        <i class="fa-regular fa-bookmark"></i>
      </div>
    </div>

    <img className="postimg" src="https://miro.medium.com/v2/resize:fit:640/0*1M0yi6SRbhf6JZ0z" alt="" />
  </div>
  )
}

export default Post2
