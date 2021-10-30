/* eslint-disable */

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
        <HeaderWrap>
          <Logo
            onClick={() => {
              history.push("/");
            }}
          >
            😋
          </Logo>
          <MenuWrapper>
            <button
              style={{ margin: "10px" }}
              onClick={() => history.push("/map")}
            >
              맵
            </button>
            <button
              style={{ margin: "10px" }}
              onClick={() => history.push("/profile")}
            >
              내정보
            </button>
            <button
              style={{ margin: "10px" }}
              onClick={() => history.push("/signup")}
            >
              회원가입
            </button>
            <button
              style={{ margin: "10px" }}
              onClick={() => history.push("/login")}
            >
              로그인
            </button>

            <button onClick={logOut}>로그아웃</button>
          </MenuWrapper>
        </HeaderWrap>
      </Wrap>
    </>
  );
};

export default Header;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
`;

const MenuWrapper = styled.div`
  display: flex;
  max-width: 300px;
  align-items: center;
  box-sizing: border-box;
  justify-content: flex-end;
  margin-right: 1rem;
`;

const Logo = styled.div`
  width: 120px;
  height: 100px;
  line-height: 100px;
  cursor: pointer;
  text-align: center;
  font-size: 50px;
`;
