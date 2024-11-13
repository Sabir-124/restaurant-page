import { useContext } from "react";
import "../styles/home.css";
import WebContext from "../context/WebContext";

const Home = () => {
  const { home } = useContext(WebContext);

  return (
    <div className="home-section">
      <div ref={home}></div>
      <div className="home-image">
        <img src="/restaurant-page/images/home-image.jpeg" alt="food-image" />
      </div>
      <div className="home-text">
        <p className="quote">Where there is good food, there is joy!</p>
        <p className="welcome">
          Welcome to <b className="text-color">Rice & Spice</b>
        </p>
        <p className="welcome welcome-2">
          Experience the flavors of authentic asian cuisine in a warm, inviting
          setting.
        </p>
      </div>
    </div>
  );
};

export default Home;
