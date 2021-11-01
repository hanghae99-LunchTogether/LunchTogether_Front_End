/* eslint-disable */

import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import MobaileNav from "./MobileNav";

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
              style={{ padding: "10px", border: "none", background: "none" }}
              onClick={() => history.push("/map")}
            >
              맵
            </button>
            <button
              style={{ padding: "10px", border: "none", background: "none" }}
              onClick={() => history.push("/profile")}
            >
              내정보
            </button>
            <button
              style={{ padding: "10px", border: "none", background: "none" }}
              onClick={() => history.push("/signup")}
            >
              회원가입
            </button>
            <button
              style={{ padding: "10px", border: "none", background: "none" }}
              onClick={() => history.push("/login")}
            >
              로그인
            </button>

            <button
              onClick={logOut}
              style={{ padding: "10px", border: "none", background: "none" }}
            >
              로그아웃
            </button>
          </MenuWrapper>
        </HeaderWrap>
      </Wrap>
      <MobaileNav />
    </>
  );
};

export default Header;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;

  // 블록안에 코드가 나타나야할 최대 스크린 사이즈는 768px
  @media only screen and (max-width: 768px) {
    display: none;
  }
  // 블록안에 코드가 나타나야할 최소 스크린 사이즈는 768px
  /* @media only screen and (min-width: 768px) {
    background-color: blue;
  } */
`;

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
  cursor: pointer;
  text-align: center;
  font-size: 30px;
`;
