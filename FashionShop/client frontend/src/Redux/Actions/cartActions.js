import URL from "../Url";
import axios from "axios";
import {
  CART_ADD_ITEM,
  CART_SIZE_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
} from "../Constants/CartConstants";

// ADD TO CART
export const addToCart = (id, qty, sizeChosen) => async (dispatch, getState) => {
    const { data } = await axios.get(`${URL}/api/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      sizeChosen,
      countInStock: data.countInStock,
      sizeInStockXS: data.sizeInStockXS,
      sizeInStockS: data.sizeInStockS,
      sizeInStockM: data.sizeInStockM,
      sizeInStockL: data.sizeInStockL,
      sizeInStockXL: data.sizeInStockXL,
      qty
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// SIZE SELECTED FOR CART 
export const sizeToCart = (id, sizeChosen , qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`${URL}/api/products/${id}`);

    dispatch({
        type: CART_SIZE_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            qty,
            countInStock: data.countInStock,
            sizeInStockXS: data.sizeInStockXS,
            sizeInStockS: data.sizeInStockS,
            sizeInStockM: data.sizeInStockM,
            sizeInStockL: data.sizeInStockL,
            sizeInStockXL: data.sizeInStockXL,
            sizeChosen
        },
    });

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// REMOVE PRODUCT FROM CART
export const removefromcart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// SAVE SHIPPING ADDRESS
export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });

  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

// SAVE PAYMENT METHOD
export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  });

  localStorage.setItem("paymentMethod", JSON.stringify(data));
};
