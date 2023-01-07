import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  AandZOrderProdutcs,
  ascendigOrderProdutcs,
  defaultOrderProdutcs,
  descendigOrderProdutcs,
  ZandAOrderProdutcs,
} from "../../store/slices/products.slice";
import "./style/toOrderProducts.css";

const sortValues = [
  { name: "default", title: "Default" },
  { name: "AtoZ", title: "Name: A-Z" },
  { name: "ZtoA", title: "Name: Z-A" },
  { name: "lowTohigh", title: "Price: Low to High" },
  { name: "highToLow", title: "Price: High to Low" },
];

const ToOrderProducts = () => {
  const dispatch = useDispatch();
  const [sortName, setSortName] = useState("default")

  const handleOrding = (name: string) => {
    setSortName(name)

    switch (name) {
      case "default":
        dispatch(defaultOrderProdutcs());
        break;
      case "AtoZ":
        dispatch(AandZOrderProdutcs());
        break;
      case "ZtoA":
        dispatch(ZandAOrderProdutcs());
        break;
      case "lowTohigh":
        dispatch(ascendigOrderProdutcs());
        break;
      case "highToLow":
        dispatch(descendigOrderProdutcs());
        break;
    }
  };

  console.log(sortName);
  
  return (
    <div className="filter__group">
      <h3 className="filter__title">Sort By</h3>
      <ul className="filter__items">
      
        {sortValues.map((el) => (
          <li
            key={el.name}
            className="filter__item"
            onClick={() => handleOrding(el.name)}
          >
            <span className={`filter__span ${el.name==sortName && 'filter__span--active'}`}>{el.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToOrderProducts;
