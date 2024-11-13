import OrderHeader from "./OrderHeader";
import Orders from "./Orders";
import Payments from "./Payment";
import "../styles/orderpage.css";
import ScrollTop from "./ScrollTop.jsx";
import { useContext } from "react";
import TotalQuantityContext from "../context/TotalQuantityContext.jsx";
import NoOrder from "./NoOrder.jsx";

const OrderPage = () => {
  const { updateOrder } = useContext(TotalQuantityContext);

  return (
    <>
      <ScrollTop></ScrollTop>
      <div className="orderpage-section">
        <OrderHeader />
        {updateOrder === 0 ? (
          <NoOrder />
        ) : (
          <div className="body">
            <Orders />
            <Payments />
          </div>
        )}
      </div>
    </>
  );
};

export default OrderPage;
