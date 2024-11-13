import { useContext } from "react";
import "../styles/events.css";
import WebContext from "../context/WebContext";
import { Link } from "react-router-dom";

const Events = () => {
  const { event } = useContext(WebContext);

  return (
    <div className="event-section">
      <div ref={event}></div>
      <div className="gallery-header headings text-color">Events</div>
      <div className="event-contents">
        <div className="event-text">
          <p className="event-heading">
            Upcoming Events at <b>Rice & Spice</b>
          </p>
          <p className="event-info">
            We believe in making every meal special, and sometimes that means
            going all out! Join us for live music nights, chef-led tastings, and
            seasonal events that bring our community together.
          </p>
          <Link to="/signup-page" className="join-class">
            <button className="join-button">Join now!</button>
          </Link>
        </div>
        <div className="event-image">
          <img
            className="pic"
            alt="event-pic"
            src="/restaurant-page/images/event-image.jpeg"
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
