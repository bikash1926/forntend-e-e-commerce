import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  asyncupdateproduct,
  asyncdeleteproduct,
} from "../../store/actions/productAction";
const DetailsProduct = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const {
    productReducer: { products },
    userReducer: { user },
  } = useSelector((state) => state);
  const product = products?.find((p) => p.id == id);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      image: product?.image,
      title: product?.title,
      price: product?.price,
      description: product?.description,
      category: product?.category,
    },
  });

  const Update = (data) => {
    const updatedProduct = {
      ...product,

      image: data.image,
      title: data.title,
      price: data.price,
      description: data.description,
      category: data.category,
    };

    dispatch(asyncupdateproduct(id, updatedProduct));
    console.log("Updated Product:", updatedProduct);
  };

  const DeleteHandler = () => {
    dispatch(asyncdeleteproduct(id));
    navigate("/shop");
  };

  return product ? (
    <div className="flex flex-col lg:flex-row p-6 justify-between gap-6 mb-20">
      <div className="lg:w-1/2 lg:h-[30rem] flex gap-6 p-4 bg-gray-300 mx-auto shadow-xl sm:w-[52rem] h-[20rem] rounded-lg">
  <img
    className="w-1/2 h-full object-cover rounded-lg p-10"
    src={product.image}
    alt={product.title}
  />
  <div className="flex flex-col gap-2 justify-center w-1/2">
    <h1 className="text-2xl font-bold">{product.title}</h1>
    <h1 className="text-lg text-green-600">₹ {product.price}</h1>
    <p className="text-gray-600 line-clamp-3">{product.description}</p>
    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
      Add to Cart
    </button>
  </div>
</div>

      {user?.isAdmin && (
        <div className="w-full lg:w-1/2 bg-gray-300 p-4 rounded-lg shadow-xl">
          <form
            className="flex flex-col gap-4 justify-center items-center "
            onSubmit={handleSubmit(Update)}
          >
            <input
              type="url"
              {...register("image")}
              placeholder="Enter image url"
              className="border p-2 rounded w-80 text-black font-semibold"
            />

            <input
              type="text"
              {...register("title")}
              placeholder="Title"
              className="border p-2 rounded w-80 text-black font-semibold"
            />

            <input
              type="number"
              {...register("price")}
              placeholder="Price"
              className="border p-2 rounded w-80 text-black font-semibold"
            />

            <textarea
              {...register("description")}
              placeholder="Enter description"
              className="border p-2 rounded w-80 text-black font-semibold"
            />

            <input
              type="text"
              {...register("category")}
              placeholder="Category"
              className="border p-2 rounded w-80 text-black font-semibold"
            />

            <button
              type="submit"
              className="bg-gray-600 text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-700"
            >
              Update Product
            </button>
            <button
              onClick={DeleteHandler}
              className="bg-red-600 ext-white px-6 py-2 font-semibold rounded-lg hover:bg-red-700 "
            >
              Delete
            </button>
          </form>
        </div>
      )}
    </div>
  ) : (
    "loding"
  );
};

export default DetailsProduct;
