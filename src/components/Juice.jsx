import { useContext, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MenuContext from "../context/MenuContext";
import OrderContext from "../context/OrderContext";

const Juice = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 699 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 698, min: 0 },
      items: 1,
    },
  };

  const Juice = [
    ["/restaurant-page/juice/apple.jpeg", "Apple", "150"],
    ["/restaurant-page/juice/banana.jpeg", "Banana", "150"],
    ["/restaurant-page/juice/lemon.jpeg", "Lemon", "150"],
    ["/restaurant-page/juice/carrot.jpeg", "Carrot", "150"],
    ["/restaurant-page/juice/mango.jpeg", "Mango", "200"],
    ["/restaurant-page/juice/orange.jpeg", "Orange", "200"],
    ["/restaurant-page/juice/strawberry.jpeg", "Strawberry", "200"],
  ];

  const { juice } = useContext(MenuContext);
  const [autoPlay, setAutoPlay] = useState(true);
  const { orders, addOrder, updateOrder } = useContext(OrderContext);

  const [quantities, setQuantities] = useState(Juice.map(() => 1));

  const setPlay = () => {
    setAutoPlay((prev) => !prev);
  };

  const handleQuantityChange = (index, value) => {
    const quantity = Math.max(1, Number(value) || 1);
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] = quantity;
      return newQuantities;
    });
  };

  const addToOrder = (juice, index) => {
    const quantity = quantities[index];

    const existingOrder = orders.findIndex((order) => order.name === juice[1]);

    if (existingOrder !== -1) {
      const updatedOrder = {
        ...orders[existingOrder],
        quantity: orders[existingOrder].quantity + quantity,
      };
      updateOrder(existingOrder, updatedOrder);
    } else {
      const order = {
        image: juice[0],
        name: juice[1],
        price: juice[2],
        quantity: quantity,
      };

      addOrder(order);
    }
  };

  return (
    <>
      <div ref={juice}></div>
      <div className="rice-selection-section">
        <div className="gallery-header headings text-color">Juice</div>
        <div className="scroll-control-button">
          <button onClick={setPlay}>
            {autoPlay ? "Stop Scroll" : "Scroll"}
          </button>
        </div>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={autoPlay}
          autoPlaySpeed={3000}
          className="recipes"
        >
          {Object.values(Juice).map((juice, index) => (
            <div className="recipe" key={juice[1]}>
              <div className="recipe-image">
                <img src={juice[0]} alt="recipe-pic" />
              </div>
              <div className="recipe-info">
                <div className="recipe-name text-color">
                  <p>{juice[1]}</p>
                </div>
                <div className="price1">
                  <span>Price </span>
                  <span>Rs.{juice[2]}/-</span>
                </div>
                <div className="recipe-order">
                  <input
                    placeholder="Enter the quantity"
                    value={quantities[index]}
                    onChange={(e) =>
                      handleQuantityChange(index, e.target.value)
                    }
                    type="number"
                    min="1"
                  />
                  <button onClick={() => addToOrder(juice, index)}>
                    Add to order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Juice;
