import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createOrder } from "../Redux/Actions/OrderActions";
import { ORDER_CREATE_RESET } from "../Redux/Constants/OrderConstants";
import { listCouponDetails } from "../Redux/Actions/couponActions";
import Header from "./../components/Header";
import Message from "./../components/LoadingError/Error";
const PlaceOrderScreen = ({ history }) => {
  window.scrollTo(0, 0);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const coupon = useSelector((state) => state.coupon);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
    console.log(useSelector((state) => state));
  // Coupon

  // Calculate Price
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
    };
  const shippingTaxPrice = (num) => {
    return (num + 15).toFixed(2);
    };
  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 15); // if the price is more than 100 shipping price is 0 if false shipping price is 15
    if (cart.shippingPrice < 15) {
        cart.taxPrice = addDecimals(Number((0.0825 * cart.itemsPrice).toFixed(2))); // 8.25 percent tax applied excluding free shipping
    }
    else {
        var newTaxPrice = shippingTaxPrice(Number(cart.itemsPrice));  // add 15 before tax applied
        cart.taxPrice = addDecimals(Number((0.0825 * newTaxPrice).toFixed(2))); // 8.25 percent tax applied including shipping
    }
  //cart itemsPrice needs to deduct the appropriate coupon discount amount , BEFORE tax application
  cart.totalPrice = (
    Number(cart.itemsPrice) - ((Number(coupon.discount) / 100) * Number(cart.itemsPrice)) + Number(cart.shippingPrice) + Number(cart.taxPrice)
  ).toFixed(2);

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [history, dispatch, success, order]);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
        sizeChosen: cart.sizeChosen,
      })
    );
  };

  //coupon string entry validity checks & coupon discount amount application
  const couponCodeHandler = (e) => {
    // console.log(e);
    const enteredCode = document.getElementById('couponCode').value;
    const validatedRegex = new RegExp("^[A-Za-z]+$");
    
    // regex validation checking
    if (validatedRegex.test(enteredCode)) {
      //success, we need then validate their enteredCode exists within our already available coupon codes.
      //and now we could add our own salt hash to the provided input to further extend security.
      //now we need to update and set the coupon savings variable that is applied to total cost

      dispatch(listCouponDetails(enteredCode));

      return true;
    } else {
      //failed tests
      alert("Invalid Coupon Code")
      //clear invalid coupon input
      document.getElementById('couponCode').value = '';
      
      return false;
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row  order-detail">
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row ">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Customer</strong>
                </h5>
                <p>{userInfo.name}</p>
                <p>{userInfo.email}</p>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-truck-moving"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Order info</strong>
                </h5>
                <p>Shipping: {cart.shippingAddress.country}</p>
                <p>Payment method: {cart.paymentMethod}</p>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Deliver to</strong>
                </h5>
                <p>
                  Address: {cart.shippingAddress.city},{" "}
                  {cart.shippingAddress.address},{" "}
                  {cart.shippingAddress.postalCode}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row order-products justify-content-between">
          <div className="col-lg-8">
            {cart.cartItems.length === 0 ? (
              <Message variant="alert-info mt-5">Your cart is empty</Message>
            ) : (
              <>
                
                {cart.cartItems.map((item, index) => (
                  <div className="order-product row" key={index}>
                    <div className="col-md-3 col-6">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="col-md-5 col-6 d-flex align-items-center">
                      <Link to={`/products/${item.product}`}>
                        <h6>{item.name}</h6>
                      </Link>
                    </div>
                    <div className="mt-3 mt-md-0  col-6  d-flex align-items-center flex-column justify-content-center ">
                      <h4>QUANTITY</h4>
                      <h6>{item.qty}</h6>
                    </div>
                    <div className="mt-3 mt-md-0 col-md-2 col-6  d-flex align-items-center flex-column justify-content-center ">
                      <h4>SIZE</h4>
                      <h6>{item.sizeChosen}</h6>
                    </div>
                    <div className="mt-3 mt-md-0 col-md-2 col-6 align-items-end  d-flex flex-column justify-content-center ">
                      <h4>SUBTOTAL</h4>
                      <h6>${item.qty * item.price}</h6>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
          {/* total */}
          <div className="col-lg-3 d-flex flex-column mt-5 subtotal-order">
               <label className="cb1" for="cb1">Enter Coupon Code?</label>
                   <input type="checkbox" style={{ display: 'none' }} id="cb1"/>
                    <div id="divMenu1">
                      Coupon Code: <input type="text" id="couponCode"/>
                      <button className="neon-button2" type="submit" onClick={couponCodeHandler}>
                         Submit Coupon
                      </button>
                    </div>
                    
            <table className="table table-bordered">
               
              <tbody>
                <tr>
                  <td>
                    <strong>Products</strong>
                  </td>
                  <td>${cart.itemsPrice}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Shipping</strong>
                  </td>
                  <td>${cart.shippingPrice}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Tax</strong>
                  </td>
                  <td>${cart.taxPrice}</td>
                </tr> 
                {/* coupon */}
                <tr> 
                  <td>
                    <strong>Coupon Savings</strong>
                  </td>
                  <td>${ ((Number(coupon.discount) / 100) * Number(cart.itemsPrice)).toFixed(2) }</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td>${cart.totalPrice}</td>
                </tr>
              </tbody>
            </table>
            {cart.cartItems.length === 0 ? null : (
              <button className="neon-button" type="submit" onClick={placeOrderHandler}>
                PLACE ORDER
              </button>
            )}
            {error && (
              <div className="my-3 col-12">
                <Message variant="alert-danger">{error}</Message>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrderScreen;