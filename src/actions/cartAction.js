import Axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstants";

export const addToCart = (productId, qty) => async (dispatch, getState) =>{
    const {data} = await Axios.get(`/api/products/${productId}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            name: data.name,
            image: data.image,
            address: data.address,
            countInStock: data.countInStock,
            product: data._id,
            qty,
        },
    });
    console.log(data.name);
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};