import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as reviewAction } from "../redux/modules/review";

const Review = (props) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onClickSubmit = () => {
    const review = {
      targetuserid: 18,
      spoon: 0,
      comment: content,
    };
    dispatch(reviewAction.addReviewAPI(review));
  };

  return (
    <Wrapper>
      <ReviewBox>
        <h1>제목</h1>
        <h3>날짜 및 시간</h3>
        <ReviewWrap>
          <ReviewCard>
            <UserInfo>
              <User>
                <img src="img/profile.png" style={{ borderRadius: "50%" }} />
                <span>닉네임</span>
              </User>
              <RatingBox></RatingBox>
            </UserInfo>
            <Comment>
              <input onChange={onChangeContent} placeholder="후기작성란" />
            </Comment>
          </ReviewCard>
        </ReviewWrap>
        <button
          onClick={() => {
            onClickSubmit();
          }}
        >
          작성
        </button>
      </ReviewBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReviewBox = styled.div`
  height: 60vh;
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 1px 1px 2px 3px #ebecf0;
`;

const ReviewWrap = styled.div`
  height: 40vh;
`;

const ReviewCard = styled.div`
  width: 50vw;
  height: 30vh;
  border-radius: 5px;
  box-shadow: 1px 1px 2px 3px #ebecf0;
  margin: 1rem;
  padding: 1rem;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const User = styled.div`
  display: flex;
  align-items: center;
`;

const RatingBox = styled.div``;

const Comment = styled.div`
  display: flex;
`;

export default Review;
