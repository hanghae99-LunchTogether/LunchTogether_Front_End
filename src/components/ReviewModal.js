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
  const currentUser = useSelector((state) => state.user.user);

  const { host, lunchid, applicants, onHide, setModalShow } = props;

  const user = useSelector((state) => state.user.user);

  //본인 걸러내기
  const targetUsers = applicants.filter((u) => u.userid !== user.userid);

  const [reviews, setReviews] = useState([
    {
      targetUserId: "",
      reviewerId: currentUser.userid,
      comment: "",
      spoon: "",
      lunchid,
    },
    {
      targetUserId: "",
      reviewerId: currentUser.userid,
      comment: "",
      spoon: "",
      lunchid,
    },
    {
      targetUserId: "",
      reviewerId: currentUser.userid,
      comment: "",
      spoon: "",
      lunchid,
    },
  ]);

  const addReviewData = async () => {
    const _reviews = reviews.filter((r) => r.targetUserId !== "");
    console.log(_reviews);
    try {
      const data = await apis.addReview(_reviews);
      setModalShow(false);
      console.log("????", data);
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
            {targetUsers.map((u, idx) => {
              return (
                <ReviewRating
                  key={idx}
                  user={targetUsers[idx]}
                  lunchid={u.lunchid}
                  reviews={reviews}
                  setReviews={setReviews}
                  idx={idx}
                />
              );
            })}

            <SubmitBtn
              onClick={() => {
                addReviewData();
              }}
            >
              리뷰 작성 완료
            </SubmitBtn>
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

export default ReviewModal;
