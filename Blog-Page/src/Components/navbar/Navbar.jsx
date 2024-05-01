import { Link } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
  return (
    <>
    <div className='nav'>
      <Link style={{textDecoration:'none'}}  to={'/'}><div className="logo" ><h1>BlogSphereX</h1></div></Link>
      <div className="center">
        <ul>
            <li>About Us</li>
            <li>Membership</li>
            <li><Link  style={{textDecoration:'none', color:'black'}}  to="/write">Write</Link></li>
            <li><Link  style={{textDecoration:'none', color:'black'}}  to="/login1">Login</Link></li>
            <li><Link style={{textDecoration:'none'}} to="/login"><button className="but">Get Started</button></Link></li>
        </ul>
      </div>
      <div className="side">
        <ul>
        <a href="https://github.com"><li className="git"><i class="fa-brands fa-github"></i></li></a>
        <a href="https://pinterest.com"><li className="pint"><i class="fa-brands fa-pinterest"></i></li></a>
        <a href="https://instagram.com"><li className="ins"><i class="fa-brands fa-instagram"></i></li></a>
        <a href="https://linkedin.com"><li className="link"><i class="fa-brands fa-linkedin"></i></li></a>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Navbar
