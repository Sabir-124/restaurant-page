import React, { useContext, useEffect, useRef, useState } from "react";
import "../styles/orders.css";
import TotalQuantityContext from "../context/TotalQuantityContext";
import OrderContext from "../context/OrderContext";

const Orders = () => {
  const { orders, updateOrder, deleteOrder } = useContext(OrderContext);
  const { setUpdateOrder } = useContext(TotalQuantityContext);
  const quantityRefs = useRef(orders.map(() => React.createRef()));
  const [editQuantities, setEditQuantities] = useState(
    orders.map((order) => order.quantity)
  );

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

  const handleQuantityChange = (index, event) => {
    const newQuantity = event.target.value;
    if (/^\d*$/.test(newQuantity) || newQuantity === "") {
      // Update the temporary edit quantity
      const updatedEditQuantities = [...editQuantities];
      updatedEditQuantities[index] = newQuantity === "" ? "" : Number(newQuantity);
      setEditQuantities(updatedEditQuantities);
    }  
  };

  const handleKeyPress = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  }

  const handleSetOrder = (index) => {
    const order = orders[index];
    const updatedOrder = { 
      ...order, 
      quantity: editQuantities[index], 
      update: false 
    };
    updateOrder(index, updatedOrder);
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
                    value={editQuantities[index]}
                    type="number"
                    min="1"
                    onChange={(e) => handleQuantityChange(index, e)}
                    onKeyPress={handleKeyPress}
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
                  <div className="update-section">
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
