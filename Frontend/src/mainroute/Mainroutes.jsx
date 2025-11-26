import React, { use } from "react";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { useSelector } from "react-redux";
import Unauthwrapper from "./Unauthwrapper";
import Categories from "../pages/Categories";
import CategoryProducts from "../pages/CategoryProducts";
const CreateProudust = lazy(() => import("../pages/admin/CreateProudust"));
const UserProfile = lazy(() => import("../pages/user/UserProfile "));
const DetailsProduct = lazy(() => import("../pages/admin/DetailsProduct"));
const PageNotfound = lazy(() => import("../pages/PageNotfound"));
const AuthWrapper = lazy(() => import("./AuthWrapper"));
const Login = lazy(() => import("../pages/Login"));
const Products = lazy(() => import("../pages/Products"));
const Register = lazy(() => import("../pages/Register"));
const Home = lazy(() => import("../pages/Home"));

const Cart = lazy(() => import("../pages/Cart"));

const Mainroutes = () => {
  const { user } = useSelector((state) => state.userReducer);
  return (
    <Routes>
      <Route
        path="/"
        element={
         <AuthWrapper>
            <Home />
          </AuthWrapper>
        }
      />
      <Route
        path="/shop"
        element={
          <AuthWrapper>
            <Products />
          </AuthWrapper>
        }
      />
      <Route
        path="/login"
        element={
          <Unauthwrapper>
            <Login />
          </Unauthwrapper>
        }
      />
      <Route
        path="/register"
        element={
          <Unauthwrapper>
            <Register />
          </Unauthwrapper>
        }
      />
      <Route
        path="/categories"
        element={
          <AuthWrapper>
            <Categories />
          </AuthWrapper>
        }
      />

      <Route
        path="/categories/:category"
        element={
          <AuthWrapper>
            <CategoryProducts />
          </AuthWrapper>
        }
      />
      <Route
        path="/admin/create-product"
        element={
          <AuthWrapper>
            <CreateProudust />
          </AuthWrapper>
        }
      />
      <Route
        path="/admin/user-profile"
        element={
          <AuthWrapper>
            <UserProfile />
          </AuthWrapper>
        }
      />
      <Route
        path="/product/:id"
        element={
          <AuthWrapper>
            <DetailsProduct />
          </AuthWrapper>
        }
      />
      <Route
        path="/admin/product/:id"
        element={
          <AuthWrapper>
            <DetailsProduct />
          </AuthWrapper>
        }
      />
      <Route
        path="/cart"
        element={
          <AuthWrapper>
            <Cart />
          </AuthWrapper>
        }
      />

      <Route path="*" element={<PageNotfound />} />
    </Routes>
  );
};

export default Mainroutes;
