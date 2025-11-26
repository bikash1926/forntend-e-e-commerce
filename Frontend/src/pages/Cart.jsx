import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { asyncupdateuser } from "../store/actions/userAction";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  const user = useSelector((state) => state.userReducer.user);
  const increaseQuantity = (productId, index) => {
    const copyuser = { ...user, cart: [...user.cart] };

    if (index !== -1) {
      copyuser.cart[index] = {
        id: productId,
        quantity: copyuser.cart[index].quantity + 1,
      };
        console.log(copyuser);
        dispatch(asyncupdateuser(copyuser.id, copyuser));
    }
  };
  const decreaseQuantity = (productId, index) => {
    const copyuser = { ...user, cart: [...user.cart] };
    if(user.cart[index].quantity > 0){
        copyuser.cart[index] = {
          id: productId,
          quantity: copyuser.cart[index].quantity - 1,
        };
    }
    else{
        copyuser.cart.splice(index, 1);
    }
    console.log(copyuser);
    dispatch(asyncupdateuser(copyuser.id, copyuser));
  };

  const cartitems = user?.cart.map((item, index) => {
    const product = products.find((prod) => prod.id === item.id);
    if (!product) {
    return (
      <li
        className="flex items-center justify-between p-4 border-b text-red-500"
        key={item.id}
      >
        Product not found
      </li>
    );
  }

  return (
    <li
      className="flex items-center justify-between p-4  bg-blue-100 gap-5 mt-2 rounded-2xl hover:scale-105 transition-transform duration-200 "
      key={item.id}
    >
      <img
        className="h-16 object-cover p-2"
        src={product.image}
        alt={product.title}
      />
      <div>
        <h2 className="font-semibold">{product.title?.slice(0, 17)}..</h2>
        <h2 className="text-gray-600 mb-2">₹{product.price}</h2>

        <span className=" font-semibold bg-gray-300  rounded">
         <span className="px-2 py-2 ">Quantity:</span> {" "}
          <button onClick={() => decreaseQuantity(item.id, index)}> -  </button>{"  "}
          {item.quantity}{" "}
          <button onClick={() => increaseQuantity(item.id, index)}> + </button>
        </span>
      </div>
      <div className="font-semibold ">

        Total: ₹{(product.price * item.quantity).toFixed(2)}

      </div>
    </li>
  );
});
 const totalPrice = user?.cart?.reduce((total, item) => {
    const product = products.find((prod) => prod.id === item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);

  return (
    <div className="p-4 lg:mx-20  ">
      {cartitems && cartitems.length > 0 ? (
        <>
          <ul>{cartitems}</ul>
          <div className="text-right font-bold text-lg mt-4 text-green-500 ">
           <span className="text-black">Total: ₹</span>{totalPrice.toFixed(2)}
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500">Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;