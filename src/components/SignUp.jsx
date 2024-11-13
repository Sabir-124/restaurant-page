import { useState } from "react";
import "../styles/Signup.css";
import { Link } from "react-router-dom";
import ScrollTop from "./ScrollTop";

const SignUp = () => {
  const sentence = (
    <span>
      Welcome to <b>Rice and Spice</b> – Your go-to place for unforgettable
      dining experiences. Join our community to stay updated on exclusive
      offers, seasonal menus, and events, and enjoy a seamless ordering
      experience!
    </span>
  );
  const name = "/restaurant-page/icons/name.png";
  const email = "/restaurant-page/icons/mail.png";
  const password = "/restaurant-page/icons/password.png";
  const openEye = "/restaurant-page/icons/opened-eye.png";
  const closeEye = "/restaurant-page/icons/closed-eye.png";

  const [show, setShow] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setTimeout(() => {
      setInputName("");
      setInputEmail("");
      setInputPassword("");
      setLoginName("");
      setLoginPassword("");
    }, 2000);
  };

  const handleInputName = (event) => {
    setInputName(event.target.value);
  };
  const handleInputEmail = (event) => {
    setInputEmail(event.target.value);
  };
  const handleInputPasword = (event) => {
    setInputPassword(event.target.value);
  };
  const handleLoginName = (event) => {
    setLoginName(event.target.value);
  };
  const handleLoginPassword = (event) => {
    setLoginPassword(event.target.value);
  };

  return (
    <>
      <ScrollTop />
      <div className="signup-section">
        <Link to="/" className="signup-name index">
          <img
            src="/restaurant-page/menu-icons/rice.png"
            alt="restaurant-logo"
          />
          <p className="text-color">Rice & Spice</p>
          <img
            src="/restaurant-page/menu-icons/pepper.png"
            alt="restaurant-logo"
          />
        </Link>
        <div className="text-color signup-header">
          Sign Up to Savor Exclusive Flavors!
        </div>
        <div className="sentence">{sentence}</div>
        <div className={`card-inner ${isLogin ? "signup-mode" : "login-mode"}`}>
          <form className="form-container signup-container">
            <div className="section">
              <label for="name">
                <img src={name} alt="icon" />
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name . . ."
                value={inputName}
                onChange={handleInputName}
                required
              />
            </div>
            <div className="section">
              <label for="email">
                <img src={email} alt="icon" />
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={inputEmail}
                onChange={handleInputEmail}
                required
              />
            </div>
            <div className="section">
              <label for="password">
                <img src={password} alt="icon" />
              </label>
              <input
                id="password"
                type={show ? "text" : "password"}
                placeholder="Enter your password"
                value={inputPassword}
                onChange={handleInputPasword}
                required
              />
              <img
                src={show ? openEye : closeEye}
                alt="icon"
                onClick={handleShow}
              />
            </div>
            <div className="signup-button">
              <button type="submit">Sign up</button>
            </div>
            <div className="account">
              <span>Have an account?</span>
              <span className="login" onClick={toggleForm}>
                Log in
              </span>
            </div>
          </form>
          <form className="form-container login-container">
            <div className="section">
              <label for="login-email">
                <img src={email} alt="icon" />
              </label>
              <input
                id="login-email"
                type="email"
                placeholder="Enter your email address"
                value={loginName}
                onChange={handleLoginName}
                required
              />
            </div>
            <div className="section">
              <label for="login-password">
                <img src={password} alt="icon" />
              </label>
              <input
                id="login-password"
                type={show ? "text" : "password"}
                placeholder="Enter your password"
                value={loginPassword}
                onChange={handleLoginPassword}
                required
              />
              <img
                src={show ? openEye : closeEye}
                alt="icon"
                onClick={handleShow}
              />
            </div>
            <div className="signup-button">
              <button type="submit">Log in</button>
            </div>
            <div className="account">
              <span>Have no account?</span>
              <span className="Sign" onClick={toggleForm}>
                Sign up
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
