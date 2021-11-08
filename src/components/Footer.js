import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";

const Footer = (props) => {
  return (
    <Container>
      <FooterWrap>
        <Info>
          <Nav>
            <span>홈</span>
            <span>점심약속 등록하기</span>
          </Nav>
          <hr />
          <Bottom>
            <Member>
              <Front>
                <h1>Front-end</h1>
                <div>
                  <span>김덕현</span>
                  <span>박새봄</span>
                  <span>이민국</span>
                </div>
              </Front>
              <Back>
                <h1>Back-end</h1>
                <div>
                  <span>김도형</span>
                  <span>이보훈</span>
                  <span>정창우</span>
                </div>
              </Back>
              <Design>
                <h1>Design</h1>
                <div>
                  <span>김주성</span>
                  <span>최화정</span>
                </div>
              </Design>
              <Git>
                <h1>Repository</h1>
                <div>깃주소</div>
              </Git>
            </Member>
            <C>
              <img src="/img/logo.svg" />
              <span>© 2021 Project Fork. All rights reserved.</span>
            </C>
          </Bottom>
        </Info>
      </FooterWrap>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1920px;
  background-color: #e7dbd0;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const FooterWrap = styled.div`
  max-width: 1280px;
  height: 180px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;

  hr {
    width: 1280px;
    border: 0.5px solid #333;
    margin: 1rem 0;
  }
`;

const Nav = styled.div`
  padding-top: 2rem;
  /* padding-bottom: 2rem; */
  span {
    font-size: 1.4rem;
    font-weight: 600;
    margin-right: 2rem;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
`;

const Member = styled.div`
  display: flex;
`;

const Front = styled.div`
  display: flex;
  font-size: 1.6rem;
  font-weight: 600;

  div {
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
    font-weight: 500;
    margin-left: 2rem;
  }

  span {
    margin-bottom: 1rem;
  }
`;
const Back = styled.div`
  display: flex;
  font-size: 1.6rem;
  font-weight: 600;
  margin-left: 4rem;

  div {
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
    font-weight: 500;
    margin-left: 2rem;
  }

  span {
    margin-bottom: 1rem;
  }
`;
const Design = styled.div`
  display: flex;
  font-size: 1.6rem;
  font-weight: 600;
  margin-left: 4rem;

  div {
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
    font-weight: 500;
    margin-left: 2rem;
  }

  span {
    margin-bottom: 1rem;
  }
`;
const Git = styled.div`
  display: flex;
  font-size: 1.6rem;
  font-weight: 600;
  margin-left: 4rem;

  div {
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
    font-weight: 500;
    margin-left: 2rem;
  }
`;

const C = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 80px;
    height: 80px;
  }
  span {
    margin-top: 1rem;
    font-size: 1.4rem;
    line-height: 2.2rem;
    color: #64656a;
  }
`;

export default Footer;
