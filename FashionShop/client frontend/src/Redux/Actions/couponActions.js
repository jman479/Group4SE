import {
  COUPON_DETAILS_REQUEST,
  COUPON_DETAILS_SUCCESS,
  COUPON_DETAILS_FAIL,
  COUPON_DETAILS_EXPIRED,
  COUPON_DETAILS_DISABLED
} from "../Constants/CouponConstants";
import axios from "axios";

// SINGLE COUPON
export const listCouponDetails = (code) => async (dispatch, getState) => {
  try {
    dispatch({type: COUPON_DETAILS_REQUEST});

    const { data } = await axios.get(`${URL}/api/coupons/${code}`);

    if (data.isEnabled === false) {
      // isEnabled is false, coupon is disabled
      dispatch({
        type: COUPON_DETAILS_DISABLED,
        payload: `Code: ${data.code} is disabled`
      });
    } 
    else if (new Date() >= new Date(data.expirationDate)) {
      // Create duplicate record of data
      let updatedCoupon = {
        code: data.code, 
        expirationDate: data.expirationDate, 
        percentDiscount: data.percentDiscount,
        isEnabled: true
      };
      // Since coupon is expired, set isEnabled to false and update the record
      try {
        await axios.put(`${URL}/api/coupons/${code}`, updatedCoupon);
      } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        dispatch({type: COUPON_DETAILS_FAIL, payload: message});
      }
      // Finally dispatch
      dispatch({
        type: COUPON_DETAILS_EXPIRED,
        payload: `Code: ${data.code} has expired on ${data.expirationDate}`
      });
    } 
    else {
      // Create duplicate record of data
      let updatedCoupon = {
        code: data.code, 
        expirationDate: data.expirationDate, 
        percentDiscount: data.percentDiscount,
        isEnabled: true
      };
      // Since coupon is going to be used, set isEnabled to false and update the record
      try {
        await axios.put(`${URL}/api/coupons/${code}`, updatedCoupon);
      } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        dispatch({type: COUPON_DETAILS_FAIL, payload: message});
      }
      // valid coupon has been received, dispatch
      dispatch({
      type: COUPON_DETAILS_SUCCESS, 
      payload: data
      });
    }

  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    dispatch({type: COUPON_DETAILS_FAIL, payload: message});
  }
};
