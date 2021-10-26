import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";

const Header = props => {
  const { Kakao } = window;

  const logOut = () => {
    Kakao.Auth.logout(() => {
      console.log(Kakao.Auth.getAccessToken());
      history.push("/login");
    });
  };
  return (
    <>
      <Wrap>
        <Logo>😋</Logo>
        <MenuWrapper>
          <button onClick={() => history.push("/profile")}>내정보</button>
          <button onClick={logOut}>로그아웃</button>
        </MenuWrapper>
      </Wrap>
    </>
  );
};

export default Header;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1050px;
  height: 100px;
  box-sizing: border-box;
`;

const MenuWrapper = styled.div`
  display: flex;
  width: 300px;
  align-items: center;
  box-sizing: border-box;
`;

const Logo = styled.div`
  width: 120px;
  height: 100px;
  line-height: 100px;
  cursor: pointer;
  text-align: center;
  font-size: 50px;
`;
