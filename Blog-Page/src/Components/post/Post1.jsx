import "./post.css"

const Post1 = () => {
  return (
    <div className="post">
      <div className="postinfo">
        <div className="postcat">By Allen Helton</div>
        <div className="posttitle">ChatGPT Changed How I Write Software</div>
        <p className="postdesc">
        Generative AI has completely changed the way I approach software design. I don’t think I could ever go back.
        </p>
        <div>
        <div className="postdate">June 1, 2023</div>
        <br />
          <i class="fa-regular fa-bookmark"></i>
        </div>
      </div>

      <img className="postimg" src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*3OsUtsnlTx9Svm4c.jpg" alt="" />
    </div>
  )
}

export default Post1
