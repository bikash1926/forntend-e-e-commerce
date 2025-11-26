

import axios from "../../api/axiosconfig";
import { loadUser, removeuser } from "../redusers/userSlice";

export const asynccurrentuser =  (user) =>  async(dispatch, getState) => {
  try {
   const user = JSON.parse(localStorage.getItem("user"))
   if(user) dispatch(loadUser(user))
   else console.log("user not logedin")
  } catch (error) {
    
  }
}

export const asynclogoutuser =  () =>  async(dispatch, getState) => {
  try {
   localStorage.removeItem("user")
   dispatch(removeuser())
   console.log("user logout")
  } catch (error) {
    
  }
} 

export const asyncloginuser =  (user) =>  async(dispatch, getState) => {
  try {
    const {data}  = await axios.get( `/user?email=${user.email}&password=${user.password}`, user);
    localStorage.setItem("user", JSON.stringify(data[0]))
    dispatch(asynccurrentuser())
  } catch (error) {
    console.log(error)
    
  }
} 

export const asyncregisteruser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/user",user)
    console.log(res)
  } catch (error) {
    console.error("Failed to fetch users:", error);
  }
};

export const asyncupdateuser = (id,user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.patch("/user/" + id, user);
    localStorage.setItem("user", JSON.stringify(data));
    dispatch(loadUser(data));
    console.log(data,"User updated successfully");
  } catch (error) {
    console.error("Failed to fetch users:", error);
  }
};
export const asyncdeleteuser = (id) => async (dispatch, getState) => {
  try {
    await axios.delete("/user/" + id);
    localStorage.removeItem("user");
    dispatch(removeuser());
    console.log("User deleted successfully");
  } catch (error) {
    console.error("Failed to fetch users:", error);
  }
};