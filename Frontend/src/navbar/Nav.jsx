import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router";
import { asynclogoutuser } from "../store/actions/userAction";
import { FaUser, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";
import { TiLocation } from "react-icons/ti";

const nav = ({ location }) => {
  const LogoutHandler = () => {
    dispatch(asynclogoutuser());
    navigate("/");
  };

  const { user } = useSelector((state) => state.userReducer);
 

  return (
    <nav className="">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex items-center justify-between gap-4">
        <div className="text-lg font-bold">
          <Link to="/"><span className="text-red-500 font-bold text-xl">e</span>-SHOP</Link> 
        </div>
        <div className="flex gap-1 cursor-pointer  font-bold items-center">
          <span className="">{location}</span>
          <span className="text-blue-500 text-xl"><TiLocation /></span>
        </div>

        <div className="relative flex-1 mx-4">
          <form action="">
            <input
              className="w-full border rounded-md py-2 px-4 pr-10 outline-none "
              type="text"
              placeholder="Search Product Here..."
            />
            <FaSearch className="absolute right-3 top-3 text-red-500" />
          </form>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/cart">
            <FaShoppingCart className="text-2xl text-orange-500 hover:text-red-500 transition " />
          </Link>

          {!user ? (
            <>
              <NavLink
                to="/register"
                className="hidden md:block font-medium hover:text-red-500 transition"
              >
                Register
              </NavLink>
              <button className="block md:hidden">
                <FaUser />
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/admin/user-profile"
                className="flex items-center space-x-1 hover:text-red-500 transition"
              >
                <img className="w-8 h-8 rounded-full" src={user.image} alt="" />{" "}
                <span className="font-semibold">{user.name}</span>
              </NavLink>
            </>
          )}
        </div>
      </div>

      {/* Bottom Nav Links */}
      <div className="flex items-center justify-center space-x-6 py-2 text-sm font-bold ">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive
              ? "text-blue-500  "
              : "hover:bg-gray-800 p-2 rounded text-orange-500 font-bold transition duration-500 ease-in-out"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500"
              : "hover:bg-gray-800 p-2 rounded text-orange-500 font-bold transition duration-500 ease-in-out"
          }
        >
          Shop
        </NavLink>
        <NavLink
          to="/categories"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500"
              : "hover:bg-gray-800 p-2 rounded text-orange-500 font-bold transition duration-500 ease-in-out"
          }
        >
          Categories
        </NavLink>

        {/* Show Admin link only if user.isAdmin */}
        {user?.isAdmin && (
          <NavLink
            to="/admin/create-product"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500"
                : "hover:bg-gray-800 p-2 rounded text-orange-500 font-bold transition duration-500 ease-in-out"
            }
          >
            Create Product
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default nav;
