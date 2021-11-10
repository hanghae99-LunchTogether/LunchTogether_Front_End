import React from "react";
import styled from "styled-components";

import ProfileImg from "../assets/profile.png";

const Notification = (props) => {
  return (
    <NotiWrapper>
      <Img src={ProfileImg} />
      <Content></Content>
      <Time></Time>
    </NotiWrapper>
  );
};

const NotiWrapper = styled.div`
  width: 450px;
  height: 250px;
  border-radius: 10px;
  border: solid 1px #eaeaea;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: white;
  box-shadow: 5px 5px 5px 2px rgba(55, 50, 40, 0.16);
`;

const Img = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 50%;
`;
const Content = styled.div``;
const Time = styled.div``;

export default Notification;
