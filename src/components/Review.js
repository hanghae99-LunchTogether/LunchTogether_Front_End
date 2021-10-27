import React, { useEffect } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { reviewActions } from "../redux/modules/review";

const Review = props => {
  const { reviewUserId, reviewContent, reviewId, lunchId } = props;
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  const deleteReview = () => {
    dispatch(reviewActions.deleteReviewAPI(reviewId));
  };

  useEffect(() => {
    dispatch(reviewActions.getReviewAPI(lunchId));
  }, []);

  return (
    <>
      {user && (
        <Wrap>
          <ReviewWrap>
            <User>{reviewUserId}</User>
            <UserReview>{reviewContent}</UserReview>
            <DeleteBtn onClick={deleteReview}>
              {user.userId === reviewUserId && <div>X</div>}
            </DeleteBtn>
          </ReviewWrap>
        </Wrap>
      )}
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
  position: relative;
  display: flex;
  justify-content: flex-start;
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
