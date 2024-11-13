import { useContext, useState } from "react";
import "../styles/riceselection.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MenuContext from "../context/MenuContext";
import OrderContext from "../context/OrderContext";

const RiceSelection = () => {
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

  const RiceSelections = [
    ["/menu-images/chicken-biryani.jpeg", "Chicken Biryani", "350", "450"],
    ["/menu-images/beef-biryani.jpeg", "Beef Biryani", "450", "550"],
    ["/menu-images/chicken-qabuli.jpg", "Chicken Qabuli", "450", "550"],
    ["/menu-images/mutton-qabuli.jpeg", "Mutton Qabuli", "500", "600"],
    ["/menu-images/chana-Pulao.jpeg", "Chana Palao", "300", "400"],
    ["/menu-images/rice-potato.jpeg", "Rice Potato", "250", "300"],
    ["/menu-images/simple-rice.jpeg", "Basmati Rice", "250", "320"],
  ];

  const { rice } = useContext(MenuContext);
  const [autoPlay, setAutoPlay] = useState(true);
  const { orders, addOrder, updateOrder } = useContext(OrderContext);

  const [quantities, setQuantities] = useState(RiceSelections.map(() => 1));
  const [selected, setSelected] = useState("");

  const handleOptionChange = (event) => {
    console.log("option selected:", event.target.value);
    setSelected(event.target.value);
  };

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

  function addToOrder(riceSelection, index) {
    const quantity = quantities[index];

    const existingOrder = orders.findIndex(
      (order) => order.name === riceSelection[1]
    );

    if (existingOrder !== -1) {
      const updatedOrder = {
        ...orders[existingOrder],
        quantity: orders[existingOrder].quantity + quantity,
      };
      updateOrder(existingOrder, updatedOrder);
    } else {
      const order = {
        image: riceSelection[0],
        name: riceSelection[1],
        price: selected,
        quantity: quantity,
      };

      addOrder(order);
    }
  }

  return (
    <>
      <div ref={rice}></div>
      <div className="rice-selection-section">
        <div className="gallery-header headings text-color">Rice Selection</div>
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
          {Object.values(RiceSelections).map((riceSelection, index) => (
            <div className="recipe" key={riceSelection[1]}>
              <div className="recipe-image">
                <img src={riceSelection[0]} alt="recipe-pic" />
              </div>
              <div className="recipe-info">
                <div className="recipe-name text-color">
                  <p>{riceSelection[1]}</p>
                </div>
                <div className="price">
                  <label>
                    <input
                      type="radio"
                      name="option"
                      value={riceSelection[2]}
                      checked={selected === riceSelection[2]}
                      onChange={handleOptionChange}
                    />
                    <span>Single price </span>
                    <span>Rs.{riceSelection[2]}/-</span>
                  </label>
                </div>
                <div className="price">
                  <label>
                    <input
                      type="radio"
                      name="option"
                      value={riceSelection[3]}
                      checked={selected === riceSelection[3]}
                      onChange={handleOptionChange}
                    />
                    <span>Double price </span>
                    <span>Rs.{riceSelection[3]}/-</span>
                  </label>
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
                  <button onClick={() => addToOrder(riceSelection, index)}>
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

export default RiceSelection;
