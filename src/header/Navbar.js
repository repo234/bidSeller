import React, { useState } from "react";
import logo from "../asserts/Logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(false);
  const auth = useSelector((state) => state.user.auth);
  const [category, setCategory] = useState(false);
  const loggedOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("persist:root");
    window.location.reload();
  };

  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="catgrories  d_flex">
            <div className=" items-center flex h-full  relative">
              <div className=" w-[50px] md:flex-shrink-0">
                <img src={logo} alt="loding..." />
              </div>
              <div>
                <h1 className=" mr-4 text-2xl font-bold sm:text-3xl text-orange">
                  BidBazaar
                </h1>
              </div>
            </div>
          </div>
          <div className="nava">
            <div className="md:hidden nava  ">
              <div
                className="toggle"
                onClick={() => setMobileMenu(!MobileMenu)}
              >
                {MobileMenu ? (
                  <i className=" fas fa-times close home-btn"></i>
                ) : (
                  <i className="fas fa-bars open"></i>
                )}
              </div>
            </div>
            <div>
              <ul
                className={
                  MobileMenu
                    ? " bg-grey nav-as-MobileMenu"
                    : "a flex capitalize "
                }
                onClick={() => setMobileMenu(false)}
              >
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                {auth ? (
                  <>
                    {" "}
                    <li>
                      <Link to="/newProduct">Add product</Link>
                    </li>
                    <div className="flex">
                      <li>
                        <Link to="/history">History</Link>
                      </li>

                      <li onClick={loggedOut}>
                        <Link to="/">logout</Link>
                      </li>
                    </div>
                  </>
                ) : (
                  <>
                    {" "}
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <div className="flex">
                      <li>
                        <Link to="/login">login</Link>
                      </li>
                      <li>
                        <Link to="/signup">sign up</Link>
                      </li>
                    </div>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
