import { NavLink } from "react-router-dom";
import "./navbar.css";
import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MovieManiac</h1>
      <div className="navbar_links">
        <NavLink to="/" className="">
          Popular <img src={Fire} alt="Fire_emoji" className="navbar_emoji" />
        </NavLink>
        <NavLink to="/top_rated" className="">
          Top Rated <img src={Star} alt="Star_emoji" className="navbar_emoji" />
        </NavLink>
        <NavLink to="/upcoming" className="">
          Upcoming
          <img src={Party} alt="Party_emoji" className="navbar_emoji" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
