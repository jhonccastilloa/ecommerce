import React, { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import CardProduct from "../components/Home/CardProduct";
import FilterCategory from "../components/Home/FilterCategory";
import FilterPrice from "../components/Home/FilterPrice";
import ToOrderProducts from "../components/Home/ToOrderProducts";
import { RootState } from "../store";
import { InputPrice } from "../types/types";
const initValuesInputPrice: InputPrice = {
  from: 0,
  to: Infinity,
};
const home = () => {
  const { products } = useSelector((state: RootState) => state);
  const [filterValue, setfilterValue] = useState("");

  const [inputPrice, setInputPrice] = useState(initValuesInputPrice);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setfilterValue(value.toLowerCase().trim());
  };
  console.log(inputPrice);
  // console.log(products);

  return (
    <div>
      <h1>home</h1>
      <input value={filterValue} type="text" onChange={handleChange} />
      <ToOrderProducts/>
      <FilterPrice setInputPrice={setInputPrice} />
      <FilterCategory setfilterValue={setfilterValue} />
      {products.filter(
        ({ price }) => +price >= inputPrice.from && +price <= inputPrice.to
      ).length !== 0 ? (
        products
          .filter(
            ({ price }) => +price >= inputPrice.from && +price <= inputPrice.to
          )
          .filter((product) =>
            product.title.toLowerCase().includes(filterValue)
          )
          .map((product) => <CardProduct key={product.id} product={product} />)
      ) : (
        <h2>Not exist products to this filter</h2>
      )}
    </div>
  );
};

export default home;
