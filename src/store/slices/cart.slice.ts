import { createSlice } from "@reduxjs/toolkit";
import axios, { Axios } from "axios";
import { AppDispatch } from "..";
import { Cart } from "../../types/types";
import getConfig from "../../utils/getConfig";


const initialValues: Cart[] = [];
const cartSlice = createSlice({
  name: "cart",
  initialState: initialValues,
  reducers: {
    setCartGlobal: (state, action) => action.payload,
  },
});

export const { setCartGlobal } = cartSlice.actions;
export default cartSlice.reducer;

export const getUserCart = () => (dispatch: AppDispatch) => {
  const URL = `https://e-commerce-api.academlo.tech/api/v1/cart`;
  axios.get(URL, getConfig()).then((res) => dispatch(setCartGlobal(res.data.data.cart.products))).catch(err=>{
    dispatch(setCartGlobal(initialValues))
  });
};
