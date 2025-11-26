import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncupdateuser } from "../store/actions/userAction";
import axios from "../api/axiosconfig";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "./ProductCard";

const Products = () => {
  const dispatch = useDispatch();
  //  const products = useSelector((state) => state.productReducer.products);
  const navigate = useNavigate();
  const user = useSelector((state) => state.userReducer.user);
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        `/products?_limit=8&_start=${products.length}`
      );

      if (data.length === 0) {
        setHasMore(false);
      } else {
        setHasMore(true);
        setProducts([...products, ...data]);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const AddCartHandler = (product) => {
    const copyuser = { ...user, cart: [...user.cart] };
    const x = copyuser.cart.findIndex((item) => item.id === product.id);
    console.log(x);
    if (x !== -1) {
      copyuser.cart[x] = {
        id: product.id,
        quantity: copyuser.cart[x].quantity + 1,
      };
    } else {
      copyuser.cart.push({ id: product.id, quantity: 1 });
    }
    console.log(copyuser);
    dispatch(asyncupdateuser(copyuser.id, copyuser));
    navigate("/cart");
  };

  return products.length > 0 ? (
    <div>
      <InfiniteScroll
        dataLength={products.length}
        next={fetchProducts}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className=" lg:mx-30 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-2  ">
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            AddCartHandler={AddCartHandler}
          />
        ))}
      </div>
      </InfiniteScroll>
    </div>
  ) : (
    "loading..."
  );
};

export default Products;
