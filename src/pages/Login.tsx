import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style/login.css";
import { User } from "../types/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

interface Login {
  email: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit, reset } = useForm<Login>();
  const [isLogged, setIsLogged] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submit: SubmitHandler<Login> = (data) => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/users/login";

    axios
      .post(URL, data)
      .then((res) => {
        localStorage.setItem(
          "user",
          res.data.data.user.firstName + " " + res.data.data.user.lastName
        );
        localStorage.setItem("token", res.data.data.token);
        setIsLogged(true);
        navigate("/");
      })
      .catch((err) => console.log(err));
    console.log(data);

    reset({
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    const condition = localStorage.getItem("token") ? true : false;
    setIsLogged(condition);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLogged(false);
  };
  if (isLogged) {
    return (
      <section className="section__login section__login--Logged  container">
        <div className="login__info">
          <h2 className="login__subtitle">User Logged ✔</h2>
          <p className="login__paragraph">Welcome user : {localStorage.getItem("user")} </p>
          <button className="login__btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </section>
    );
  }
  return (
    <section className="section__login container">
      <div className="login__info">
        <h2 className="login__subtitle">New to our website?</h2>
        <p className="login__paragraph">
          There are advances being made in science and technology everyday, and
          a good example of this is the
        </p>
        <button className="login__btn">CREATE AN ACCOUNT</button>
      </div>
      <div className="login__form">
        <form className="form form--login" onSubmit={handleSubmit(submit)}>
          <h2 className="form__title">LOG IN TO ENTER</h2>
          <div className="form__group">
            <label className="form__label" htmlFor="email">
              Email
            </label>
            <input
              className="form__input"
              type="text"
              id="email"
              {...register("email")}
              placeholder="example.@gmail.com"
            />
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="password">
              Password{" "}
            </label>
            <input
              className="form__input"
              type="password"
              id="password"
              {...register("password")}
            />
          </div>
          <button className="form__btn">Login</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
