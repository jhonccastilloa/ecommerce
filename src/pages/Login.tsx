import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Login {
  email: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit, reset } = useForm<Login>();
  const [isLogged, setIsLogged] = useState(false);

  const navigate=useNavigate()
  const submit: SubmitHandler<Login> = (data) => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/users/login";

    axios
      .post(URL, data)
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        setIsLogged(true);
        navigate('/')
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

  console.log(isLogged);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogged(false);
  };
  if (isLogged) {
    return (
      <div>
        <h1>User Logged ✔</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" {...register("email")} />
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input type="text" id="password" {...register("password")} />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
