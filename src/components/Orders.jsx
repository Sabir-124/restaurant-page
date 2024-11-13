import React, { useContext, useEffect, useRef } from "react";
import "../styles/orders.css";
import TotalQuantityContext from "../context/TotalQuantityContext";
import OrderContext from "../context/OrderContext";

const Orders = () => {
  const { orders, updateOrder, deleteOrder } = useContext(OrderContext);
  const { setUpdateOrder } = useContext(TotalQuantityContext);
  const quantityRefs = useRef(orders.map(() => React.createRef()));

  useEffect(() => {
    const totalQuantity = orders.reduce(
      (sum, order) => sum + Number(order.quantity),
      0
    );
    setUpdateOrder(totalQuantity);
  }, [orders, setUpdateOrder]);

  const toggleUpdate = (index) => {
    const order = orders[index];
    const updatedOrder = { ...order, update: !order.update };
    updateOrder(index, updatedOrder);
  };

  const handleDeleteOrder = (index) => {
    deleteOrder(index);
  };

  const handleSetOrder = (index) => {
    const newQuantity = Number(quantityRefs.current[index].current.value);
    const order = orders[index];
    if (newQuantity < 1 || isNaN(newQuantity)) {
      updateOrder(index, { ...order, onMessage: true });
    } else {
      updateOrder(index, {
        ...order,
        quantity: newQuantity,
        update: false,
        onMessage: false,
      });
    }
  };

  return (
    <div className="order-section">
      {orders.map((order, index) => (
        <div className="each-order" key={index}>
          <div className="order-image">
            <img src={order.image} alt="Order" />
          </div>
          <div className="order-info">
            <p className="text-color order-name">{order.name}</p>{" "}
            <p className="Price">Price : {order.price}</p>{" "}
            <div className="quantity-updater">
              <div>
                {order.update ? (
                  <input
                    className="input"
                    ref={quantityRefs.current[index]}
                    defaultValue={order.quantity}
                  />
                ) : (
                  <div>
                    <span className="orderQuantity">Quantity :</span>
                    <span className="orderQuantity"> {order.quantity}</span>
                  </div>
                )}
              </div>
              <div>
                {!order.update ? (
                  <div>
                    <button
                      onClick={() => toggleUpdate(index)}
                      className="update"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDeleteOrder(index)}
                      className="delete"
                    >
                      Delete
                    </button>
                  </div>
                ) : (
                  <div>
                    <button
                      onClick={() => handleSetOrder(index)}
                      className="save"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => toggleUpdate(index)}
                      className="cancel"
                    >
                      Cancel
                    </button>
                    <span
                      className={order.onMessage ? "on-message" : "off-message"}
                    >
                      Please enter valid quantity!
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
