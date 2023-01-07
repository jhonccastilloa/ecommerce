import React, { MouseEvent } from "react";
import { Product } from "../../types/types";
import { useNavigate } from "react-router-dom";
import "./style/cardProduct.css";
import axios, { Axios } from "axios";
import getConfig from "../../utils/getConfig";
import { useDispatch } from "react-redux";
import { getUserCart } from "../../store/slices/cart.slice";
import { AppDispatch } from "../../store";

interface CardProductProps {
  product: Product;
}

const CardProduct = ({ product }: CardProductProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };
  const dispatch: AppDispatch = useDispatch();
  const handleBtnClick = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const URL = `https://e-commerce-api.academlo.tech/api/v1/cart`;
    const data = {
      id: product.id,
      quantity: 1,
    };
    axios
      .post(URL, data, getConfig())
      .then((res) => {
        console.log(res);
        dispatch(getUserCart());
      })
      .catch((err) => console.log(err));
  };
  console.log(product);

  return (
    <article className="product" onClick={handleClick}>
      <header className="product__header">
        <img className="product__img" src={product.productImgs[0]} alt="" />
        <img className="product__img" src={product.productImgs[1]} alt="" />
      </header>
      <section className="product__body">
        <h4 className="product__category">{product.category.name}</h4>
        <h3 className="product__name">{product.title}</h3>
        <div className="product__footer">
          <article className="product__price-container">
            <span className="product__price-label">Price:</span>
            <h4 className="product__price-number">{product.price}</h4>
          </article>
          <button onClick={handleBtnClick} className="product__btn">
            <i className="fa-solid fa-cart-plus"></i>
          </button>
        </div>
      </section>
    </article>
  );
};

export default CardProduct;
