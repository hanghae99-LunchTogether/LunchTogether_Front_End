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
          {/* <MobileHeader> 반가워요, {user.nickname}님!</MobileHeader> */}
          <HeaderWrap>
            <Left>
              <Logo
                onClick={() => {
                  history.push("/");
                }}
              >
                <img src="img/logo.svg" />
              </Logo>
              <button
                onClick={() => {
                  history.push("/");
                }}
              >
                홈
              </button>
              <button onClick={() => history.push(`/lunchregister`)}>
                점심약속 등록하기
              </button>
            </Left>
            <Right>
              <button onClick={logOut}>로그아웃</button>
              <div>
                <button onClick={() => history.push(`/profile/${user.userid}`)}>
                  내정보
                </button>
                <button>🔔</button>
              </div>
            </Right>
          </HeaderWrap>
          <MobaileNav />
        </>
      ) : (
        <>
          <MobileHeader>로그인 후 이용해주세요!</MobileHeader>
          <HeaderWrap>
            <Left>
              <Logo
                onClick={() => {
                  history.push("/");
                }}
              >
                <img src="img/logo.svg" />
              </Logo>
              <button
                onClick={() => {
                  history.push("/");
                }}
              >
                홈
              </button>
              <button onClick={() => history.push(`/lunchregister`)}>
                점심약속 등록하기
              </button>
            </Left>
            <Right>
              <button onClick={() => history.push("/login")}>로그인</button>
              <button onClick={() => history.push("/signup")}>회원가입</button>
            </Right>
          </HeaderWrap>
          <MobaileNav />
        </>
      )}
    </>
  );
};

export default Header;

const MobileHeader = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    font-weight: 600;
    padding: 20px;
  }
`;

const HeaderWrap = styled.div`
  max-width: 1920px;
  min-width: 1280px;
  min-height: 100px;
  padding: 0 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    border: none;
    background-color: #ffffff;
    font-size: 1.4rem;
    line-height: 2.2rem;
    color: #3c3c3c;
    padding: 0;
    margin-left: 1.6rem;
  }

  @media only screen and (max-width: 768px) {
    min-width: 375px;
    min-height: 50px;
    padding: 0;
  } ;
`;

const Left = styled.div`
  display: flex;

  @media only screen and (max-width: 768px) {
    button {
      display: none;
    }
  }
`;

const Right = styled.div`
  display: flex;

  @media only screen and (max-width: 768px) {
    div {
      display: none;
    }
  }
`;

const Logo = styled.div`
  width: 140px;
  height: 100px;
  cursor: pointer;
  padding: 4px 0;
  img {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 768px) {
    width: 700px;
    height: 50px;
  }
`;
