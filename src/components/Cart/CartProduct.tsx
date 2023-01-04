import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { getUserCart } from "../../store/slices/cart.slice";
import { Cart } from "../../types/types";
import getConfig from "../../utils/getConfig";
import "./style/cartProduct.css";

interface CardProductProps {
  product: Cart;
}
const CartProduct = ({ product }: CardProductProps) => {
  const dispatch: AppDispatch = useDispatch();
  const handleDelete = () => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/cart/${product.id}`;

    axios
      .delete(URL, getConfig())
      .then((res) => {
        dispatch(getUserCart());
      })
      .catch((err) => console.log(err));
  };
  return (
    <article className="cart-product">
      <header>
        <h4>{product.brand}</h4>
        <h3>{product.brand}</h3>
      </header>
      <button onClick={handleDelete}>
        <i className="fa-regular fa-trash-can"></i>
      </button>
      <div>{product.productsInCart.quantity}</div>
      <div>
        <p>Unit Price:</p>
        <span>{product.price}</span>
      </div>
    </article>
  );
};

export default CartProduct;
