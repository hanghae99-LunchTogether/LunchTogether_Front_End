/* eslint-disable */

import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../redux/modules/user";
import { history } from "../redux/configureStore";
import { apis } from "../shared/axios";
import LogoImg from "../assets/logofooter.svg";
import { useForm } from "react-hook-form";

const Login = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    // console.log("데이타", data);
    dispatch(userActions.logInAPI(data));
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

  //Enter 로그인(미완성, onSubmit 안먹힘)
  const handleKeyPress = (e) => {
    if (e.key == "Enter") {
      console.log("잘됨");
    }
  };

  return (
    <>
      <Wrapper onSubmit={handleSubmit(onSubmit)}>
        <Logo>
          <img src={LogoImg} />
        </Logo>

        <InputWrapper>
          <Input
            type="text"
            placeholder="이메일을 입력해주세요."
            {...register("email", {
              required: "이메일을 입력해주세요.",
            })}
            onKeyPress={handleKeyPress}
          />
          {errors && <SubmitMsg>{errors?.email?.message}</SubmitMsg>}
        </InputWrapper>

        <InputWrapper>
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            {...register("password", {
              required: "비밀번호를 입력해주세요.",
            })}
            onKeyPress={handleKeyPress}
          />
          {errors.password && <SubmitMsg>{errors.password.message}</SubmitMsg>}
        </InputWrapper>

        <Button type="submit" onClick={handleSubmit(onSubmit)}>
          이메일로 시작하기
        </Button>
        <Button
          src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
          onClick={loginWithKakao}
        ></Button>
        <Text onClick={() => history.push("/signup")}>
          아직 회원이 아니신가요?{" "}
          <span style={{ fontWeight: "bold", color: "black" }}>회원가입 </span>
        </Text>
      </Wrapper>
    </>
  );
};

export default Login;

const Wrapper = styled.div`
  display: flex;
  width: 33.3%;
  min-width: 350px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 8.5rem auto;
  padding: 2rem;
`;

const Logo = styled.div`
  width: 15rem;
  height: 15rem;
  margin-bottom: 2rem;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  min-width: 350px;
  flex-direction: column;
`;

const Text = styled.p`
  font-size: 1.8rem;
  color: white;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  margin-top: 2rem;
  margin-bottom: 8rem;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  font-size: 1.6rem;
  padding: 2rem;
  border-radius: 0.5rem;
  border: 1px solid #dfdfdf;
  background-color: #fff;

  ::placeholder {
    color: #abb0b5;
    font-weight: 600;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  min-width: 350px;
  font-family: NotoSansKR;
  font-weight: bold;
  font-size: 1.6rem;
  border: 1px solid #ff9841;
  border-radius: 0.5rem;
  background-color: #ff9841;
  color: white;
  margin: 1rem 3rem;

  &:hover {
    box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
  }
  ${(props) =>
    props.src
      ? `background-image: url(${props.src}); background-size: contain; border: none; background-position: center; background-repeat: no-repeat; background-color: #FFEB02; &:hover {background-color: #FFEB02;}`
      : ""}
`;

const SubmitMsg = styled.p`
  font-size: 1.4rem;
  color: red;
  margin-top: 0.5rem;
`;
