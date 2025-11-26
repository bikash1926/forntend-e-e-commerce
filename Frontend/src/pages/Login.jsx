import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncloginuser } from "../store/actions/userAction";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userData = JSON.parse(localStorage.getItem(data.email));
    if (userData) {
      if (userData.password === data.password) {
        console.log(userData.name + " You Are Successfully Logged In");
        dispatch(asyncloginuser(userData));
        navigate("/");
      } else {
        console.log("Email or Password is not matching with our record");
      }
    } else {
      console.log("Email or Password is not matching with our record");
    }
    navigate("/");
  };

  return (
    <>
      <div className="bg-gradient-to-r from-[#0f172a]  to-[#334155] lg:shadow-lg rounded-2xl w-full sm:w-[80%] md:w-[28rem] p-6 flex flex-col justify-center items-center mx-auto ">
        <form
          className=" w-[28rem] p-4 flex flex-col items-center h-[29rem] gap-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-4xl text-white">Login </h2>
          <span className="text-white font-bold h-2 mr-[14rem] ">
            Enter Email
          </span>
          <input
            className="border p-1 rounded w-80"
            type="email"
            {...register("email", { required: true })}
            placeholder="Email"
          />
          {errors.email && (
            <span style={{ color: "red" }}>*Email* is mandatory</span>
          )}
          <span className="text-white font-bold h-2 mr-[12rem] p-2 ">
            Enter Password
          </span>
          <input
            className="border p-1 rounded w-80"
            type="password"
            {...register("password", { required: true })}
            placeholder="Password"
          />
          {errors.password && (
            <span style={{ color: "red" }}>*Password* is mandatory</span>
          )}

          <button className="w-80 translate-y-1 active:scale-x-110 active:scale-y-90 bg-gray-900 p-2 rounded-xl text-white font-bold hover:shadow-amber-600 shadow">
            Login
          </button>
          <p className="text-20 mt-12 ml-50 font-medium">
            New user ?{" "}
            <Link to="/register" className="text-white hover:text-blue-600">
              Register Now
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
