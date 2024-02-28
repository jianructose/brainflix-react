import logo from "../../assets/logo/BrainFlix-logo.svg";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav">
      {/* add a brainflix logo */}
      <NavLink to="/" className="nav__home-link">
        <img src={logo} alt="Brainflix logo" className="nav__logo" />
      </NavLink>
      {/* <img src={logo} alt="Brainflix logo" className="nav__logo" /> */}

      {/* add a search input box */}
      <div className="nav__search">
        <input
          type="text"
          placeholder="Search"
          className="nav__search-box"
        ></input>
        <img src={userAvatar} alt="User avatar" className="nav__user-avatar" />

        {/* a upload button */}
        <NavLink to="/upload" className="nav__upload-button">
          UPLOAD
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
