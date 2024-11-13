import "../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="social-media">
        <p>Join our community through </p>
        <img src="/icons/facebook.png" alt="facebook-icon" />
        <img src="/icons/instagram.png" alt="instagram-icon" />
      </div>
      <div className="sign">
        <p>
          Sign up for special offers, seasonal updates, and event invitations!
        </p>
        <Link to="/signup-page">
          <button>Sign up</button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
