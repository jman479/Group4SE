import {
  COUPON_DETAILS_REQUEST,
  COUPON_DETAILS_SUCCESS,
  COUPON_DETAILS_FAIL,
  COUPON_DETAILS_EXPIRED,
  COUPON_DETAILS_DISABLED
} from "../Constants/CouponConstants";

// CREATE ORDER
export const couponListReducer = (state = {}, action) => {
  switch (action.type) {
    case COUPON_DETAILS_REQUEST:
      console.log("couponListReducer: COUPON_DETAILS_REQUEST");
      return {discount: 0, status: COUPON_DETAILS_REQUEST};
    case COUPON_DETAILS_SUCCESS:
      console.log("couponListReducer: COUPON_DETAILS_SUCCESS: " + action.payload.percentDiscount);
      return {discount: action.payload.percentDiscount, status: COUPON_DETAILS_SUCCESS};
    case COUPON_DETAILS_FAIL:
      console.log("couponListReducer: COUPON_DETAILS_FAIL: " + action.payload);
      return {discount: 0, status: COUPON_DETAILS_FAIL};
    case COUPON_DETAILS_EXPIRED:
      console.log("couponListReducer: COUPON_DETAILS_EXPIRED: " + action.payload);
      return {discount: 0, status: COUPON_DETAILS_EXPIRED};
    case COUPON_DETAILS_DISABLED:
      console.log("couponListReducer: COUPON_DETAILS_DISABLED: " + action.payload);
      return {discount: 0, status: COUPON_DETAILS_DISABLED};
    default:
      return state;
  }
};
