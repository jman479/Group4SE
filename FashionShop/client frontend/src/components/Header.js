import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Actions/userActions";

const Header = () => {
  const [keyword, setKeyword] = useState();
  const dispatch = useDispatch();
  let history = useHistory();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };
  return (
    <div>

      {/* Header */}
      <div className="header">
        <div className="container">
          {/* MOBILE HEADER */}
          <div className="mobile-header">
            <div className="container ">
              <div className="row ">
                <div className="col-0 d-flex align-items-center">
                  <Link className="navbar-brand" to="/">
                    <img alt="logo" src="/images/headerlogosmall.png" />
                  </Link>
                </div>
                <div className="col-0 d-flex align-items-start Login-Register">
                  {userInfo ? (
                    <div className="btn-group">
                      <button type="button" className="name-button dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-user"></i>
                      </button>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/profile">
                          Profile
                        </Link>

                        <Link className="dropdown-item" to="#" onClick={logoutHandler} >
                          Logout
                        </Link>
                      </div>
                    </div>
                  ) : (

                    <div className="btn-group">
                      <button type="button" className="name-button dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-user"></i>
                      </button>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/login">
                          Login
                        </Link>

                        <Link className="dropdown-item" to="/register">
                          Register
                        </Link>
                      </div>
                  <div className="d-flex align-items-center">
                       <a className="headerSocial" href="https://facebook.com" target="_blank" rel="noreferrer">
                         <i className="headerSocial fab fa-facebook"></i>
                       </a>
                       <a className="headerSocial" href="https://instagram.com" target ="_blank" rel="noreferrer">
                         <i className="headerSocial fab fa-instagram"></i>
                       </a>
                       <a className="headerSocial" href="https://twitter.com" target="_blank" rel="noreferrer">
                         <i className="headerSocial fab fa-twitter"></i>
                       </a>
                       <a className="headerSocial" href="http://linkedin.com" target="_blank" rel="noreferrer">
                         <i className="headerSocial fab fa-linkedin"></i>
                       </a>
                       <a className="headerSocial" href="https://github.com/Bruttix/fsDEV" target ="_blank" rel="noreferrer">
                         <i className="headerSocial fab fa-github"></i>
                       </a>
                    <form onSubmit={submitHandler} className="input-group">
                      <input
                        type="search"
                        className="neon-button3"
                        placeholder="Product Search "
                        onChange={(e) => setKeyword(e.target.value)}
                      />
                      <button type="submit" className="neon-button3">
                        search
                      </button>
                    </form>
                  </div>
                    </div>
                  )}

                  <Link to="/cart" className="cart-mobile-icon">
                    <i className="fas fa-shopping-bag"></i>
                    <span className="badge">{cartItems.length}</span>
                  </Link>
                </div>
                 
                
              </div>
            </div>
          </div>

          {/* PC HEADER */}
          <div className="pc-header">
            <div className="row">
              <div className="col-md-1 d-flex align-items-center">
                <Link to="/">
                  <img className="headerlogo" alt="logo" src="/images/headerlogosmall.png" />
                </Link>
              </div>
                
              <div className="col-md-6 col-8 d-flex align-items-center">
                   <a className="headerSocial" href="https://facebook.com" target="_blank" rel="noreferrer">
                     <i className="headerSocial fab fa-facebook"></i>
                   </a>
                   <a className="headerSocial" href="https://instagram.com" target ="_blank" rel="noreferrer">
                     <i className="headerSocial fab fa-instagram"></i>
                   </a>
                   <a className="headerSocial" href="https://twitter.com" target="_blank" rel="noreferrer">
                     <i className="headerSocial fab fa-twitter"></i>
                   </a>
                   <a className="headerSocial" href="http://linkedin.com" target="_blank" rel="noreferrer">
                     <i className="headerSocial fab fa-linkedin"></i>
                   </a>
                   <a className="headerSocial" href="https://github.com/Bruttix/fsDEV" target ="_blank" rel="noreferrer">
                     <i className="headerSocial fab fa-github"></i>
                   </a>
                <form onSubmit={submitHandler} className="input-group">
                  <input
                    type="search"
                    className="neon-button3"
                    placeholder="Product Search "
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <button type="submit" className="neon-button3">
                    search
                  </button>
                </form>
              </div>
              <nav id="navbar" className="col-md-6 col-8 d-flex align-items-center">
                <div className="nav-wrapper">
                  <ul id="menu">
                    <li><a href="/Custom">Custom</a></li>
                    <div className="dropdown">
                       <li><a className="dropbtn" href="/GirlsScreen">Girls</a></li>
                          <div className="dropdown-content">
                            <a href="/GirlsScreen">Shirts</a>
                            <a href="/GirlsScreen">Shorts</a>
                            <a href="/GirlsScreen">Trousers</a>
                            <a href="/GirlsScreen">Jackets</a>
                            <a href="/GirlsScreen">Headwear</a>
                            <a href="/GirlsScreen">Accessories</a>
                          </div>
                    </div>
                    <div className="dropdown2">
                       <li><a className="dropbtn2" href="/GuysScreen">Guys</a></li>
                          <div className="dropdown-content2">
                            <a href="/GuysScreen">Shirts</a>
                            <a href="/GuysScreen">Shorts</a>
                            <a href="/GuysScreen">Trousers</a>
                            <a href="/GuysScreen">Jackets</a>
                            <a href="/GuysScreen">Headwear</a>
                            <a href="/GuysScreen">Accessories</a>
                          </div>
                    </div>
                    <div className="dropdown3">
                       <li><a className="dropbtn3" href="/Accessories">Accessories</a></li>
                          <div className="dropdown-content3">
                            <a href="/Accessories">Bags</a>
                            <a href="/Accessories">Jewelry</a>
                            <a href="/Accessories">Backpacks</a>
                            <a href="/Accessories">Underwear</a>
                          </div>
                    </div>
                    <li><a href="/About">About</a></li>
                  </ul>
               </div>
              </nav>
              <div className="col-md-5 d-flex align-items-center justify-content-end Login-Register">
                {userInfo ? (
                  <div className="btn-group">
                    <button
                      type="button"
                      className="neon-button3"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Hi, {userInfo.name}
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>

                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={logoutHandler}
                      >
                        Logout
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    <Link className="neon-button2"to="/register">Register</Link>
                    <Link className="neon-button2"to="/login">Login</Link>
                  </>
                )}
                    
                <Link to="/cart">
                  <i className="fas fa-shopping-bag"></i>
                  <span className="badge">{cartItems.length}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
       Sub Header & navbar 
      <div className="Announcement ">
        <div className="container">
            <div>
              <ul className="headerNavBar">
                <li><a href="/GirlsScreen" data-text="Girls">Girls</a></li>
                <li><a href="/GuysScreen" data-text="Guys">Guys</a></li>
                <li><a href="/Accessories" data-text="Accessories">Accessories</a></li>
                <li><a href="/About" data-text="About">About</a></li>
                <li><a href="/Custom" data-text="Contact">Contact</a></li>
              </ul>
            </div>
        </div>
      </div>
      
    </div>
  );
};

export default Header;
