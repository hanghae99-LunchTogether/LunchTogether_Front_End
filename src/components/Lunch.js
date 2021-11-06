/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";

const Lunch = (props) => {
  const { title, content, lunchid } = props;
  return (
    <>
      <Wrapper
        onClick={() => {
          history.push(`/lunchpost/${lunchid}`);
        }}
      >
        <Notice>New</Notice>
        <Title>{title}</Title>
        <User>이미지/닉네임/직업</User>
        <Date>날짜</Date>
        <Place>장소</Place>
        <Bottom>멤버, 북마크</Bottom>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 29.7rem;
  height: 36.7rem;
  border-radius: 0.4rem;
  background-color: #ffffff;
  padding: 2.4rem;
  box-shadow: 0.2rem 0.2rem 0.4rem 0 rgba(55, 50, 40, 0.16);
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const Notice = styled.div`
  width: 5.8rem;
  height: 3rem;
  padding: 0.5rem 1.3rem 0.5rem 1.4rem;
  border-radius: 1.5rem;
  background-color: #ff9841;
  font-size: 1.4rem;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #3c3c3c;
  line-height: 3.2rem;
  font-weight: bold;
  margin: 1.4rem 0 0.8rem 0;
`;

const User = styled.div``;
const Date = styled.div``;
const Place = styled.div``;
const Bottom = styled.div``;

export default Lunch;
