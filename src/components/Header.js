/* eslint-disable */

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../redux/modules/user";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { apis } from "../shared/axios";

import MobaileNav from "./MobileNav";

import LogoImg from "../assets/logo.svg";
import Alarm from "../assets/alarm.svg";
import { RiNotification2Fill } from "react-icons/ri";

const Header = ({ socket }) => {
  console.log(socket);
  const dispatch = useDispatch();
  console.log(history);
  const user = useSelector((state) => state.user.user);
  const token = localStorage.getItem("token");

  const { Kakao } = window;

  const logOut = () => {
    Kakao.Auth.logout(() => {
      console.log(Kakao.Auth.getAccessToken());
    });
    dispatch(userActions.logOutAPI());
    localStorage.removeItem("token");
  };

  //socket
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    socket.on("message", (data) => {
      console.log("메세지를 보낸다.");
      if (data.length) {
        data?.forEach((data) => {
          setNotifications((prev) => [...prev, data]);
        });
      }
      socket.emit("sendMessage", "클라이언트로부터 메세지");
    });
  });

  useEffect(() => {
    socket?.on("apply", (data) => {
      console.log(data);
      setNotifications((prev) => [...prev, data]);
    });
    socket?.on("offer", (data) => {
      setNotifications((prev) => [...prev, data]);
    });
    socket?.on("confirm", (data) => {
      setNotifications((prev) => [...prev, data]);
    });
    socket?.on("offercon", (data) => {
      setNotifications((prev) => [...prev, data]);
    });
  }, [socket]);

  console.log(notifications);

  const displayNotification = ({ sender, kind }) => {
    let action;

    if (kind === "apply") {
      action = "약속신청";
    } else if (kind === "offer") {
      action = "약속제안";
    } else if (kind === "confirmYes") {
      action = "약속수락";
    } else if (kind === "confirmNo") {
      action = "약속거절";
    } else if (kind === "offerconYes") {
      action = "제안수락";
    } else if (kind === "offerconNo") {
      action = "제안거절";
    }
    return (
      <span className="notification">{`${sender}님이 ${action}을 했습니다.`}</span>
    );
  };

  const handleRead = async () => {
    setNotifications([]);
    setOpen(false);
    try {
      const data = await apis.handleRead();
      console.log(data);
    } catch {}
  };

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
                </div>
                <button className="icon" onClick={() => setOpen(!open)}>
                  <RiNotification2Fill className="iconImg" />
                  {notifications.length > 0 && (
                    <div className="counter">{notifications.length}</div>
                  )}
                </button>
                {open && (
                  <div className="notifications">
                    {notifications.map((n) => displayNotification(n))}
                    <button className="nButton" onClick={handleRead}>
                      읽음 표시
                    </button>
                  </div>
                )}
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
  position: relative;
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

  .notifications {
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #f6f6e9;
    color: black;
    font-weight: 300;
    width: 250px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 5px 0 30px 20px;
  }

  .notification {
    padding: 5px;
    font-size: 14px;
  }

  .nButton {
    width: 80%;
    padding: 5px;
    margin-top: 10px;
    background-color: #fff591;
    border-radius: 10px;
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
