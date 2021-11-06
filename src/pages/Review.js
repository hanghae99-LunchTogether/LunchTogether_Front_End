import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as reviewAction } from "../redux/modules/review";
import { FaStar } from "react-icons/fa";

const Review = (props) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onClickSubmit = () => {
    const review = {
      targetuserid: 1964619422,
      spoon: currentValue,
      comment: content,
    };
    dispatch(reviewAction.addReviewAPI(review));
  };

  // 평점;
  const colors = {
    orange: "#FFBA5A",
    gray: "#a9a9a9",
  };
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  // 모달창;
  const [modalOpen, setModalOpen] = useState(false);
  const modalClose = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <button onClick={modalClose}>모달창 켜기</button>

      {modalOpen && (
        <Wrapper>
          <ReviewBox>
            <Exit onClick={modalClose}>X</Exit>
            <h1>점심식사 리뷰 남기기</h1>
            <h2>
              즐거운 점심식사 보내셨나요? 함께 즐긴 멤버에 대한 평가를
              남겨주세요
            </h2>

            <ReviewWrap>
              <ReviewCard>
                <UserInfo>
                  <User>
                    <img src="img/profile.png" />
                    <div>
                      <span className="nickname">닉네임</span>
                      <span className="job">직업</span>
                    </div>
                  </User>
                  <RatingBox>
                    <h2>닉넴님과의 식사는 어떠셨나요?</h2>
                    <Rating>
                      <div style={styles.stars}>
                        {stars.map((_, index) => {
                          return (
                            <FaStar
                              key={index}
                              size={14}
                              onClick={() => handleClick(index + 1)}
                              onMouseOver={() => handleMouseOver(index + 1)}
                              onMouseLeave={handleMouseLeave}
                              color={
                                (hoverValue || currentValue) > index
                                  ? colors.orange
                                  : colors.gray
                              }
                              style={{
                                marginRight: 5.2,
                                cursor: "pointer",
                              }}
                            />
                          );
                        })}
                      </div>
                      <span>별점</span>
                    </Rating>
                  </RatingBox>
                </UserInfo>
                <Comment>
                  <span>리뷰 작성하기</span>
                  <input
                    onChange={onChangeContent}
                    placeholder="140자 미만 작성해주세요"
                  />
                </Comment>
              </ReviewCard>
            </ReviewWrap>
            <SubmitBtn
              onClick={() => {
                onClickSubmit();
              }}
            >
              리뷰 작성 완료
            </SubmitBtn>
          </ReviewBox>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  max-width: 192rem;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(120, 121, 125, 0.5);
`;

const ReviewBox = styled.div`
  width: 107.1rem;
  height: 92.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  border: solid 1px #dfdfdf;
  background-color: #ffffff;
  position: relative;

  h1 {
    font-size: 2rem;
    color: #3c3c3c;
    line-height: 2.6rem;
    font-weight: 500;
  }

  h2 {
    font-size: 1.6rem;
    color: #64656a;
    line-height: 3.2rem;
    margin: 0.6rem 0 4.6rem 0;
  }
`;

const Exit = styled.button`
  position: absolute;
  right: 0;
  top: 0;
`;

const ReviewWrap = styled.div`
  width: 63.5rem;
  height: 62rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReviewCard = styled.div`
  width: 52.7rem;
  height: 12.9rem;
`;

const UserInfo = styled.div`
  width: 100%;
  height: 5.8rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const User = styled.div`
  width: 10.6rem;
  display: flex;
  align-items: center;

  img {
    width: 4.8rem;
    height: 4.8rem;
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
      margin-top: 0.5px;
      margin-bottom: 0.3rem;
    }
    .job {
      font-size: 1.2rem;
      color: #bebfc1;
      line-height: 2rem;
      margin-bottom: 0.3rem;
    }
  }
`;

const RatingBox = styled.div`
  width: 20.6rem;
  height: 5.2rem;

  h2 {
    font-size: 1.6rem;
    color: #64656a;
    line-height: 2.6rem;
  }
`;

const Rating = styled.div`
  display: flex;
`;

const Comment = styled.div`
  width: 52.7rem;
  height: 7.1rem;
  display: flex;
  flex-direction: column;

  input {
    height: 4.8rem;
    margin-top: 0.6rem;
    padding: 0.6rem 0.8rem 0.5rem 0.8rem;
    border-radius: 0.4rem;
    background-color: #f8f8f8;
    border: none;
  }
`;

const SubmitBtn = styled.button`
  width: 30.8rem;
  height: 5.6rem;
  border: none;
  border-radius: 0.4rem;
  background-color: #ff9841;
  color: #ffffff;
  font-size: 1.6rem;
  line-height: 2.6rem;
  font-weight: 500;
`;

const styles = {
  stars: {
    display: "flex",
    flexDirection: "row",
  },
};

export default Review;
