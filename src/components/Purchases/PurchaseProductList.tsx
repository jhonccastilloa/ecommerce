import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { ProductByUser } from "../../types/types";
import getConfig from "../../utils/getConfig";
import "./style/purchaseProductList.css";

interface PurchaseProductListProps {
  product: ProductByUser;
}

const PurchaseProductList = ({ product }: PurchaseProductListProps) => {
  const [imgProduct, setImgProduct] = useState("");
  const { products } = useSelector((state: RootState) => state);

  useEffect(() => {
    const imgArray = products
      .filter((prod) => prod.id === product.id)
      .map((el) => el.productImgs[0]);
    setImgProduct(imgArray[0]);
  }, []);


  return (
    <li className="purchase__product-item">
      <figure className="purchase__product-figure">
        <img className="purchase__product-img" src={imgProduct} alt="" />
      </figure>
      <h4 className="purchase__product-name">{product.title}</h4>
      <span className="purchase__product-quantity">
        {product.productsInCart.quantity}
      </span>
      <span className="purchase__product-price">$ {product.price}</span>
    </li>
  );
};

export default PurchaseProductList;
