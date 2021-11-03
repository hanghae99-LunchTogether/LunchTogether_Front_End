/* eslint-disable */

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../redux/modules/user";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import MobaileNav from "./MobileNav";

const Header = props => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const token = localStorage.getItem("token");
  console.log(user);
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
                😋
              </Logo>
              <MenuWrapper>
                <p style={{ marginRight: "20px" }}>
                  반가워요, {user.nickname}님!
                </p>
                <button
                  style={{ padding: "10px" }}
                  onClick={() => history.push("/map")}
                >
                  맵
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
              <CreateLunch>점약만들기</CreateLunch>
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
                😋
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;

  // 블록안에 코드가 나타나야할 최대 스크린 사이즈는 768px

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
  max-width: 500px;
  align-items: center;
  box-sizing: border-box;
  justify-content: flex-end;
  margin-right: 1rem;

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
  width: 120px;
  cursor: pointer;
  text-align: center;
  font-size: 30px;
`;
