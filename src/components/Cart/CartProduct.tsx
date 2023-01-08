import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { getUserCart } from "../../store/slices/cart.slice";
import { Cart } from "../../types/types";
import getConfig from "../../utils/getConfig";
import "./style/cartProduct.css";

interface CardProductProps {
  product: Cart;
}
const CartProduct = ({ product }: CardProductProps) => {
  const dispatch: AppDispatch = useDispatch();
  const [imgProduct, setImgProduct] = useState("");

  const { products } = useSelector((state: RootState) => state);

  useEffect(() => {
    const imgArray = products
      .filter((prod) => prod.id === product.id)
      .map((el) => el.productImgs[0]);
    setImgProduct(imgArray[0]);
  }, []);
  const handleDelete = () => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/cart/${product.id}`;

    axios
      .delete(URL, getConfig())
      .then((res) => {
        dispatch(getUserCart());
      })
      .catch((err) => console.log(err));
  };
  console.log(product);

  return (
    <tr>
      <td className="table__td">
        <figure className="table__figure">
          <img className="table__img" src={imgProduct} alt="" />
        </figure>
        <p className="table__name">{product.title}</p>
      </td>
      <td>
        <p className="table__name">{product.price}</p>
      </td>
      <td>
        <p className="table__name">{product.productsInCart.quantity}</p>
      </td>
      <td>
        <p className="table__name">{(product.productsInCart.quantity *  +product.price).toFixed(2) }</p>
      </td>
      <td onClick={handleDelete}>
        <i className="fa-regular fa-trash-can"></i>
      </td>
    </tr>
  );
};

export default CartProduct;
