import React, { useContext, useState } from "react";
import "../styles/kebabs.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MenuContext from "../context/MenuContext";
import OrderContext from "../context/OrderContext";

const Kebabs = () => {
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

  const Kebabs = [
    ["/restaurant-page/menu-images/chicken.jpeg", "Chicken kebab", 300],
    ["/restaurant-page/menu-images/chapli.jpeg", "Chapli kebab", 230],
    ["/restaurant-page/menu-images/thikka.jpeg", "Thika kebab", 300],
    ["/restaurant-page/menu-images/reshmi.jpeg", "Reshmi kebab", 300],
    ["/restaurant-page/menu-images/gosfandi.jpeg", "Gosfandi kebab", 450],
    ["/restaurant-page/menu-images/jigar.jpeg", "Jigar kebab", 400],
    ["/restaurant-page/menu-images/malay-butti.jpeg", "Malayi Butti", 350],
    ["/restaurant-page/menu-images/chalaw.jpeg", "Chalaw kebab", 500],
  ];

  const { kebab } = useContext(MenuContext);
  const { orders, addOrder, updateOrder } = useContext(OrderContext);
  const [autoPlay, setAutoPlay] = useState(true);

  const [quantities, setQuantities] = useState(Kebabs.map(() => 1));

  const setPlay = () => setAutoPlay((prev) => !prev);

  const handleQuantityChange = (index, value) => {
    const quantity = Math.max(1, Number(value) || 1);
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] = quantity;
      return newQuantities;
    });
  };

  function addToOrder(kebab, index) {
    const quantity = quantities[index];

    const existingOrder = orders.findIndex((order) => order.name === kebab[1]);

    if (existingOrder !== -1) {
      const updatedOrder = {
        ...orders[existingOrder],
        quantity: orders[existingOrder].quantity + quantity,
      };
      updateOrder(existingOrder, updatedOrder);
    } else {
      const order = {
        image: kebab[0],
        name: kebab[1],
        price: kebab[2],
        quantity: quantity,
      };

      addOrder(order);
    }
  }

  return (
    <>
      <div ref={kebab}></div>
      <div className="kebab-section">
        <div className="gallery-header headings text-color">Kebabs</div>
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
          {Object.values(Kebabs).map((kebab, index) => (
            <div className="recipe" key={kebab[1]}>
              <div className="recipe-image">
                <img src={kebab[0]} alt="recipe-pic" />
              </div>
              <div className="recipe-info">
                <div className="recipe-name text-color">
                  <p>{kebab[1]}</p>
                </div>
                <div className="price1">
                  <span>Price </span>
                  <span>Rs.{kebab[2]}/-</span>
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
                  <button onClick={() => addToOrder(kebab, index)}>
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

export default Kebabs;
