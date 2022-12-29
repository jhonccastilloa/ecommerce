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
  },
});

export const { setProductsGlobal } = productsSlice.actions;
export default productsSlice.reducer;

export const getProducstThunks = () => (dispatch: AppDispatch) => {
  axios
    .get("https://e-commerce-api.academlo.tech/api/v1/products")
    .then((res) => dispatch(setProductsGlobal(res.data.data.products)))
    .catch((err) => console.log(err));
};
