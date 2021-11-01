import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";

const MobaileNav = props => {
  return (
    <>
      <Wrapper>
        <MenuWrapper onClick={() => history.push("/")}>
          <MenuText>🏠</MenuText>
          <MenuText>홈</MenuText>
        </MenuWrapper>
        <MenuWrapper onClick={() => history.push("/memberlist")}>
          <MenuText>😎</MenuText>
          <MenuText>멤버</MenuText>
        </MenuWrapper>
        <MenuWrapper onClick={() => history.push("/")}>
          <MenuText>🥄</MenuText>
          <MenuText>
            점약 <br />
            만들기
          </MenuText>
        </MenuWrapper>
        <MenuWrapper onClick={() => history.push("/notification")}>
          <MenuText>🔔</MenuText>
          <MenuText>알림</MenuText>
        </MenuWrapper>
        <MenuWrapper onClick={() => history.push("/profile")}>
          <MenuText>🤵‍♂️</MenuText>
          <MenuText>프로필</MenuText>
        </MenuWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid gray;
  height: 90px;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50px;
  height: 50px;
  margin: 5px;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
`;

const MenuText = styled.p`
  padding: 0;
  margin: 0 auto;
  font-size: 15px;
  font-weight: 600;
`;

export default MobaileNav;
