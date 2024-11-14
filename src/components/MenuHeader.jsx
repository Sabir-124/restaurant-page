import { useContext, useState, useEffect, useRef } from "react";
import "../styles/menuheader.css";
import MenuContext from "../context/MenuContext";
import { Link, useNavigate } from "react-router-dom";
import TotalQuantityContext from "../context/TotalQuantityContext";

const MenuHeader = () => {
  const {
    scrollMenuHome,
    scrollRice,
    scrollKebab,
    scrollIceCream,
    scrollTea,
    scrollCoffee,
    scrollJuice,
  } = useContext(MenuContext);

  const navigate = useNavigate();

  const seeOrders = () => {
    navigate("/order-page");
  };

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

  const { updateOrder } = useContext(TotalQuantityContext);

  return (
    <div className="menu-header-section">
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
          className={`menu-options ${rotation === -360 ? "slide" : ""}`}
          ref={sidebarRef}
        >
          <span onClick={scrollMenuHome} className="home-menu-side">
            Home
          </span>
          <span onClick={scrollRice}>Rice Selection</span>
          <span onClick={scrollKebab}>Kebabs</span>
          <span onClick={scrollIceCream}>Ice-cream</span>
          <span onClick={scrollTea}>Tea</span>
          <span onClick={scrollCoffee}>Coffee</span>
          <span onClick={scrollJuice}>Juice</span>
        </div>
        <Link to={'/'} className="restaurant-name">
          <img src="/restaurant-page/icons/rice.png" alt="restaurant-logo" />
          <p className="text-color">Rice & Spice</p>
          <img src="/restaurant-page/icons/pepper.png" alt="restaurant-logo" />
        </Link>
      </div>
      <div className="links">
        <span onClick={scrollMenuHome} className="home-menu">
          Home
        </span>
        <span onClick={scrollRice}>Rice Selection</span>
        <span onClick={scrollKebab}>Kebabs</span>
        <span onClick={scrollIceCream}>Ice-cream</span>
        <span onClick={scrollTea}>Tea</span>
        <span onClick={scrollCoffee}>Coffee</span>
        <span onClick={scrollJuice}>Juice</span>
      </div>
      <div className="button-section">
        <div className="button" onClick={seeOrders}>
          <button className="show-order-button">
            <span>Orders</span>
          </button>
        </div>
        <div className={updateOrder === 0 ? "hide" : "order-quantity"}>
          <span>{updateOrder}</span>
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;
