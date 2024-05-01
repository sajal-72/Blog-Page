import "./post.css"

const Post4 = () => {
  return (
    <div className="post">
    <div className="postinfo">
      <div className="postcat">By Oscar Leo</div>
      <div className="posttitle">The Programming Language That Every Developer Wants to Use</div>
      <p className="postdesc">
      Comparing patterns between growing, established, and declining programming languages</p>
      <div>
      <div className="postdate">Oct 2, 2023</div>
      <br />
        <i class="fa-regular fa-bookmark"></i>
      </div>
    </div>

    <img className="postimg" src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*H0CraIja5CdxIQQPcyl1GQ.jpeg" alt="" />
  </div>
  )
}

export default Post4
