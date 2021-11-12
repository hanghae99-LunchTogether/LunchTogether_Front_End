import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { history } from "../redux/configureStore";

import LogoImg from "../assets/logofooter.svg";

const Footer = props => {
  const user = useSelector(state => state.user.user);

  return (
    <Container>
      <FooterWrap>
        <Info>
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
              <img src={LogoImg} />
              <span>© 2021 Project Fork. All rights reserved.</span>
            </C>
          </Bottom>
        </Info>
      </FooterWrap>
    </Container>
  );
};

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  background-color: #e7dbd0;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const FooterWrap = styled.div`
  max-width: 1280px;
  min-height: 180px;
  box-sizing: border-box;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  hr {
    border: 0.5px solid #333;
    margin: 1rem 0;
  }
`;

const Nav = styled.div`
  padding-top: 2rem;
  span {
    font-size: 1.4rem;
    font-weight: 600;
    margin-right: 2rem;
    cursor: pointer;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;

  @media all and (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
  }
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
    width: 8rem;
    height: 8rem;
  }
  span {
    margin-top: 1rem;
    font-size: 1.4rem;
    line-height: 2.2rem;
    color: #64656a;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    flex-direction: row;
    img {
      margin-right: 20px;
    }
  }
`;

export default Footer;
