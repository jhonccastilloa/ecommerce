import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../components/Cart/CartProduct";
import { AppDispatch, RootState } from "../store";
import { getUserCart } from "../store/slices/cart.slice";
import productsSlice from "../store/slices/products.slice";
import getConfig from "../utils/getConfig";
import "./style/cart.css";

const Cart = () => {
  const { cart } = useSelector((state: RootState) => state);
  const disptach: AppDispatch = useDispatch();

  const handleCheckout = () => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/purchases";
    const data = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references",
    };
    axios
      .post(URL, data, getConfig())
      .then((res) => {
        console.log(res);
        disptach(getUserCart());
      })
      .catch((err) => console.log(err));
  };
  return (
    <section className="section__cart container">
      <h1 className="cart__title">Shoping Cart </h1>

      <div className="cart__container">
        <div className="cart__table">
          <table className="table">
            <tr>
              <th className="table__th">PRODUCT</th>
              <th className="table__th">PRICE</th>
              <th className="table__th">QUANTITY</th>
              <th className="table__th">TOTAL</th>
              <th className="table__th"></th>
            </tr>
            {cart?.map((product) => (
              <CartProduct key={product.id} product={product} />
            ))}
          </table>
        </div>
        <div className="cart__total">
          <h3 className="card__subtitle">CART TOTALS</h3>
          <div className="cart__total-info">
            <span className="cart__span">Subtotal:</span>
            <p className="cart__text"> $ {" "} 
              {cart.reduce(
                (acc, product) =>
                  acc + Number(product.price) * product.productsInCart.quantity,
                0
              )}
            </p>
          </div>
          <div className="cart__total-info">
            <span className="cart__span">Shipping:</span>
            <p className="cart__text">FREE</p>
          </div>
          <div className="cart__total-info">
            <span className="cart__span">Total:</span>
            <p className="cart__text">$ {" "} 
              {cart.reduce(
                (acc, product) =>
                  acc + Number(product.price) * product.productsInCart.quantity,
                0
              )}
            </p>
          </div>
          <button className="form__btn" onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
