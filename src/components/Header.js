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
      <div>헤더</div>
      <button onClick={logOut}>로그아웃</button>
    </>
  );
};

export default Header;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1050px;
  height: 200px;
  box-sizing: border-box;
`;

const Logo = styled.div`
  position: absolute;
  width: 120px;
  margin-left: -60px;
  height: 100px;
  background-size: cover;
  cursor: pointer;
  font-size: 50px;
`;
