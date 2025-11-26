import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncregisteruser } from "../store/actions/userAction";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [preview, setPreview] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const existingUser = JSON.parse(localStorage.getItem(data.email));
    if (existingUser) {
      console.log("Email is already registered!");
      alert("Email is already registered!");
    } else {
      const file = data.image[0];
      let imageBase64 = "";
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          imageBase64 = reader.result;

          const userData = {
            id: nanoid(),
            name: data.name,
            email: data.email,
            password: data.password,
            isAdmin: data.isAdmin || false,
            cart: [],
            image: imageBase64, 
          };

          localStorage.setItem(data.email, JSON.stringify(userData));
          alert(`${data.name} has been successfully registered`);
          dispatch(asyncregisteruser(userData));
          navigate("/login");
        };
        reader.readAsDataURL(file);
      }
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r from-[#0f172a] to-[#334155] 
                lg:shadow-lg rounded-2xl 
                lg:w-[28rem] p-6 lg:mx-[35%]
                flex flex-col justify-center items-center lg:h-[41rem] 
                sm:h-[10rem] w-[25rem] mx-[1%] sm:p-1 md:h-[54rem] md:mx-[27%]">
      <h2 className="font-semibold text-2xl text-neutral-200 mb-15">REGISTRATION HERE ® </h2>

      <form
        className="flex flex-col gap-4  w-[50rem]  justify-center items-center  "
        onSubmit={handleSubmit(onSubmit)}
      >
       
<span className="h-2 mb-2 text-white font-thin mr-23 ">Uplode Profile Photo </span>
        <input
          type="file"
          accept="image/*"
          {...register("image", { required: true })}
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) setPreview(URL.createObjectURL(file));
          }}
          className=" w-59 border p-2 rounded text-gray-200  outline-none"
        />
        <span className="h-2 mb-2 text-white font-thin mr-23 ">Enter Your Name </span>
        <input
         className=" border p-2 rounded w-59 text-gray-200  outline-none"
          type="text"
          {...register("name", { required: true })}
          placeholder="Name"
        />
        {errors.name && (
          <span style={{ color: "red" }}>*Name* is mandatory</span>
        )}
        <span className="h-2 text-white font-thin mr-23 mb-2">Enter Your Email</span>
        <input
         className=" border p-2 rounded w-59 text-gray-200  outline-none "
          type="email"
          {...register("email", { required: true })}
          placeholder="Email"
        />
        {errors.email && (
          <span style={{ color: "red" }}>*Email* is mandatory</span>
        )}
      <span className="h-2 text-white font-thin mr-19 mb-2">Enter Your Password</span>
        <input
         className=" border p-2 rounded w-59 text-gray-200  outline-none"
          type="password"
          {...register("password", { required: true })}
          placeholder="Password"
        />
        {errors.password && (
          <span 
          style={{ color: "red" }}>*Password* is mandatory</span>
        )}

        <div className="flex items-center gap-2 mr-18">
          <input type="checkbox" {...register("isAdmin")} id="isAdmin" />
          <label htmlFor="isAdmin">Register as Admin</label>
        </div>

        <button className="w-70 bg-gray-500 text-white p-2 rounded-2xl">
          Register
        </button>

        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </form>
      </div>
    </>
  );
};

export default Register;
