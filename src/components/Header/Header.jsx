import logo from "../../assets/logo/BrainFlix-logo.svg";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";
import "./Header.scss";

const Header = () => {
  return (
    <nav className="nav">
      {/* add a brainflix logo */}
      <img src={logo} alt="Brainflix logo" className="nav__logo" />

      {/* add a search input box */}
      <div className="nav__search">
        <input
          type="text"
          placeholder="Search"
          className="nav__search-box"
        ></input>
        <img src={userAvatar} alt="User avatar" className="nav__user-avatar" />
        {/* a upload button */}
        <button className="nav__upload-button">UPLOAD</button>
      </div>
    </nav>
  );
};

export default Header;
