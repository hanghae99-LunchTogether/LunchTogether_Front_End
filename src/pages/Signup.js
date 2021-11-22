/* eslint-disable */

import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../redux/modules/user";
import LogoImg from "../assets/logofooter.svg";
import SignUpText from "../components/SignUpText";
import { useForm } from "react-hook-form";

const Signup = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log("데이타", data);
    dispatch(userActions.signUpAPI(data));
  };

  return (
    <>
      <Wrapper onSubmit={handleSubmit(onSubmit)}>
        <Logo>
          <img src={LogoImg} />
        </Logo>

        <InputWrapper>
          <Text> 이메일</Text>
          <Input
            type="text"
            placeholder="example@fork.com"
            {...register("email", {
              required: {
                value: true,
                message: "이메일을 입력해주세요.",
              },
              pattern: {
                value:
                  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
                message: "이메일 형식이 올바르지 않습니다.",
              },
            })}
          />
          {errors && <SubmitMsg>{errors?.email?.message}</SubmitMsg>}
        </InputWrapper>

        <InputWrapper>
          <Text> 닉네임</Text>
          <Input
            type="text"
            placeholder="3~8자의 닉네임을 입력해주세요."
            {...register("nickname", {
              required: {
                value: true,
                message: "닉네임을 입력해주세요.",
              },
              minLength: {
                value: 3,
                message: "최소 3자 이상의 닉네임을 입력해주세요.",
              },
              maxLength: {
                value: 8,
                message: "8자 이하의 닉네임만 사용가능합니다.",
              },
              pattern: {
                value: /^[가-힣A-Za-z0-9]+$/,
                message: "닉네임에는 한글, 영문, 숫자만 사용가능합니다.",
              },
            })}
          />
          {errors && <SubmitMsg>{errors?.nickname?.message}</SubmitMsg>}
        </InputWrapper>

        <InputWrapper>
          <Text> 비밀번호</Text>
          <Input
            type="password"
            placeholder="영문, 숫자를 혼용하여 8~16자를 입력해주세요."
            {...register("password", {
              required: "비밀번호를 입력해주세요.",
              minLength: {
                value: 8,
                message: "최소 8자 이상의 비밀번호를 입력해주세요.",
              },
              maxLength: {
                value: 16,
                message: "16자 이하의 비밀번호만 사용가능합니다.",
              },
              pattern: {
                value: /^(?=.*\d)(?=.*[a-zA-ZS]).{8,}/,
                message: "영문, 숫자를 혼용하여 입력해주세요.",
              },
            })}
          />
          {errors.password && <SubmitMsg>{errors.password.message}</SubmitMsg>}
        </InputWrapper>

        <InputWrapper>
          <Text>비밀번호 확인</Text>
          <Input
            type="password"
            placeholder="비밀번호를 다시 입력해주세요."
            {...register("passwordConfirmation", {
              required: " 비밀번호를 확인 해주세요.",
              validate: {
                matchesPreviousPassword: (value) => {
                  const { password } = getValues();
                  return password === value || "비밀번호가 일치하지 않습니다.";
                },
              },
            })}
          />
          {errors.passwordConfirmation && (
            <SubmitMsg>{errors.passwordConfirmation.message}</SubmitMsg>
          )}
        </InputWrapper>

        <Button type="submit" onClick={handleSubmit(onSubmit)}>
          회원가입
        </Button>
      </Wrapper>
      <SignUpText />
    </>
  );
};

export default Signup;

const Wrapper = styled.form`
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
  margin-bottom: 2em;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
  min-width: 350px;
  flex-direction: column;
`;

const Text = styled.label`
  font-size: 1.6rem;
  margin-bottom: 1rem;
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
