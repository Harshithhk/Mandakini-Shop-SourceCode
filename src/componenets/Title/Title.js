import React, { useState } from "react";
import "./Title.css";
import SearchBar from "./SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <div className="title">
      <h1>
        <Link to="./">
          <a href=""> MANDAKINI STORES</a>
        </Link>
      </h1>

      <SearchBar />
      <ul>
        <li>Login</li>
        <li>SignUp</li>
      </ul>
    </div>
  );
};

export default Title;
