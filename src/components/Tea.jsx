import { useContext, useState } from "react";
import "../styles/tea.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MenuContext from "../context/MenuContext";
import OrderContext from "../context/OrderContext";

const Tea = () => {
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
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const Tea = [
    ["/restaurant-page/tea/black.jpeg", "Black tea", "60"],
    ["/restaurant-page/tea/green.jpeg", "Green tea", "70"],
    ["/restaurant-page/tea/mint.jpeg", "Mint tea", "60"],
    ["/restaurant-page/tea/ginger.jpeg", "Ginger tea", "70"],
    ["/restaurant-page/tea/lemon.jpeg", "Lemon tea", "80"],
    ["/restaurant-page/tea/chai-masala.jpeg", "Chai Masala", "100"],
    ["/restaurant-page/tea/chamomile.jpeg", "Chamomile tea", "120"],
    ["/restaurant-page/tea/honey.jpeg", "Honey tea", "80"],
    ["/restaurant-page/tea/milk.jpeg", "Milk tea", "100"],
    ["/restaurant-page/tea/rooibos.jpeg", "Rooibos tea", "120"],
  ];

  const { tea } = useContext(MenuContext);
  const [autoPlay, setAutoPlay] = useState(true);
  const { orders, addOrder, updateOrder } = useContext(OrderContext);

  const [quantities, setQuantities] = useState(Tea.map(() => 1));

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

  const addToOrder = (tea, index) => {
    const quantity = quantities[index];

    const existingOrder = orders.findIndex((order) => order.name === tea[1]);

    if (existingOrder !== -1) {
      const updatedOrder = {
        ...orders[existingOrder],
        quantity: orders[existingOrder].quantity + quantity,
      };
      updateOrder(existingOrder, updatedOrder);
    } else {
      const order = {
        image: tea[0],
        name: tea[1],
        price: tea[2],
        quantity: quantity,
      };

      addOrder(order);
    }
  };

  return (
    <>
      <div ref={tea}></div>
      <div className="tea-section">
        <div className="gallery-header headings text-color">Tea</div>
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
          {Object.values(Tea).map((tea, index) => (
            <div className="recipe" key={tea[1]}>
              <div className="recipe-image">
                <img src={tea[0]} alt="recipe-pic" />
              </div>
              <div className="recipe-info">
                <div className="recipe-name text-color">
                  <p>{tea[1]}</p>
                </div>
                <div className="price1">
                  <span>Price </span>
                  <span>Rs.{tea[2]}/-</span>
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
                  <button onClick={() => addToOrder(tea, index)}>
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

export default Tea;
