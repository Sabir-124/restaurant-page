import { useContext, useEffect, useRef, useState } from "react";
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

  const [rotation, setRotation] = useState(0);
  const sidebarRef = useRef(null);

  const rotate = () => {
    setRotation((prev) => (prev === 0 ? -360 : 0));
  };

  const handleClickOutside = (event) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      event.target.alt !== "menu-icon"
    ) {
      setRotation(0);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="header">
      <div className="main">
        <div className="option-section">
          <img
            src="/restaurant-page/icons/option-icon.png"
            alt="menu-icon"
            onClick={rotate}
            style={{ transform: `rotate(${rotation}deg)` }}
          />
        </div>
        <div
          className={`options ${rotation === -360 ? "slide" : ""}`}
          ref={sidebarRef}
        >
          <span onClick={scrollHome}>Home</span>
          <span onClick={scrollAbout}>About us</span>
          <Link to="/menu" className="side-menu">
            <span>Menu</span>
          </Link>
          <span onClick={scrollGallery}>Gallery</span>
          <span onClick={scrollEvent}>Events</span>
          <span onClick={scrollReview}>Reviews</span>
          <span onClick={scrollContact}>Contact</span>
        </div>
        <div className="restaurant-name" onClick={scrollHome}>
          <img src="/restaurant-page/icons/rice.png" alt="restaurant-logo" />
          <p className="text-color">Rice & Spice</p>
          <img src="/restaurant-page/icons/pepper.png" alt="restaurant-logo" />
        </div>
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
