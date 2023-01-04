import React, { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import CardProduct from "../components/Home/CardProduct";
import FilterCategory from "../components/Home/FilterCategory";
import FilterPrice from "../components/Home/FilterPrice";
import { RootState } from "../store";
const home = () => {
  const { products } = useSelector((state: RootState) => state);
  const [filterValue, setfilterValue] = useState("")

  const handleCHange=(e:ChangeEvent<HTMLInputElement>)=>{
    const {value}=e.target
    setfilterValue(value.toLowerCase().trim())
  }
  console.log(filterValue);
  console.log(products);
  
  
  return (
    <div>
      <h1>home</h1>
      <input type="text" onChange={handleCHange} />
      <FilterPrice/>
      <FilterCategory/>
      {products.filter(product=>product.title.toLowerCase().includes(filterValue)).map((product) => (
        
        <CardProduct key={product.id} product={product}/>
      ))}
    </div>
  );
};

export default home;
