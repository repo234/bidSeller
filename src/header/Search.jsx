import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../asserts/Logo.png";

const Search = () => {
  const handleText = (e) => {
    const searchText = e.target.value();
  };

  return (
    <section className="search">
      <div className="container md:w-[50%] c_flex">
        <div className="search-box   f_flex">
          <i className="fa fa-search"></i>
          <input
            type="text"
            placeholder="Search and hit enter..."
            onChange={() => {
              handleText();
            }}
          />
          <button className="py-2 px-4 rounded-r-full border">Search</button>
        </div>
        <div className="icon f_flex width cart  span ">
          <i className="fa fa-user icon-circle"></i>
        </div>
       
      </div>
    </section>
  );
};

export default Search;
