import { json } from "react-router-dom";
import { toast } from "react-toastify";
const { createSlice } = require('@reduxjs/toolkit');

// const initialState={
//     cartItems:[],
//     cartTotalAmount:0,
//     cartTotalQuantity:0
// };

localStorage.setItem("Testing", JSON.stringify({ name: "vivek", last: "gupta" }))
// fetch from localstorage
const fetchFromLocalStorage = () => {
    let Cart = localStorage.getItem("CartData");
    if (Cart !== undefined) {
        return JSON.parse(localStorage.getItem("CartData"));
    } else {
        return [];
    }
}



const data = JSON.parse(localStorage.getItem('CartData'));
const cartSlice = createSlice({
    name: 'cart',
    initialState: { getCount: 0, getTotal:localStorage.getItem("Total") ? JSON.parse(localStorage.getItem("Total")):0, products: localStorage.getItem("CartData") ? JSON.parse(localStorage.getItem("CartData")) : [] },
    // initialState: { getCount: 0, getTotal: 0, products: data ? data : [] },
    reducers: {
        add(state, action) {
            const num = state.products.findIndex((item) => item.id === action.payload.id);
            console.log("state.product");
            console.log(state.products);
            console.log("state.product");
            // storageInLocalStorage

            if (num >= 0) {
                // alert("Already added!");
                toast.info(`Item Already added to Cart!`, {
                    position: "bottom-left"
                });
            } else {
                // local storage
                // storageInLocalStorage(action.payload);
                console.log("action payload");
                console.log(action.payload);
                console.log("action payload!");
                console.log(action.payload.price);
                state.products.push(action.payload);
                state.getCount++;
                state.getTotal += action.payload.price;
                console.log("price:" + state.getTotal);
                toast.success(`Item Added to Cart...`, {
                    position: "bottom-left"
                });
            }
            localStorage.setItem("Total",JSON.stringify(state.getTotal));
            localStorage.setItem("CartData", JSON.stringify(state.products));
            
        },
        remove(state, action) {
            state.getCount--;
            // return state.products.filter((item)=>item.id!==action.payload);
            state.products = state.products.filter((item) => item.id !== action.payload.id);
            state.getTotal -= action.payload.price;
            console.log("price:" + state.getTotal);
            toast.info(`Item Deleted to Cart...`, {
                position: "bottom-left"
            });
            localStorage.setItem("Total",JSON.stringify(state.getTotal));
            localStorage.setItem("CartData", JSON.stringify(state.products));
        }
    }
});

// extracting actions reducers
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
