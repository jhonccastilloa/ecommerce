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
  const [isLoading, setIsLoading] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const [imgProduct, setImgProduct] = useState("");
  const { cart } = useSelector((state: RootState) => state);

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
  const handleClick = (value: number) => {
    setIsLoading(true);
    const URLPatch = "https://e-commerce-api.academlo.tech/api/v1/cart";
    const prevQuantity = cart.filter((e) => e.id === product.id)[0]
      .productsInCart.quantity;
    const data = {
      id: product.id,
      newQuantity: prevQuantity + value,
    };
    axios
      .patch(URLPatch, data, getConfig())
      .then((res) => {
        dispatch(getUserCart());
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };
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
        {!isLoading?<p className="table__name table__name--quantity ">
          {product.productsInCart.quantity == 1 ? (
            <i className="fa-solid fa-less-than gray"></i>
          ) : (
            <i
              className="fa-solid fa-less-than "
              onClick={() => handleClick(-1)}
            ></i>
          )}
          <span className="table__span">{product.productsInCart.quantity}</span>{" "}
          <i
            className="fa-solid fa-greater-than"
            onClick={() => handleClick(+1)}
          ></i>
        </p>:<span className="loader2"></span>}
      </td>
      <td>
        <p className="table__name">
          {(product.productsInCart.quantity * +product.price).toFixed(2)}
        </p>
      </td>
      <td onClick={handleDelete}>
        <i className="fa-regular fa-trash-can"></i>
      </td>
    </tr>
  );
};

export default CartProduct;
