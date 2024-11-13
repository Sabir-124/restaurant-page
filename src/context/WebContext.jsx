import { createContext, useRef } from "react";

const WebContext = createContext();

function Scroll({ children }) {  // Fixed "children" typo
  const home = useRef(null);
  const about = useRef(null);
  const gallery = useRef(null);
  const event = useRef(null);
  const review = useRef(null);
  const contact = useRef(null);

  const scrollHome = () => {
    home.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollAbout = () => {
    about.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollGallery = () => {  
    gallery.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollEvent = () => {
    event.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollReview = () => {
    review.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollContact = () => {
    contact.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <WebContext.Provider value={{ home, about, gallery, event, review, contact, scrollHome, scrollAbout, scrollGallery, scrollEvent, scrollReview, scrollContact }}>
      {children}  {/* Render children properly */}
    </WebContext.Provider>
  );
}

export { Scroll };
export default WebContext;
