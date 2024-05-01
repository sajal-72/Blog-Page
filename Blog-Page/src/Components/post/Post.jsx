import { Link } from "react-router-dom";
import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="postinfo">
        <div className="postcat">By Jon Waterhouse and Brendan Nystedt</div>
        <div className="posttitle"><Link style={{ textDecoration:'none'}} to="/post"><p>From a Certain Point of View: What Is the Best Scene in Star Wars: The Force Awakens?</p></Link></div>
        <p className="postdesc">
        In a film with daring escapes, dogfights, and lightsaber duels, it can be hard to pick a favorite moment. Two StarWars.com writers weigh in!
        </p>
        <div>
        <div className="postdate">June 17, 2016</div>
        <br />
          <i class="fa-regular fa-bookmark"></i>
        </div>
      </div>

      <img className="postimg" src="https://lumiere-a.akamaihd.net/v1/images/image_0de14dca.jpeg?region=0,670,1458,820&width=960" alt="" />
    </div>
  );
};

export default Post;
