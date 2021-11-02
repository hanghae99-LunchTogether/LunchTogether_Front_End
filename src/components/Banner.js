import React from "react";
import styled from "styled-components";
import { Image } from "../elements";

const Banner = props => {
  return (
    <>
      <BannerImage src="https://cdn-images-1.medium.com/fit/t/1600/480/1*fGeFJt_t-P7lQPLyYI2YQQ.png" />
    </>
  );
};

export default Banner;

const BannerImage = styled.image`
  margin: 0 auto;
  max-height: 500px;
  width: 100%;
  background-image: url("${props => props.src}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top; ;
`;
