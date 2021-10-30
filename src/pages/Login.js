/* eslint-disable */

import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { userActions } from "../redux/modules/user";
import { history } from "../redux/configureStore";

const Login = props => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const onChange = e => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPwd(value);
    }
  };

  const dispatch = useDispatch();

  const logIn = () => {
    const user = {
      email,
      password: pwd,
    };
    dispatch(userActions.logInAPI(user));
  };

  const { Kakao } = window;

  const loginWithKakao = () => {
    // 카카오 로그인
    Kakao.Auth.login({
      success: authObj => {
        console.log(authObj);

        // 유저정보 요청코드
        Kakao.API.request({
          url: "/v2/user/me",
          success: function (res) {
            const kakao_account = res.kakao_account;
            console.log(kakao_account);
            const user = {
              age_range: "30~39",
              birthday: "0107",
              birthday_type: "SOLAR",
              gender: "male",
              nickname: "Deokhyun Kim",
              profile_image_url:
                "http://k.kakaocdn.net/dn/cvw1iT/btrd1yEdeYZ/NbKz6C9WRVfkCl66aTPkd0/img_640x640.jpg",
              email: "",
            };
            history.push("/");
          },
          fail: function (error) {
            console.log(error);
          },
        });
      },
    });
  };

  return (
    <>
      <Wrap>
        <Wrap>
          <Title>로그인</Title>
          <InputWrapper>
            <p>이메일 </p>
            <input onChange={onChange} value={email} name="email" type="text" />
          </InputWrapper>

          <InputWrapper>
            <p>비밀번호</p>
            <input
              onChange={onChange}
              value={pwd}
              name="password"
              type="password"
            />
          </InputWrapper>

          <button onClick={logIn}>로그인</button>
          <button
            onClick={loginWithKakao}
            style={{ border: "none", padding: "0" }}
          >
            <img
              src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
              width="222"
            />
          </button>
        </Wrap>
      </Wrap>
    </>
  );
};

export default Login;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  margin: 30px auto;
  box-sizing: border-box;
`;

const Title = styled.p`
  color: black;
  font-size: 24px;
  margin: 0 auto;
  font-weight: 900;
  margin-bottom: 50px;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 640px;
  height: 44px;
  padding: 10px 0px;
`;
