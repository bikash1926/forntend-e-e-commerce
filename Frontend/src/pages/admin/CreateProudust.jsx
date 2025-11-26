import React from 'react'
import { useForm } from "react-hook-form";
import { nanoid } from "@reduxjs/toolkit";
import { Link ,useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux"
import { asynccreateproduct } from "../../store/actions/productAction";

const CreateProudust = () => {
    const dispatch = useDispatch()
const navigate = useNavigate()

      const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
      const onSubmit = (product) => {
        product.id = nanoid();
         dispatch(asynccreateproduct(product));

        console.log(product)
        navigate("/shop")
        
      };

  return (
    <div className='bg-gradient-to-r from-[#0f172a]  to-[#334155] lg:shadow-lg rounded-2xl w-full sm:w-[80%] md:w-[28rem] p-6 flex flex-col justify-center items-center mx-auto mb-25 mt-12 '>
      <form className="w-[28rem] p-4 flex flex-col items-center h-[29rem] gap-8" onSubmit={handleSubmit(onSubmit)}>
        <input
            type="url"
            {...register("img", { required: true })}
            placeholder='enter your image url'
             className="border p-1 rounded w-80 text-white font-semibold"
          />
          <input
            type="text"
            {...register("title", { required: true })}
            placeholder="title"
             className="border p-1 rounded w-80 text-white font-semibold"
          />
          {errors.name && (
            <span style={{ color: "red" }}>*title* is mandatory</span>
          )}
          <input
            type="number"
            {...register("price", )}
            placeholder="Price"
             className="border p-1 rounded w-80 text-white font-semibold"
          />
          {errors.email && (
            <span style={{ color: "red" }}>*Price* is mandatory</span>
          )}

          <textarea 
          className="border p-1 rounded w-80 text-white font-semibold"
          {...register("dec")} placeholder='enter description here'>
          </textarea>
           <input
            type="text"
            {...register("category", { required: true })}
            placeholder="catagory"
             className="border p-1 rounded w-80 text-white font-semibold"
          />

          <button className="w-80 translate-y-1 active:scale-x-110 active:scale-y-90 bg-gray-900 p-2 rounded-xl text-white font-bold hover:shadow-amber-600 shadow">
            CreateProudust
          </button>
         
        </form>
    </div>
  )
}
export default CreateProudust;
