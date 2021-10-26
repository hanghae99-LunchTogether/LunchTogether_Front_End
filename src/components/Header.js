import React from "react";

const Header = props => {
  const { Kakao } = window;

  const logOut = () => {
    Kakao.Auth.logout(() => {
      console.log(Kakao.Auth.getAccessToken());
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
