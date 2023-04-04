import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <img
        className="company-logo"
        src={LOGO_URL}
      ></img>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
