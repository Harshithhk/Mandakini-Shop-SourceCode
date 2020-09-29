import React from "react";
import "./TestCategory.css";

import { FaAngleRight } from "react-icons/fa";
import { FaAppleAlt } from "react-icons/fa";
// import App from "../App";

const Categories = () => {
  return (
    <div className="Categories">
      <div className="CatTitle">
        <h1>Categories</h1>
      </div>
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Cras justo odio
          <span class="badge badge-primary badge-pill">14</span>
          <FaAngleRight className="Fa" />
          <div className="CatList">
            {" "}
            <h1>First</h1>
          </div>
        </li>

        <li class="list-group-item d-flex justify-content-between align-items-center">
          Dapibus ac facilisis in
          <span class="badge badge-primary badge-pill">2</span>
          <FaAngleRight className="Fa" />
          <div className="CatList">
            <h1>second</h1>
          </div>
        </li>

        <li class="list-group-item d-flex justify-content-between align-items-center">
          Morbi leo risus
          <span class="badge badge-primary badge-pill">1</span>
          <FaAngleRight className="Fa" />
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          {/* <FaAppleAlt className="Faleft" /> */}
          Cras justo odio
          <span class="badge badge-primary badge-pill">14</span>
          <FaAngleRight className="Fa" />
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          {/* <FaAppleAlt className="Faleft" /> */}
          Cras justo odio
          <span class="badge badge-primary badge-pill">14</span>
          <FaAngleRight className="Fa" />
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          {/* <FaAppleAlt className="Faleft" /> */}
          Cras justo odio
          <span class="badge badge-primary badge-pill">4</span>
          <FaAngleRight className="Fa" />
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          {/* <FaAppleAlt className="Faleft" /> */}
          Cras justo odio
          <span class="badge badge-primary badge-pill">25</span>
          <FaAngleRight className="Fa" />
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          {/* <FaAppleAlt className="Faleft" /> */}
          Cras justo odio
          <span class="badge badge-primary badge-pill">8</span>
          <FaAngleRight className="Fa" />
        </li>
      </ul>
    </div>
  );
};

export default Categories;
