import React, { useState } from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";

import ProfileImg from "../assets/profile.png";
import { ReactComponent as ForkImg } from "../assets/fork.svg";

const ProfileReviewItem = props => {
  const { reviews } = props;
  console.log("정보가있나?", reviews);

  // 평점;
  const ratingValue = 4;
  const forks = Array(5).fill(0);

  return (
    <>
      <Wrapper>
        <Info>
          <Writer>
            <img src={ProfileImg} />
            <div>
              <span className="nickname">닉네임</span>
              <span className="job">직업</span>
            </div>
          </Writer>
          <Record>
            <div>
              <span className="title">날짜시간</span>
              <span>2021년 11월 11일(금) 오후 12:00~1:00</span>
            </div>
            <div>
              <span className="title">약속장소</span>
              <span>하이디라오 강남점</span>
            </div>
            <div>
              <span className="title">참여인원</span>
              <span>4/4</span>
            </div>
          </Record>
        </Info>
        <Rating>
          {forks.map((_, index) => {
            return (
              <ForkImg
                style={{
                  marginRight: "4px",
                  width: "15.1px",
                  height: "14px",
                }}
                key={index}
                fill={ratingValue > index ? "#ff9841" : "#efefef"}
              />
            );
          })}
          <span>{ratingValue}점</span>
        </Rating>
        <ReviewComment>
          맛집을 많이 알고 있고 식사 예절이 좋으셔서 나중에도 같이 먹고싶어요.
          업무에 대한 고민도 같이 들어주셔서 감사합니다!
        </ReviewComment>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 45rem;
  height: 25rem;
  border-radius: 1rem;
  border: solid 0.1rem #eaeaea;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: white;
  box-shadow: 0.5rem 0.5rem 0.5rem 0.2rem rgba(55, 50, 40, 0.16);
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const Writer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 54px;
    height: 54px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 1.4rem;
    letter-spacing: -1.1px;
    line-height: 2.2rem;

    .nickname {
      font-size: 1.4rem;
      font-weight: 600;
      color: black;
    }

    .job {
      font-size: 1.4rem;
      color: #909090;
    }
  }
`;

const Record = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  color: #c4c4c7;
  letter-spacing: -1.1px;
  line-height: 2.2rem;

  .title {
    margin-right: 1.6rem;
  }
`;

const Rating = styled.div`
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: #64656a;
  margin-bottom: 1.5rem;
`;

const ReviewComment = styled.div`
  font-size: 1.6rem;
  line-height: 2.2rem;
  color: #64656a;
`;

export default ProfileReviewItem;
