import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const CarouselSlide = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/a0/6d/38/a06d3811c2ec8ee8350bbb1a22f87611.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lh3.googleusercontent.com/proxy/jAq-5ShpcnNqgu_WUae5OiJxxuITOlZ0e5roOnpfkhY0cPoul0-b33d7fvG1g3yYGGiJ8lMuXFIoYMFkAZ7_Q2xC2nmMT90e-b27RvVMLU-qUrxS8Oeh7lbAYpTCHC8r59D5zvaNdfC9zRZ22ldU_6aJvz69"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselSlide;
