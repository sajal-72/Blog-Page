
import "./write.css"

const Write = () => {
  
  return (
    <div className="write">
     <img className="writeimg" src="https://cdn.dribbble.com/users/13449/screenshots/1828176/attachments/304147/Lakeside_Sunset_1920x1080.jpg" alt="" />
      <form className="writeform">
        <div className="writeformgroup">
          <label htmlFor="fileinput">
          <i class="writeicon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileinput" style={{display:"none"}} />
          <input type="text" placeholder="Title" className="writeinput" autoFocus={true}/>
        </div>
        <div className="writeformgroup">
          <textarea placeholder="Tell Your Story..." type="text" className="writeinput writetext"></textarea>
        </div>
        <button className="writesubmit">Publish</button>
      </form>
    </div>
  )
}

export default Write
