import { useContext } from "react";
import "../styles/homemenu.css";
import MenuContext from "../context/MenuContext";

const MenuHome = () => {
  const homeMessage =
    "Each dish on our menu is crafted to tell a story and evoke a sense of adventure. From traditional favorites to innovative creations, every bite invites you into our world. Explore our carefully curated selection below.";

  const { menuHome } = useContext(MenuContext);

  return (
    <div className="menu-home">
      <div ref={menuHome}></div>
      <div className="menu-home-image">
        <img
          src="/restaurant-page/menu-images/menu-pic.jpeg"
          alt="food-image"
        />
      </div>
      <div className="menu-home-text">
        <p className="menu-title text-color">Menu</p>
        <p className="menu-home-intro">{homeMessage}</p>
      </div>
    </div>
  );
};

export default MenuHome;
