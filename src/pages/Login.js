import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { userActions } from "../redux/modules/user";

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
            <p>비밀번호</p>
            <input
              onChange={onChange}
              value={pwd}
              name="password"
              type="password"
            />
          </InputWrapper>

          <button onClick={logIn}>회원가입</button>
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
