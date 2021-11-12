import React from "react";
import styled from "styled-components";

const SignUpText = () => {
  return (
    <LoginTextWrap>
      <Title>
        쉽고 빠른,<h1> 점심 약속 잡기</h1>
      </Title>
      <TextImg />
      <SubTitle>혹시 같이 점심식사 할 분을 찾나요?</SubTitle>
      <Content>
        포크 '점심약속을 등록하기' 기능으로 점심약속 멤버를 모아보고,
        <p> 신청해 점심식사 멤버를 모아 같이 식사 해보세요.</p>
      </Content>
      <LoginText2Wrap>
        <Title>
          쉽고 빠른,<h1> 점심 약속 잡기</h1>
        </Title>
        <TextImg2 />
        <SubTitle>
          비대면 시대에 만나서 명함 교환, 불편하지 않으신가요?
        </SubTitle>
        <Buttom
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          지금 바로 시작하기
        </Buttom>
      </LoginText2Wrap>
    </LoginTextWrap>
  );
};

const LoginTextWrap = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
  margin-top: 10rem;
  text-align: center;
  background-color: #f6d04d;
  line-height: 6rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  padding: 10rem 0;
`;

const TextImg = styled.div`
  width: 100%;
  padding-top: 56.25%;
  background-image: url("https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80");
  background-size: cover;
  background-position: center;
`;

const SubTitle = styled.h1`
  font-size: 2.5rem;
  padding: 10rem 0 0 0;
`;

const Content = styled.p`
  font-size: 1.6rem;
  line-height: 2.5rem;
`;

const LoginText2Wrap = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
  margin-top: 10rem;
  margin-bottom: 10rem;
  text-align: center;
  background-color: #eec60a;
  line-height: 6rem;
  padding-bottom: 7rem;
`;

const TextImg2 = styled.div`
  width: 100%;
  padding-top: 56.25%;
  background-image: url("https://images.unsplash.com/photo-1569937715496-0ccf6012b1a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80");
  background-size: cover;
  background-position: center;
`;

const Buttom = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  background-color: #ff9841;
  color: white;
  height: 48px;
  width: 60%;
  border: none;
  border-radius: 6px;
  margin: 3rem auto 0 auto;
  box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
`;
export default SignUpText;
