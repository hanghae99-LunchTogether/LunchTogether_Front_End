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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_FEa8EGbTiLeoFcb31-hIUjPAveT9BpYaSSfToyiPxv6xeFU5QT_0INtp1mLz3Ypxc1Q&usqp=CAU"
          alt="First slide"
        />
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lh3.googleusercontent.com/proxy/jAq-5ShpcnNqgu_WUae5OiJxxuITOlZ0e5roOnpfkhY0cPoul0-b33d7fvG1g3yYGGiJ8lMuXFIoYMFkAZ7_Q2xC2nmMT90e-b27RvVMLU-qUrxS8Oeh7lbAYpTCHC8r59D5zvaNdfC9zRZ22ldU_6aJvz69"
          alt="Second slide"
        />
      </Carousel.Item> */}
    </Carousel>
  );
};

export default CarouselSlide;
