import React from "react";
import { Product } from "../../types/types";
import { useNavigate } from "react-router-dom";
import "./style/cardProduct.css";

interface CardProductProps {
  product: Product;
}

const CardProduct = ({ product }: CardProductProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };
  return (
    <article className="product" onClick={handleClick}>
      <header className="product__header">
        <img className="product__img" src={product.productImgs[0]} alt="" />
        <img className="product__img" src={product.productImgs[1]} alt="" />
      </header>
      <section className="product__body">
        <h3 className="product__name">{product.title}</h3>
        <article className="product__price-container">
          <span className="product__price-label">Price</span>
          <h4 className="product__price-number">{product.price}</h4>
        </article>
        <button className="product__btn">
          <i className="fa-solid fa-cart-plus"></i>
        </button>
      </section>
    </article>
  );
};

export default CardProduct;
