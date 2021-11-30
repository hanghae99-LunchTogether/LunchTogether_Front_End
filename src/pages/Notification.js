/* eslint-disable */

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Notification = (props) => {
  return (
    <Container>
      <h1>{user.nickname}님 알림이 도착했습니다💌</h1>
      <NotiWrapper>
        <Content>
          <Img src="https://cdn.topstarnews.net/news/photo/first/201711/img_322443_1.jpg" />
          <Text>
            <span className="nickname">만수르</span>
            <span className="message">
              만수르님과의 점심약속 신청이 확정되었습니다 약속시간을 꼭
              지켜주세요!
            </span>
          </Text>
        </Content>
        <Time>3분 전</Time>
      </NotiWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;
  min-height: 100vh;

  h1 {
    font-size: 2rem;
    font-weight: 600;
    color: black;
    margin-bottom: 3rem;
  }
`;

const NotiWrapper = styled.div`
  width: 80rem;
  height: 8rem;
  border-radius: 1rem;
  border: solid 0.1rem #eaeaea;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: white;
  box-shadow: 0.5rem 0.5rem 0.5rem 0.2rem rgba(55, 50, 40, 0.16);
  @media only screen and (max-width: 768px) {
    width: 90%;
    height: 10rem;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  margin-right: 2rem;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  line-height: 2rem;

  .nickname {
    font-weight: 600;
    color: black;
  }

  .message {
    font-size: 1.4rem;
    color: #909090;
  }
`;
const Time = styled.div`
  width: 8rem;
  justify-content: end;
  font-size: 1.4rem;
  color: #909090;
  display: flex;
`;

export default Notification;
