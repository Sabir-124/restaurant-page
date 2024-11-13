import { useContext } from "react";
import "../styles/contact.css";
import WebContext from "../context/WebContext";

const Contact = () => {
  const contacts1 = [
    {
      image: "/restaurant-page/icons/phone.png",
      text: "0300-0000000",
    },
    {
      image: "/restaurant-page/icons/time.png",
      text: "Mon-Sun, 11 AM to 11 PM",
    },
  ];

  const contacts2 = [
    {
      image: "/restaurant-page/icons/email.png",
      text: "rice&spice123@gmail.com",
    },
    {
      image: "/restaurant-page/icons/address.png",
      text: "Near Sadaqat Store, Hazara town, Quetta",
    },
  ];

  const { contact } = useContext(WebContext);

  return (
    <>
      <div ref={contact}></div>
      <div className="contact-section">
        <div className="gallery-header headings text-color">Contacts</div>
        <div className="contact-contents">
          <div className="contact-text">
            <p className="heading text-color">Reserve your table</p>
            <p className="text">
              Whether it’s an intimate dinner, a lively gathering, or a
              celebration, we’re ready to welcome you. Book your table today to
              experience the magic of <b>Rice & Spice</b>.
            </p>
            <p className="heading text-color">Contact Us</p>
          </div>
          <div className="contacts">
            {Object.values(contacts1).map((contact) => (
              <div className="contact">
                <img src={contact.image} alt="contact-icon" />
                <span>{contact.text}</span>
              </div>
            ))}
          </div>
          <div className="contacts">
            {Object.values(contacts2).map((contact) => (
              <div className="contact">
                <img src={contact.image} alt="contact-icon" />
                <span>{contact.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
