import React from "react";
import { useDispatch } from "react-redux";
import {
  ascendigOrderProdutcs,
  descendigOrderProdutcs,
} from "../../store/slices/products.slice";

const ToOrderProducts = () => {
  const dispatch = useDispatch();
  const handleAscending = () => {
    dispatch(ascendigOrderProdutcs());
  };
  const handlDescending = () => {
    dispatch(descendigOrderProdutcs());
  };
  return (
    <div>
      <button onClick={handleAscending}>Ascending Order</button>
      <button onClick={handlDescending}>Descending Order</button>
    </div>
  );
};

export default ToOrderProducts;
