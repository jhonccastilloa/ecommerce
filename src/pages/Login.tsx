import React from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import axios from "axios";

interface Login {
  email: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit, reset } = useForm<Login>();

  const submit: SubmitHandler<Login> = (data) => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/users/login";

    axios
      .post(URL, data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.data.token);
      })
      .catch((err) => console.log(err));
    console.log(data);
  };
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
