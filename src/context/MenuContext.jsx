import { createContext, useRef } from "react";

const MenuContext = createContext();

function MenuScroll({ children }) {  // Fixed "children" typo
  const menuHome = useRef(null);
  const rice = useRef(null);
  const kebab = useRef(null);
  const iceCream = useRef(null);
  const tea = useRef(null);
  const coffee = useRef(null);
  const juice = useRef(null);

  const scrollMenuHome = () => {
    menuHome.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollRice = () => {
    rice.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollKebab = () => {
    kebab.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollIceCream = () => {
    iceCream.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollTea = () => {
    tea.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollCoffee = () => {
    coffee.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollJuice = () => {
    juice.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <MenuContext.Provider value={{ menuHome, rice, kebab, iceCream, tea, coffee, juice, scrollMenuHome, scrollRice, scrollKebab, scrollIceCream, scrollTea, scrollCoffee, scrollJuice }}>
      {children}  {/* Render children properly */}
    </MenuContext.Provider>
  );
}

export { MenuScroll };
export default MenuContext;
