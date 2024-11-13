import { useContext } from "react";
import "../styles/payments.css";
import TotalQuantityContext from "../context/TotalQuantityContext";
import OrderContext from "../context/OrderContext";

const Payments = () => {
  const { updateOrder } = useContext(TotalQuantityContext);
  const { totalPrice } = useContext(OrderContext);

  let discountPercent = 0;
  let discountAmount = 0;
  let PriceAfterDiscount = totalPrice + 30;

  if (totalPrice >= 2000) {
    discountPercent = 10;
  } else if (totalPrice >= 1000) {
    discountPercent = 5;
  }

  if (discountPercent > 0) {
    discountAmount = Math.floor((discountPercent * totalPrice) / 100);
    PriceAfterDiscount -= discountAmount;
  }

  return (
    <div className="payment">
      <div className="adress-section">
        <textarea
          rows={4}
          placeholder="Write your address here . . ."
        ></textarea>
      </div>
      <div className="payment-section">
        <p className="text-color">Order Summary</p>
        <div className="order-summary">
          <span>Orders ( {updateOrder} ) : </span>
          <span>Rs. {totalPrice}/-</span>
        </div>
        <div className="delivery-summary">
          <span>Delivery charges :</span>
          <span>Rs. {totalPrice > 0 ? 30 : 0}/-</span>
        </div>
        <div className="discount-summary">
          <span>Discounts ({discountPercent}%) :</span>
          <span>Rs. {discountAmount}/-</span>
        </div>
        <div className="total-summary">
          <span>Total :</span>
          <span>Rs. {PriceAfterDiscount}/-</span>
        </div>
      </div>
      <button>Order</button>
    </div>
  );
};

export default Payments;
