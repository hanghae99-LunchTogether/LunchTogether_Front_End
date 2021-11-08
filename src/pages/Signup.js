/* eslint-disable */

import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../redux/modules/user";

const Signup = props => {
  const [account, setAccount] = useState({
    email: "",
    nickname: "",
    password: "",
    passwordCheck: "",
  });

  const onChange = e => {
    const {
      target: { name, value },
    } = e;

    setAccount({
      ...account,
      [name]: value,
    });
  };

  const dispatch = useDispatch();
  const error = useSelector(state => state.user.error);
  console.log(error);

  const signUp = () => {
    console.log(account);
    dispatch(userActions.signUpAPI(account));
  };

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
          <Text> 닉네임</Text>

          <Input
            name="nickname"
            placeholder="닉네임"
            type="text"
            onChange={onChange}
            value={account.nickname}
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
        <InputWrapper>
          <Text> 비밀번호 확인 </Text>

          <Input
            name="passwordCheck"
            placeholder="비밀번호 확인"
            type="password"
            onChange={onChange}
            value={account.passwordCheck}
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
        <Button onClick={signUp}>회원가입</Button>
      </Wrapper>
    </>
  );
};

export default Signup;

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 8em;
`;

const Logo = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ff9841;
  margin-bottom: 8em;
`;

const InputWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
`;

const Text = styled.p`
  font-size: 1em;
  color: gray;
  min-width: 90px;
`;

const Input = styled.input`
  width: 100%;
  min-width: 260px;
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
  min-width: 350px;
  height: 48px;
  font-family: NotoSansKR;
  font-weight: bold;
  font-size: 1.4rem;
  border: 1px solid #ff9841;
  border-radius: 6px;
  background-color: white;
  color: #ff9841;

  &:hover {
    background-color: #ff9841;
    color: white;
  }
  ${props =>
    props.src
      ? `background-image: url(${props.src}); background-size: contain; border: none; background-position: center; background-repeat: no-repeat; background-color: #FFEB02; &:hover {background-color: #FFEB02;}`
      : ""}
`;
