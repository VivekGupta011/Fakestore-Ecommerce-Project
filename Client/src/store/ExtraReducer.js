import { json } from "react-router-dom";
import { toast } from "react-toastify";
import axios from 'axios';
const { createSlice } = require('@reduxjs/toolkit');

// const initialState={
//     cartItems:[],
//     cartTotalAmount:0,
//     cartTotalQuantity:0
// };
const userReducer = createSlice({
    name: 'user',
    // initialState: { getCount: 0, getTotal: 0, products: localStorage.getItem("cartItems") ? [JSON.parse(localStorage.getItem("cartItems"))] : [] },
    initialState: { isAuthorized:false },
    reducers: {
        setAuthentication(state, action) {
           state.isAuthorized=action.payload;
        }
    }
});

// extracting actions reducers
export const { setAuthentication } = userReducer.actions;

export const isAuthenticated = () =>{
  return async (dispatch) => {
    axios.get(`/api/auth`,{withCredentials:true}).then((res)=>{
      if(res.status===200){
        if(res.data.authorized)
          dispatch(setAuthentication(true));
        else
          dispatch(setAuthentication(false));
      }
    }).catch(err=>console.log(err));
  }
}
export const logout = () => {
  return async function logOutThunk(dispatch){
    axios.get(`/api/logout`,{withCredentials:true}).
    then(res=>{
      if(res.status===200){
        console.log("Logged out");
        dispatch(setAuthentication(false));
      }
    }).catch(err=>{
      console.log(err);
    })
  }
}

export default userReducer.reducer;
