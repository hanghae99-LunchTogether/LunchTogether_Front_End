import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { reviewActions } from "../redux/modules/review";

const Review = props => {
  const [content, setContent] = useState("");
  const { reviewUserId, reviewContent, reviewId, lunchId } = props;
  const user = useSelector(state => state.user.user);
  console.log(user);
  const dispatch = useDispatch();

  const deleteReview = () => {
    dispatch(reviewActions.deleteReviewAPI(reviewId));
  };

  const onChange = e => {
    const {
      target: { value },
    } = e;
    setContent(value);
  };

  const addReview = () => {
    dispatch(reviewActions.addReviewAPI(content));
  };

  useEffect(() => {
    // dispatch(reviewActions.getReviewAPI(lunchId));
  }, []);

  return (
    <>
      <Wrap>
        <ReviewWrap>
          <p>리뷰</p>
          <input type="text" onChange={onChange} value={content} />
          <button onClick={addReview}>등록</button>
        </ReviewWrap>
        <div>유저아이디</div>
        <div>리뷰내용</div>
        <DeleteBtn onClick={deleteReview}>
          {/* {user.userid === reviewUserId && <div>X</div>} */}
        </DeleteBtn>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  margin: 30px auto;
  box-sizing: border-box;
`;

const ReviewWrap = styled.div`
  display: flex;
  margin: 10px 0;
`;
const User = styled.div`
  padding: 0 10px;
  font-weight: bold;
  font-size: 14px;
`;
const UserReview = styled.div`
  text-align: left;
  font-size: 14px;
  word-break: break-all;
  margin-right: 25px;
`;
const DeleteBtn = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 23px;
  color: #939597;
  cursor: pointer;
`;

export default Review;
