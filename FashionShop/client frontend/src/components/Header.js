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
                <div className="col-6 d-flex align-items-center">
                  <Link className="navbar-brand" to="/">
                    <img alt="logo" src="/images/headerlogosmall.png" />
                  </Link>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-end Login-Register">
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
                        <i class="fas fa-user"></i>
                      </button>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/login">
                          Login
                        </Link>

                        <Link className="dropdown-item" to="/register">
                          Register
                        </Link>
                      </div>
                    </div>
                  )}

                  <Link to="/cart" className="cart-mobile-icon">
                    <i className="fas fa-shopping-bag"></i>
                    <span className="badge">{cartItems.length}</span>
                  </Link>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <form onSubmit={submitHandler} className="input-group">
                    <input type="search" className="form-control rounded search" placeholder="Search" onChange={(e) => setKeyword(e.target.value)} />
                    <button type="submit" className="neon-button3">
                      search
                    </button>
                  </form>
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
                   <a className="headerSocial" href="about">
                     <i class="headerSocial fab fa-facebook"></i>
                   </a>
                   <a className="headerSocial" href="about">
                     <i class="headerSocial fab fa-instagram"></i>
                   </a>
                   <a className="headerSocial" href="about">
                     <i class="headerSocial fab fa-twitter"></i>
                   </a>
                   <a className="headerSocial" href="about">
                     <i className="headerSocial fab fa-linkedin"></i>
                   </a>
                   <a className="headerSocial" href="about">
                     <i class="headerSocial fab fa-github"></i>
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
                <div class="nav-wrapper">
                  <ul id="menu">
                   <li><a href="/GirlsScreen">Girls</a></li>
                   <li><a href="/GuysScreen">Guys</a></li>
                   <li><a href="/Accessories">Accessories</a></li>
                   <li><a href="/About">About</a></li>
                   <li><a href="/Custom">Custom</a></li>
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
                    <Link class="neon-button2"to="/register">Register</Link>
                    <Link class="neon-button2"to="/login">Login</Link>
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
      {/* Sub Header & navbar */}
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
