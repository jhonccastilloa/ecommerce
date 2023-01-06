import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch } from "..";
import { Product } from "../../types/types";

const initialValues: Product[] = [];
const productsSlice = createSlice({
  name: "producst",
  initialState: initialValues,
  reducers: {
    setProductsGlobal: (state, action) => action.payload,
    ascendigOrderProdutcs: (state) => {
      state.sort((a, b) => +a.price - +b.price);
    },
    descendigOrderProdutcs: (state) => {
      state.sort((a, b) => +b.price - +a.price);
    },
  },
});

export const { setProductsGlobal, ascendigOrderProdutcs,descendigOrderProdutcs } =
  productsSlice.actions;
export default productsSlice.reducer;

export const getProducstThunks = () => (dispatch: AppDispatch) => {
  axios
    .get("https://e-commerce-api.academlo.tech/api/v1/products")
    .then((res) => dispatch(setProductsGlobal(res.data.data.products)))
    .catch((err) => console.log(err));
};

export const getProductsByCategory =
  (id: number) => (dispatch: AppDispatch) => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/products?category=${id}`;
    axios
      .get(URL)
      .then((res) => dispatch(setProductsGlobal(res.data.data.products)))
      .catch((err) => console.log(err));
  };
