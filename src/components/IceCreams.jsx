import { useContext, useState } from "react";
import "../styles/icecream.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MenuContext from "../context/MenuContext";
import OrderContext from "../context/OrderContext";

const IceCreams = () => {
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

  const IceCreams = [
    ["/restaurant-page/menu-images/vanilla.jpeg", "Vanilla", "200"],
    ["/restaurant-page/menu-images/chocolate.jpeg", "Chocolate", "250"],
    ["/restaurant-page/menu-images/strawberry.jpeg", "Strawberry", "250"],
    ["/restaurant-page/menu-images/cookies-cream.jpeg", "Cookies Cream", "300"],
    ["/restaurant-page/menu-images/cotton-candy.jpeg", "Cotton Candy", "300"],
    ["/restaurant-page/menu-images/mango.jpeg", "Mango", "300"],
    [
      "/restaurant-page/menu-images/mint-chocolate.jpeg",
      "Mint Chocolate",
      "280",
    ],
    ["/restaurant-page/menu-images/rocky-road.jpeg", "Rocky Road", "330"],
  ];

  const { iceCream } = useContext(MenuContext);
  const [autoPlay, setAutoPlay] = useState(true);
  const { orders, addOrder, updateOrder } = useContext(OrderContext);

  const [quantities, setQuantities] = useState(IceCreams.map(() => 1));

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

  const addToOrder = (iceCream, index) => {
    const quantity = quantities[index];

    const existingOrder = orders.findIndex(
      (order) => order.name === iceCream[1]
    );

    if (existingOrder !== -1) {
      const updatedOrder = {
        ...orders[existingOrder],
        quantity: orders[existingOrder].quantity + quantity,
      };
      updateOrder(existingOrder, updatedOrder);
    } else {
      const order = {
        image: iceCream[0],
        name: iceCream[1],
        price: iceCream[2],
        quantity: quantity,
      };
      addOrder(order);
    }
  };

  return (
    <>
      <div ref={iceCream}></div>
      <div className="icecream-section">
        <div className="gallery-header headings text-color">Ice Creams</div>
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
          {Object.values(IceCreams).map((iceCream, index) => (
            <div className="recipe" key={iceCream[1]}>
              <div className="recipe-image">
                <img src={iceCream[0]} alt="recipe-pic" />
              </div>
              <div className="recipe-info">
                <div className="recipe-name text-color">
                  <p>{iceCream[1]}</p>
                </div>
                <div className="price1">
                  <span>Price </span>
                  <span>Rs.{iceCream[2]}/-</span>
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
                  <button onClick={() => addToOrder(iceCream, index)}>
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

export default IceCreams;
