import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { getUserCart } from "../../store/slices/cart.slice";
import { Product, ProductID } from "../../types/types";
import getConfig from "../../utils/getConfig";
import ProductsSwiper from "./ProductsSwiper";
import "./style/productDescription.css";

interface ProductDescriptionProps {
  product: ProductID;
}

const ProductDescription = ({ product }: ProductDescriptionProps) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch: AppDispatch = useDispatch();

  const { cart } = useSelector((state: RootState) => state);

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };
  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleCart = () => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/cart`;
    const data = {
      id: product.id,
      quantity,
    };
    axios
      .post(URL, data, getConfig())
      .then((res) => {
        console.log(res);
        dispatch(getUserCart());
      })
      .catch((err) => {
        if (err.response.status === 400) {
          const URLPatch = "https://e-commerce-api.academlo.tech/api/v1/cart";
          const prevQuantity = cart.filter((e) => e.id === product.id)[0]
            .productsInCart.quantity;

          const data = {
            id: product.id,
            newQuantity: prevQuantity + quantity,
          };
          axios
            .patch(URLPatch, data, getConfig())
            .then((res) => dispatch(getUserCart()))
            .catch((err) => console.log(err));
        }
      });
  };
  console.log(product);
  return (
    <div className="info__main">
      <div className="info__carousel">
        <ProductsSwiper productImgs={product.productImgs} />
      </div>
      <div className="info__body">
        <h2 className="info__title">{product.title}</h2>
        <p className="info__paragraph">{product.description}</p>
        <div className="info__aditional">
          <div className="info__price">
            <span className="info__span">Price:</span>
            <h3 className="info__price-number">{product.price}</h3>
          </div>
          <div className="info__quantity">
            <span className="info__span">Quantity:</span>
            <div className="info__quantity-options">
              <button className="info__option" onClick={handleMinus}>
                -
              </button>
              <p className="info__span-quantity">{quantity}</p>
              <button className="info__option" onClick={handlePlus}>
                +
              </button>
            </div>
          </div>
        </div>
        <button className="info__btn" onClick={handleCart}>
          Add to cart <i className="fa-solid fa-cart-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductDescription;
