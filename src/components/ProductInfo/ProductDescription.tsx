import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { getUserCart } from "../../store/slices/cart.slice";
import { Product, ProductID } from "../../types/types";
import getConfig from "../../utils/getConfig";

interface ProductDescriptionProps {
  product: ProductID;
}

const ProductDescription = ({ product }: ProductDescriptionProps) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch: AppDispatch = useDispatch();

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
      .catch((res) => console.log(res));
  };
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <div>
        <span>Price:</span>
        <h3>{product.price}</h3>
      </div>
      <div>
        <h3>quantity</h3>
        <div>
          <div onClick={handleMinus}>-</div>
          <div>{quantity}</div>
          <div onClick={handlePlus}>+</div>
        </div>
      </div>
      <button onClick={handleCart}>
        Add to cart <i className="fa-solid fa-cart-plus"></i>
      </button>
    </div>
  );
};

export default ProductDescription;
