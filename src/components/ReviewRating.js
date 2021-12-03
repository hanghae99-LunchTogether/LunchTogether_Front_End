import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ReactComponent as ForkImg } from "../assets/fork.svg";

const ReviewRating = (props) => {
  const currentUser = useSelector((state) => state.user.user);

  const { user, lunchid, reviews, setReviews, idx } = props;

  console.log(user);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [comment, setComment] = useState("");
  const forks = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
    setReviews(
      reviews.map((r, i) => {
        if (idx === i) {
          return { ...r, targetUserId: user?.user?.userid, spoon: value };
        } else {
          return r;
        }
      })
    );
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const onChangeComment = (e) => {
    setReviews(
      reviews.map((r, i) => {
        if (idx === i) {
          return {
            ...r,
            targetUserId: user?.user?.userid,
            comment: e.target.value,
          };
        } else {
          return r;
        }
      })
    );
  };

  return (
    <ReviewWrap>
      <ReviewCard>
        <UserInfo>
          <User>
            <img src={user?.user?.image} />
            <div>
              <span className="nickname">{user?.user?.nickname}</span>
              <span className="job">{user?.user?.job}</span>
            </div>
          </User>
          <RatingBox>
            <h2>{user?.user?.nickname}님과의 식사는 어떠셨나요?</h2>
            <Rating>
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
            </Rating>
          </RatingBox>
        </UserInfo>
        <Comment>
          <span>리뷰 작성하기</span>
          <div>
            <textarea
              maxLength="140"
              onChange={onChangeComment}
              placeholder="140자 미만 작성해주세요"
            />
          </div>
        </Comment>
      </ReviewCard>
    </ReviewWrap>
  );
};

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

const Rating = styled.div`
  display: flex;
  span {
    font-size: 1.4rem;
    color: #64656a;
    margin-left: 10px;
  }
`;

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

export default ReviewRating;
