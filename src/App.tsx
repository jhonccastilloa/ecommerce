import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { getProducstThunks } from "./store/slices/products.slice";
import ProductInfo from "./pages/ProductInfo";
import Login from "./pages/Login";
import { getUserCart } from "./store/slices/cart.slice";
import Header from "./components/shared/Header";
import Cart from "./pages/Cart";
function App() {
  const { products } = useSelector((state: RootState) => state);

  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducstThunks());
    dispatch(getUserCart());
  }, []);


  // useEffect(() => {
  //   const URL = "https://e-commerce-api.academlo.tech/api/v1/users";
  //   const data = {
  //     firstName: "Jhon",
  //     lastName: "Castillo",
  //     email: "gpro1pro@gmail.com",
  //     password: "Ribonucleico1",
  //     phone: "1234567891",
  //     role: "admin",
  //   };
  //   axios
  //     .post(URL, data)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div className="App">
        <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductInfo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/purchases" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
