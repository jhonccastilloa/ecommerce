import { Link } from "react-router-dom";
import "./style/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__main container">
        <figure className="header__figure">
          <Link to={"/"}>
            <img className="header__logo" src="/logo.png" alt="logo" />
          </Link>
        </figure>
        <nav className="header__nav">
          <ul className="header__list">
            <li className="hero__item">
              <Link to={"/"}>
                <p className="header__link-text">
                  <i className="fa-solid fa-shop"></i> <span className="header__link-span">Products</span>
                </p>
              </Link>
            </li>
            <li className="hero__item">
              <Link to={"/purchases"}>
                <p className="header__link-text">
                  <i className="fa-solid fa-box-archive"></i>
                  <span className="header__link-span">Purchases</span>
                </p>
              </Link>
            </li>
            <li className="hero__item">
              <Link to={"/login"}>
                <p className="header__link-text">
                <i className="fa-solid fa-user"></i>
                  <span className="header__link-span">Login</span>
                </p>
              </Link>
            </li>
            <li className="hero__item">
              <Link to={"/cart"}>
                <p className="header__link-text">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span className="header__link-span">Your Cart</span>
                </p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
