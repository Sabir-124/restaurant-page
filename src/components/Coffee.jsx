import { useContext, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MenuContext from "../context/MenuContext";
import OrderContext from "../context/OrderContext";

const Coffee = () => {
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

  const Coffee = [
    ["/coffee/americano.jpeg", "Americano", "200"],
    ["/coffee/espresso.jpeg", "Espresso", "200"],
    ["/coffee/flat-white.jpeg", "Flat White", "230"],
    ["/coffee/latte.jpeg", "Latte", "230"],
    ["/coffee/cold.jpeg", "Cold coffee", "250"],
    ["/coffee/macchiato.jpeg", "Macchiato", "280"],
    ["/coffee/mocha.jpeg", "Mocha", "300"],
  ];

  const { coffee } = useContext(MenuContext);
  const [autoPlay, setAutoPlay] = useState(true);
  const { orders, addOrder, updateOrder } = useContext(OrderContext);

  const [quantities, setQuantities] = useState(Coffee.map(() => 1));

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

  const addToOrder = (coffee, index) => {
    const quantity = quantities[index];

    const existingOrder = orders.findIndex((order) => order.name === coffee[1]);

    if (existingOrder !== -1) {
      const updatedOrder = {
        ...orders[existingOrder],
        quantity: orders[existingOrder].quantity + quantity,
      };
      updateOrder(existingOrder, updatedOrder);
    } else {
      const order = {
        image: coffee[0],
        name: coffee[1],
        price: coffee[2],
        quantity: quantity,
      };
      addOrder(order);
    }
  };

  return (
    <>
      <div ref={coffee}></div>
      <div className="rice-selection-section">
        <div className="gallery-header headings text-color">Coffee</div>
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
          {Object.values(Coffee).map((coffee, index) => (
            <div className="recipe" key={coffee[1]}>
              <div className="recipe-image">
                <img src={coffee[0]} alt="recipe-pic" />
              </div>
              <div className="recipe-info">
                <div className="recipe-name text-color">
                  <p>{coffee[1]}</p>
                </div>
                <div className="price1">
                  <span>Price </span>
                  <span>Rs.{coffee[2]}/-</span>
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
                  <button onClick={() => addToOrder(coffee, index)}>
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

export default Coffee;
