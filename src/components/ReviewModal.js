/* eslint-disable */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import { history } from "../redux/configureStore";
import { useSelector } from "react-redux";
import { apis } from "../shared/axios";
// import { ReactComponent as ForkImg } from "../assets/fork.svg";
import Cross from "../assets/cross.svg";
import ReviewRating from "./ReviewRating";

const ReviewModal = (props) => {
  const { host, lunchid, applicants, onHide } = props;

  const user = useSelector((state) => state.user.user);

  //본인 걸러내기
  const notMe = applicants.filter((u) => u.userid !== user.userid);
  const targetuserid = notMe.map((u) => u.userid);

  //한줄리뷰 작성칸
  const [content, setContent] = useState("");

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  // 평점;
  const [currentValue, setCurrentValue] = useState(0);

  const getValue = (value) => {
    setCurrentValue(value);
  };
  // const [hoverValue, setHoverValue] = useState(undefined);
  // const forks = Array(5).fill(0);

  // const handleClick = (value) => {
  //   setCurrentValue(value);
  // };

  // const handleMouseOver = (newHoverValue) => {
  //   setHoverValue(newHoverValue);
  // };

  // const handleMouseLeave = () => {
  //   setHoverValue(undefined);
  // };

  //공백입력방지
  const [checkError, setCheckError] = useState("");

  //api 요청
  const review = {
    targetuserid: targetuserid,
    spoon: currentValue,
    comment: content,
    lunchid: lunchid,
  };

  const addReviewData = async (e) => {
    try {
      if (content === "") {
        setCheckError("작성되지 않은 리뷰가 남아있어요 :(");
        e.preventDefault();
      }
      if (currentValue === 0) {
        setCheckError("작성되지 않은 리뷰가 남아있어요 :(");
        e.preventDefault();
      }
      const data = await apis.addReview(review);
      console.log("????", data);
      //   onHide();
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <Modal {...props}>
      <Modal.Body>
        <Wrapper onClick={onHide}>
          <ReviewContainar onClick={(e) => e.stopPropagation()}>
            <Exit onClick={onHide} src={Cross}></Exit>
            <h1>점심식사 리뷰 남기기</h1>
            <h2>
              즐거운 점심식사 보내셨나요? 함께 즐긴 멤버에 대한 평가를
              남겨주세요
            </h2>
            {notMe?.map((u, idx) => {
              return (
                <ReviewWrap key={idx}>
                  <ReviewCard>
                    <UserInfo>
                      <User>
                        <img src={u.user.image} />
                        <div>
                          <span className="nickname">{u.user.nickname}</span>
                          <span className="job">{u.user.job}</span>
                        </div>
                      </User>
                      <RatingBox>
                        <h2>{u.user.nickname}님과의 식사는 어떠셨나요?</h2>
                        <ReviewRating getValue={getValue} />
                        {/* <Rating>
                          {forks.map((item, index) => {
                            return (
                              <ForkImg
                                style={{
                                  cursor: "pointer",
                                  marginRight: "4px",
                                  width: "15.1px",
                                  height: "14px",
                                }}
                                key={index}
                                onClick={() => handleClick(index + 1)}
                                onMouseOver={() => handleMouseOver(index + 1)}
                                onMouseLeave={handleMouseLeave}
                                fill={
                                  (hoverValue || currentValue) > index
                                    ? "#ff9841"
                                    : "#efefef"
                                }
                              />
                            );
                          })}
                          <span>{currentValue}점</span>
                        </Rating> */}
                      </RatingBox>
                    </UserInfo>
                    <Comment>
                      <span>리뷰 작성하기</span>
                      <div>
                        <textarea
                          maxlength="140"
                          onChange={onChangeContent}
                          placeholder="140자 미만 작성해주세요"
                        />
                      </div>
                    </Comment>
                  </ReviewCard>
                </ReviewWrap>
              );
            })}

            {host?.userid !== user?.userid && (
              <ReviewWrap>
                <ReviewCard>
                  <UserInfo>
                    <User>
                      <img src={host?.image} />
                      <div>
                        <span className="nickname">{host?.nickname}</span>
                        <span className="job">{host?.job}</span>
                      </div>
                    </User>
                    <RatingBox>
                      <h2>호스트 {host?.nickname}님과의 식사는 어떠셨나요?</h2>
                      <ReviewRating getValue={getValue} />
                      {/* <Rating>
                        {forks.map((_, index) => {
                          return (
                            <ForkImg
                              style={{
                                cursor: "pointer",
                                marginRight: "4px",
                                width: "15.1px",
                                height: "14px",
                              }}
                              key={index}
                              onClick={() => handleClick(index + 1)}
                              onMouseOver={() => handleMouseOver(index + 1)}
                              onMouseLeave={handleMouseLeave}
                              fill={
                                (hoverValue || currentValue) > index
                                  ? "#ff9841"
                                  : "#efefef"
                              }
                            />
                          );
                        })}
                        <span>{currentValue}점</span>
                      </Rating> */}
                    </RatingBox>
                  </UserInfo>
                  <Comment>
                    <span>리뷰 작성하기</span>
                    <div>
                      <textarea
                        maxlength="140"
                        onChange={onChangeContent}
                        placeholder="140자 미만 작성해주세요"
                      />
                    </div>
                  </Comment>
                </ReviewCard>
              </ReviewWrap>
            )}

            <SubmitBtn
              onClick={() => {
                addReviewData();
              }}
            >
              리뷰 작성 완료
            </SubmitBtn>
            <SubmitMsg>{checkError}</SubmitMsg>
          </ReviewContainar>
        </Wrapper>
      </Modal.Body>
    </Modal>
  );
};

const Wrapper = styled.div`
  max-width: 1920px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3000;
  background-color: #ffc428;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReviewContainar = styled.div`
  width: 1200px;
  max-height: 923px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: solid 1px #dfdfdf;
  background-color: #ffffff;
  padding: 3.2rem 3.18rem;
  position: relative;
  h1 {
    font-size: 2rem;
    color: #3c3c3c;
    line-height: 2.6rem;
    font-weight: 500;
    margin: 2.6rem 0 0.6rem 0;
  }
  h2 {
    font-size: 1.6rem;
    color: #64656a;
    line-height: 3.2rem;
  }
  @media only screen and (max-width: 768px) {
    width: 350px;
  }
`;

const Exit = styled.img`
  width: 1.4rem;
  height: 1.4rem;
  position: absolute;
  right: 3.18rem;
  top: 3.2rem;
  cursor: pointer;
`;

const ReviewWrap = styled.div`
  width: 635px;
  max-height: 620px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0 1.6rem 0;
  @media only screen and (max-width: 768px) {
    width: 308px;
  }
`;

const ReviewCard = styled.div`
  width: 527px;
  height: 129px;
  @media only screen and (max-width: 768px) {
    width: 308px;
  }
`;

const UserInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
  div {
    display: flex;
    flex-direction: column;
    margin-left: 1.2rem;
    .nickname {
      font-size: 1.4rem;
      color: #64656a;
      line-height: 2.2rem;
      margin-bottom: 0.3rem;
    }
    .job {
      font-size: 1.2rem;
      color: #bebfc1;
      line-height: 2rem;
    }
  }
`;

const RatingBox = styled.div`
  h2 {
    font-size: 1.6rem;
    color: #64656a;
    line-height: 2.6rem;
    margin-bottom: 0.8rem;
  }
`;

// const Rating = styled.div`
//   display: flex;
//   span {
//     font-size: 1.4rem;
//     color: #64656a;
//     margin-left: 10px;
//   }
// `;

const Comment = styled.div`
  width: 527px;
  display: flex;
  flex-direction: column;
  margin-top: 0.8rem;
  div {
    height: 48px;
    margin-top: 0.6rem;
    padding: 0.6rem 0.8rem 0.5rem 0.8rem;
    border-radius: 4px;
    background-color: #f8f8f8;
    border: none;
  }
  textarea {
    font-size: 1.3rem;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    resize: none;
    background-color: #f8f8f8;
  }
  @media only screen and (max-width: 768px) {
    width: 308px;
  }
`;

const SubmitBtn = styled.button`
  width: 308px;
  height: 56px;
  border: none;
  border-radius: 4px;
  background-color: #ff9841;
  color: #ffffff;
  font-size: 1.6rem;
  line-height: 2.6rem;
  font-weight: 700;
  margin-bottom: 1.6rem;
`;

const SubmitMsg = styled.span`
  font-size: 1.4rem;
  line-height: normal;
  color: #ff9841;
`;

export default ReviewModal;
