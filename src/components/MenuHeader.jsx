import { useContext } from "react";
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

  const { updateOrder } = useContext(TotalQuantityContext);

  return (
    <div className="menu-header-section">
      <Link to={"/"} className="restaurant-name">
        <img src="/restaurant-page/menu-icons/rice.png" alt="restaurant-logo" />
        <p className="text-color">Rice & Spice</p>
        <img
          src="/restaurant-page/menu-icons/pepper.png"
          alt="restaurant-logo"
        />
      </Link>
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
            <span>Your Orders</span>
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
