/* eslint-disable */

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../redux/modules/user";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import MobaileNav from "./MobileNav";

import LogoImg from "../assets/logo.svg";
import Alarm from "../assets/alarm.svg";
import io from "socket.io-client";

const ENDPOINT = "https://lebania.shop/userin";

let socket;

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

  //socket
  useEffect(() => {
    socket = io.connect(ENDPOINT, {
      transports: ["websocket"],
      forceNew: true,
    });
    console.log(socket);
    socket.emit("join", "hi");
  }, []);

  useEffect(() => {
    socket.on("message", (date) => {
      console.log(date);
      console.log("메세지를 보낸다.");
      socket.emit("sendMessage", "클라이언트로부터 메세지");
    });
  });

  return (
    <>
      {user ? (
        <>
          <Container>
            <HeaderWrap>
              <Left>
                <Logo
                  onClick={() => {
                    history.push("/");
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  <img src={LogoImg} />
                </Logo>
              </Left>
              <Right>
                <button onClick={logOut}>로그아웃</button>
                <div>
                  <button onClick={() => history.push(`/memberlist`)}>
                    멤버
                  </button>
                  <button
                    onClick={() => history.push(`/profile/${user.userid}`)}
                  >
                    내정보
                  </button>
                  <button onClick={() => history.push(`/bookmark`)}>
                    즐겨찾기
                  </button>
                  <button
                    className="icon"
                    onClick={() => history.push(`/notification`)}
                  >
                    <img className="iconImg" src={Alarm} />
                    <div className="counter">2</div>
                  </button>
                </div>
              </Right>
            </HeaderWrap>
          </Container>
          <MobaileNav />
        </>
      ) : (
        <>
          <Container>
            <HeaderWrap>
              <Left>
                <Logo
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  <img src={LogoImg} />
                </Logo>
              </Left>
              <Right>
                <button onClick={() => history.push("/login")}>로그인</button>
                <button onClick={() => history.push("/signup")}>
                  회원가입
                </button>
              </Right>
            </HeaderWrap>
          </Container>
          <MobaileNav />
        </>
      )}
    </>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: #ffffff;
  position: sticky;
  top: 0;
  z-index: 2000;
  margin: 0 auto;
  padding: 1rem 5rem;
  box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 75);
`;

const HeaderWrap = styled.div`
  background-color: #ffffff;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    border: none;
    background-color: #ffffff;
    font-size: 1.5rem;
    line-height: 2.2rem;
    color: #3c3c3c;
    padding: 0;
    margin-left: 1.6rem;
    font-weight: 400;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    min-height: 50px;
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

  button {
    display: flex;
    justify-content: center;
    font-weight: 700;
    color: #ff9841;
  }

  button:hover {
    color: #fe7022;
  }

  div {
    display: flex;
  }

  .icon {
    position: relative;
  }

  img {
    width: 2rem;
    height: 2rem;
  }

  .counter {
    font-weight: 400;
    color: white;
    width: 5px;
    height: 5px;
    background-color: red;
    border-radius: 50%;
    padding: 7px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -5px;
    right: -5px;
  }

  @media only screen and (max-width: 768px) {
    div {
      display: none;
    }
  }
`;

const Logo = styled.div`
  width: 140px;
  height: 70px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 768px) {
    width: 70px;
    height: 50px;
  }
`;

export default Header;
