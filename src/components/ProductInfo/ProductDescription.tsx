import React, { useState } from "react";
import { Product, ProductID } from "../../types/types";

interface ProductDescriptionProps {
  product: ProductID;
}

const ProductDescription = ({ product }: ProductDescriptionProps) => {
  const [quantity, setQuantity] = useState(1);


  const handlePlus = () => {
    setQuantity(quantity + 1);
  };
  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
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
      <button>
        Add to cart <i className="fa-solid fa-cart-plus"></i>
      </button>
    </div>
  );
};

export default ProductDescription;
