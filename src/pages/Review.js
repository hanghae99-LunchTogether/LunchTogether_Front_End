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

  //평점
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

  //모달창
  const [modalOpen, setModalOpen] = useState(false);
  const modalClose = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Wrapper>
      <button onClick={modalClose}>모달창 켜기</button>
      <>
        {modalOpen && (
          <ReviewBox>
            <h1>제목</h1>
            <h3>날짜 및 시간</h3>
            <button onClick={modalClose}>모달창 끄기</button>
            <ReviewWrap>
              <ReviewCard>
                <UserInfo>
                  <User>
                    <img
                      src="img/profile.png"
                      style={{ borderRadius: "50%" }}
                    />
                    <span>닉네임</span>
                  </User>
                  <RatingBox>
                    <h2> 닉네임님과의 식사는 어떠셨나요? </h2>
                    <div style={styles.stars}>
                      {stars.map((_, index) => {
                        return (
                          <FaStar
                            key={index}
                            size={24}
                            onClick={() => handleClick(index + 1)}
                            onMouseOver={() => handleMouseOver(index + 1)}
                            onMouseLeave={handleMouseLeave}
                            color={
                              (hoverValue || currentValue) > index
                                ? colors.orange
                                : colors.gray
                            }
                            style={{
                              marginRight: 10,
                              cursor: "pointer",
                            }}
                          />
                        );
                      })}
                    </div>
                  </RatingBox>
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
        )}
      </>
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

const styles = {
  stars: {
    display: "flex",
    flexDirection: "row",
  },
};
export default Review;
