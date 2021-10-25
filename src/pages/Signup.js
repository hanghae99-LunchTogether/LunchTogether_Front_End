/* eslint-disable */

import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { userActions } from "../redux/modules/user";

const Signup = props => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdCheck, setPwdCheck] = useState("");

  const onChange = e => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "username") {
      setUsername(value);
    } else if (name === "nickname") {
      setNickname(value);
    } else if (name === "password") {
      setPwd(value);
    } else if (name === "password") {
      setPwd(value);
    } else if (name === "passwordCheck") {
      setPwdCheck(value);
    }
  };

  const dispatch = useDispatch();

  const signUp = () => {
    const user = {
      email,
      name: username,
      nickName: nickname,
      password: pwd,
    };
    dispatch(userActions.signUpAPI(user));
  };

  return (
    <>
      <Wrap>
        <Wrap>
          <Title>회원가입</Title>
          <InputWrapper>
            <p>이메일 </p>
            <input onChange={onChange} value={email} name="email" type="text" />
          </InputWrapper>
          <InputWrapper>
            <p>이름 </p>
            <input
              onChange={onChange}
              value={username}
              name="username"
              type="text"
            />
          </InputWrapper>
          <InputWrapper>
            <p>닉네임 </p>
            <input
              onChange={onChange}
              value={nickname}
              name="nickname"
              type="text"
            />
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
          <InputWrapper>
            <p>비밀번호 확인</p>
            <input
              onChange={onChange}
              value={pwdCheck}
              name="passwordCheck"
              type="password"
            />
          </InputWrapper>
          <button onClick={signUp}>회원가입</button>
        </Wrap>
      </Wrap>
    </>
  );
};

export default Signup;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1050px;
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
