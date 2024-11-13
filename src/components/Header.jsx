import { useContext } from "react";
import "../styles/header.css";
import WebContext from "../context/WebContext.jsx";
import { Link } from "react-router-dom";

const Header = () => {
  const {
    scrollAbout,
    scrollContact,
    scrollEvent,
    scrollGallery,
    scrollHome,
    scrollReview,
  } = useContext(WebContext);

  return (
    <div className="header">
      <div className="restaurant-name" onClick={scrollHome}>
        <img src="/restaurant-page/icons/rice.png" alt="restaurant-logo" />
        <p className="text-color">Rice & Spice</p>
        <img src="/restaurant-page/icons/pepper.png" alt="restaurant-logo" />
      </div>
      <div className="links">
        <span onClick={scrollHome}>Home</span>
        <span onClick={scrollAbout}>About us</span>
        <Link to="/menu" className="menu-link">
          <span>Menu</span>
        </Link>
        <span onClick={scrollGallery}>Gallery</span>
        <span onClick={scrollEvent}>Events</span>
        <span onClick={scrollReview}>Reviews</span>
        <span onClick={scrollContact}>Contact</span>
      </div>
      <Link to="/signup-page">
        <button className="sign-up">
          <span>Sign up</span>
        </button>
      </Link>
    </div>
  );
};

export default Header;
