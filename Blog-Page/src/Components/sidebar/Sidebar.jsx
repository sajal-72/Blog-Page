import "./sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
    <span className="sidebaritem">
      <span className="sidebartitle">
          Discover more of what matters to you
      </span>
      <div className="box">
          <button className="bt">Programming</button>
          <button className="bt">Technology</button>
          <button className="bt">Cinema</button>
          <button className="bt">Music</button>
          <button className="bt">Sports</button>
          <button className="bt">Productivity</button>
          <button className="bt">Relationships</button>
          <button className="bt">Health</button>
          
          <button className="bt1">See More Topics</button>
      </div>
    </span>
  </div>
  )
}

export default Sidebar
