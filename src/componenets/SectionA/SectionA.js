import React from "react";
import "./SectionA.css";
import Hero from "./Hero.jpeg";
import Hero2 from "./Hero2.jpeg";
import Carousel from "react-bootstrap/Carousel";
import { GoLocation } from "react-icons/go";
import { MdLocationOn } from "react-icons/md";
import { MdCall } from "react-icons/md";

const SectionA = () => {
  return (
    <div className="SectionA">
      <Carousel className="ImageSlider">
        <Carousel.Item>
          <img className="d-block w-100" src={Hero} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 " src={Hero2} alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      <div id="SubsectionMain">
        <div className="Sub1 SubSection">
          <MdLocationOn className="GoLocation" />
          <h5 className="subH">Locate Us</h5>
        </div>
        <div className="Sub2 SubSection">
          <MdCall className="GoLocation" />
          <h5 className="subH">CallUs</h5>
        </div>
      </div>
    </div>
  );
};

export default SectionA;
