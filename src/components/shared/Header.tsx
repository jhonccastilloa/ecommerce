import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { RootState } from "../../store";
import "./style/header.css";

const Header = () => {
  const location = useLocation();
 const [quantity, setQuantity] = useState(0)
  const {cart} = useSelector((state: RootState) => state);
  useEffect(()=>{
  const countTotal=cart.reduce((acc,el)=>acc+el.productsInCart.quantity,0)
  setQuantity(countTotal)
  },[cart])
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
                <p
                  className={`header__link-text  ${
                    ("/" == location.pathname ||
                      location.pathname.includes("product" || "/")) &&
                    "header__link-text--active"
                  }`}
                >
                  <i className="fa-solid fa-shop"></i>{" "}
                  <span className="header__link-span">Products</span>
                </p>
              </Link>
            </li>
            <li className="hero__item">
              <Link to={"/purchases"}>
                <p
                  className={`header__link-text  ${
                    "/purchases" == location.pathname &&
                    "header__link-text--active"
                  }`}
                >
                  <i className="fa-solid fa-box-archive"></i>
                  <span className="header__link-span">Purchases</span>
                </p>
              </Link>
            </li>
            <li className="hero__item">
              <Link to={"/login"}>
                <p
                  className={`header__link-text  ${
                    "/login" == location.pathname && "header__link-text--active"
                  }`}
                >
                  <i className="fa-solid fa-user"></i>
                  <span className="header__link-span">Login</span>
                </p>
              </Link>
            </li>
            <li className="hero__item">
              <Link to={"/cart"}>
                <p
                  className={`header__link-text  ${
                    "/cart" == location.pathname && "header__link-text--active"
                  }`}
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span className="header__link-span">Your Cart</span>
                </p>
                <div className="cart__quantity">{quantity}</div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
