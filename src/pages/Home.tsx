import React from "react";
import { useSelector } from "react-redux";
import CardProduct from "../components/Home/CardProduct";
import { RootState } from "../store";
const home = () => {
  const { products } = useSelector((state: RootState) => state);
  return (
    <div>
      <h1>home</h1>

      {products.map((product) => (
        
        <CardProduct key={product.id} product={product}/>
      ))}
    </div>
  );
};

export default home;
