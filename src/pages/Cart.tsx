import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../components/Cart/CartProduct";
import { AppDispatch, RootState } from "../store";
import { getUserCart } from "../store/slices/cart.slice";
import productsSlice from "../store/slices/products.slice";
import getConfig from "../utils/getConfig";

const Cart = () => {
  const { cart } = useSelector((state: RootState) => state);
  const disptach:AppDispatch=useDispatch()

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
        console.log(res)
        disptach(getUserCart())
      })
      .catch((err) => console.log(err));
  };
  return (
    <section>
      <h2>Cart </h2>
      <div>
        {cart?.map((product) => (
          <CartProduct key={product.id} product={product} />
        ))}
      </div>
      <footer>
        <span>Total:</span>
        <p>
          {cart.reduce(
            (acc, product) =>
              acc + Number(product.price) * product.productsInCart.quantity,
            0
          )}
        </p>
        <button onClick={handleCheckout}>Checkout</button>
      </footer>
    </section>
  );
};

export default Cart;
