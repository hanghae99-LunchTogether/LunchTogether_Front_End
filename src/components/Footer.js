import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";

const Footer = props => {
  return (
    <Wrap>
      <Box>
        <img src="/img/logo.svg" />
        <Member></Member>
      </Box>
      <div>© 2021 Project Fork. All rights reserved.</div>
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 320px;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
  }
`;

const Member = styled.div`
  width: 730px;
  height: 100px;
  background-color: yellow;
`;

export default Footer;
