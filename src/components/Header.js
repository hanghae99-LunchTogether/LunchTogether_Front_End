/* eslint-disable */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../redux/modules/user";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import MobaileNav from "./MobileNav";

const Header = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const { Kakao } = window;

  const logOut = () => {
    Kakao.Auth.logout(() => {
      console.log(Kakao.Auth.getAccessToken());
    });
    dispatch(userActions.logOutAPI());
  };

  return (
    <>
      {user ? (
        <>
          <Wrap>
            <HeaderWrap>
              <Logo
                onClick={() => {
                  history.push("/");
                }}
              >
                <img src="img/logo.svg" />
              </Logo>
              <MenuWrapper>
                <p style={{ marginRight: "20px" }}>
                  반가워요, {user.nickname}님!
                </p>
                <button
                  style={{ padding: "10px" }}
                  onClick={() => history.push(`/lunchregister`)}
                >
                  점약만들기
                </button>
                <button
                  style={{ padding: "10px" }}
                  onClick={() => history.push(`/profile/${user.userid}`)}
                >
                  프로필
                </button>

                <button onClick={logOut} style={{ padding: "10px" }}>
                  로그아웃
                </button>
              </MenuWrapper>
            </HeaderWrap>
          </Wrap>
          <MobaileNav />
        </>
      ) : (
        <>
          <Wrap>
            <HeaderWrap>
              <Logo
                onClick={() => {
                  history.push("/");
                }}
              >
                <img src="img/logo.svg" />
              </Logo>
              <MenuWrapper>
                <button
                  style={{ padding: "10px" }}
                  onClick={() => history.push("/login")}
                >
                  로그인
                </button>
              </MenuWrapper>
              <CreateLunch>점약만들기</CreateLunch>
            </HeaderWrap>
          </Wrap>
          <MobaileNav />
        </>
      )}
    </>
  );
};

export default Header;

const Wrap = styled.div`
  max-width: 1920px;
  min-height: 100px;
  padding: 0 320px;
`;

const HeaderWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuWrapper = styled.div`
  display: flex;
  max-width: 500px;
  align-items: center;
  box-sizing: border-box;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const CreateLunch = styled.button`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const Logo = styled.div`
  width: 140px;
  height: 100px;
  cursor: pointer;
  padding: 4px 0 4px 0;
  img {
    width: 100%;
    height: 100%;
  }
`;
