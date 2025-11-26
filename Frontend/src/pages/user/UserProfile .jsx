import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  asyncupdateuser,
  asyncdeleteuser,
  asynclogoutuser,
} from "../../store/actions/userAction";

const UserProfile = () => {
  const { user } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      image:user?.image,
      name: user?.name,
      email: user?.email,
      password: user?.password,
      
    },
  });

  const Update = (data) => {
    dispatch(asyncupdateuser(user.id, data));
    console.log(data);
  };
  const LogoutUserHandler = () => {
    dispatch(asynclogoutuser());
    navigate("/login");
  };

  const DeleteHandler = () => {
    dispatch(asyncdeleteuser(user.id));
    console.log("Delete profile clicked");
    navigate("/login");
  };

  return user ? (
    <div className=" flex flex-col lg:flex-row justify-center items-center p-8 mt-2 gap-4 ">
      <div className="bg-gradient-to-r from-[#0f172a]  to-[#334155] shadow-lg rounded-2xl w-[28rem] p-6 flex flex-col items-center h-[35rem] gap-2 ">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 shadow-amber-300 shadow-md">
          <img
            className="w-full h-full object-cover text-3xl text-center align-text-bottom "
            src={user.image}
            alt="User Profile"
          />
        </div>
          <h2
          className={`mt-2 px-4 py-1 rounded-full text-sm font-medium ${
            user.isAdmin
              ? "bg-green-100 text-green-700"
              : "bg-blue-100 text-blue-700"
          }`}
        >
          {user.isAdmin ? "You Are  Admin" : "You Are User"}
        </h2>
         
        <h1 className="text-lg font-semibold text-white mr-20">
          Name : {user.name}
        </h1>
        <h2 className="text-white text-lg font-semibold ml-3">Email: {user.email}</h2>
        
        <button
          onClick={LogoutUserHandler}
          className="mt-5 px-4 py-2 bg-red-400 text-white rounded w-50"
        >
          Logout
        </button>
        <button
          onClick={DeleteHandler}
          className=" px-4 py-2 bg-red-600 text-white rounded w-50"
        >
          Delete Profile
        </button>
      </div>
      <div className="bg-gradient-to-r from-[#0f172a]  to-[#334155] shadow-lg rounded-2xl w-[28rem] p-8 flex flex-col items-center min-h-[35rem] ">
        <h2 className="text-center font-semibold text-2xl text-blue-400"> Update Your Profile</h2>
      <form
        className="flex flex-col lg:mt-15  gap-6 justify-center items-center md:mb-5"
        onSubmit={handleSubmit(Update)}
      >
        <input
          type="text"
          {...register("name")}
          placeholder="name"
          className="border p-2 rounded w-80 text-gray-200  outline-none"
        />

        <input
          type="email"
          {...register("email")}
          placeholder="email"
          className="border p-2 rounded w-80 text-gray-200  outline-none"
        />

        <input
          type="password"
          {...register("password")}
          placeholder="password"
          className="border p-2 rounded w-80 text-gray-200  outline-none"
        />

        <button
          type="submit"
          className=" bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-700 w-80"
        >
          Save Changes
        </button>
      </form>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default UserProfile;
