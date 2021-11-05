/* eslint-disable */

import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../redux/modules/user";
import { history } from "../redux/configureStore";
import { apis } from "../shared/axios";

const Login = (props) => {
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;

    setAccount({
      ...account,
      [name]: value,
    });
  };

  const dispatch = useDispatch();

  const logIn = () => {
    dispatch(userActions.logInAPI(account));
  };

  const { Kakao } = window;

  const loginWithKakao = () => {
    // 카카오 로그인
    Kakao.Auth.login({
      success: (authObj) => {
        console.log(authObj);

        // 유저정보 요청코드
        Kakao.API.request({
          url: "/v2/user/me",
          data: {
            property_keys: ["properties.profile_image", "properties.nickname"],
          },
          success: async function (res) {
            const user = {
              id: res.id,
              image: res.properties.profile_image,
              nickname: res.properties.nickname,
            };
            const data = await apis.kakaologin(user);
            const token = data.data.token;
            if (token) {
              localStorage.setItem("token", token);
              dispatch(userActions.getUserAPI());
              history.push("/");
            } else {
              window.alert("로그인에 실패했습니다.");
            }
          },
          fail: function (error) {
            console.log(error);
          },
        });
      },
    });
  };

  const error = useSelector((state) => state.user.error);

  return (
    <>
      <Wrapper>
        <Logo />

        <InputWrapper>
          <Text> 이메일</Text>

          <Input
            name="email"
            placeholder="이메일"
            type="text"
            onChange={onChange}
            value={account.email}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Text> 비밀번호</Text>

          <Input
            name="password"
            placeholder="비밀번호"
            type="password"
            onChange={onChange}
            value={account.paasword}
            required
          />
        </InputWrapper>
        {error && (
          <Text
            style={{
              width: "100%",
              color: "red",
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            {error}
          </Text>
        )}
        <Button onClick={logIn}>로그인</Button>
        <Button
          src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
          onClick={loginWithKakao}
        ></Button>
        <Text
          style={{
            width: "400px",
            textAlign: "center",
            fontSize: "1em",
            color: "#c4c4c7",
            cursor: "pointer",
          }}
          onClick={() => history.push("/signup")}
        >
          아직 회원이 아니신가요?{" "}
          <span style={{ fontWeight: "bold", color: "black" }}>회원가입 </span>
        </Text>
      </Wrapper>
    </>
  );
};

export default Login;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 15%;
`;

const Logo = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ff9841;
  margin-bottom: 7.4%;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3%;
`;

const Text = styled.p`
  font-size: 1em;
  color: gray;
  min-width: 80px;
`;

const Input = styled.input`
  width: 50%;
  min-width: 320px;
  max-width: 400px;
  height: 48px;
  color: black;
  font-size: 1em;
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid #dfdfdf;
  background-color: #fff;
`;

const Button = styled.button`
  width: 50%;
  min-width: 400px;
  max-width: 480px;
  height: 48px;
  font-family: NotoSansKR;
  font-weight: bold;
  font-size: 1em;
  border: 1px solid #ff9841;
  border-radius: 6px;
  background-color: white;
  color: #ff9841;
  margin-bottom: 3%;

  &:hover {
    background-color: #ff9841;
    color: white;
  }
  ${(props) =>
    props.src
      ? `background-image: url(${props.src}); background-size: contain; border: none; background-position: center; background-repeat: no-repeat; background-color: #FFEB02; &:hover {background-color: #FFEB02;}`
      : ""}
`;
