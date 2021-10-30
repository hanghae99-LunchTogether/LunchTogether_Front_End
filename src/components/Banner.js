import React from "react";
import styled from "styled-components";
import { Image } from "../elements";

const Banner = props => {
  return (
    <>
      <BannerWrapper>
        <Image shape="rectangle" />
      </BannerWrapper>
    </>
  );
};

export default Banner;

const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 65%;
  max-height: 500px;
  max-width: 1050px;
  box-sizing: border-box;
  border-radius: 10px;
`;
