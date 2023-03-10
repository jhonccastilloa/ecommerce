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
import Purchases from "./pages/Purchases";
import ProtectedRoutes from "./components/shared/ProtectedRoutes";
import Footer from "./components/shared/Footer";
function App() {
  const { products } = useSelector((state: RootState) => state);

  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducstThunks());
    dispatch(getUserCart());
  }, []);

 
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductInfo />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/purchases" element={<Purchases />} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
