import { createContext, useContext, useReducer, useState } from "react";
import TotalQuantityContext from "./TotalQuantityContext";

const OrderContext = createContext({
  orders: [],
  addOrder: () => {},
  updateOrder: () => {},
  deleteOrder: () => {},
  totalPrice: 0,
});

const orderReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ORDER":
      return [...state, action.payload];
    case "UPDATE_ORDER":
      return state.map((order, index) =>
        index === action.payload.index
          ? { ...order, ...action.payload.updatedOrder }
          : order
      );
    case "DELETE_ORDER":
      return state.filter((_, index) => index !== action.payload.index);
    default:
      return state;
  }
};

function OrderProvider({ children }) {
  const [orders, dispatch] = useReducer(orderReducer, []);
  const { setUpdateOrder } = useContext(TotalQuantityContext);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalQuantity = (orders) => {
    return orders.reduce((sum, order) => sum + order.quantity, 0);
  };

  const addOrder = (order) => {
    dispatch({ type: "ADD_ORDER", payload: order });
    const updatedOrders = [...orders, order];
    setUpdateOrder(calculateTotalQuantity(updatedOrders));

    const priceForThisOrder = order.price * order.quantity;
    setTotalPrice((prevTotal) => prevTotal + priceForThisOrder);
  };

  const updateOrder = (index, updatedOrder) => {
    dispatch({ type: "UPDATE_ORDER", payload: { index, updatedOrder } });
    const previousOrder = orders[index];
    const updatedOrders = orders.map((order, idx) =>
      idx === index ? { ...order, ...updatedOrder } : order
    );
    setUpdateOrder(calculateTotalQuantity(updatedOrders));

    const newPrice = updatedOrder.price * updatedOrder.quantity;
    const priceDifference =
      newPrice - previousOrder.price * previousOrder.quantity;
    setTotalPrice((prevTotal) => prevTotal + priceDifference);
  };

  const deleteOrder = (index) => {
    dispatch({ type: "DELETE_ORDER", payload: { index } });
    const orderToRemove = orders[index];
    const updatedOrders = orders.filter((_, idx) => idx !== index);
    setUpdateOrder(calculateTotalQuantity(updatedOrders));
    setTotalPrice(
      (prevTotal) => prevTotal - orderToRemove.price * orderToRemove.quantity
    );
  };

  return (
    <OrderContext.Provider
      value={{ orders, addOrder, updateOrder, deleteOrder, totalPrice }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export { OrderProvider };
export default OrderContext;
