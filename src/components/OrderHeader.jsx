import { useContext } from "react";
import "../styles/orderheader.css";
import TotalQuantityContext from "../context/TotalQuantityContext";
import { Link } from "react-router-dom";

const OrderHeader = () => {
  const { updateOrder } = useContext(TotalQuantityContext);

  return (
    <div className="order-header-section">
      <Link to={"/"} className="restaurant-name">
        <img src="/restaurant-page/menu-icons/rice.png" alt="restaurant-logo" />
        <p className="text-color">Rice & Spice</p>
        <img
          src="/restaurant-page/menu-icons/pepper.png"
          alt="restaurant-logo"
        />
      </Link>
      <div className="order-quantities">
        <span className="text-color title">Orders :</span>
        <span className="quantities">{updateOrder}</span>
        <span>item(s)</span>
      </div>
      <Link to="/menu">
        <button className="back-button">
          <span>Back to menu</span>
        </button>
      </Link>
    </div>
  );
};

export default OrderHeader;
