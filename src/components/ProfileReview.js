/* eslint-disable */

import React from "react";
import styled from "styled-components";
import { Image } from "../elements";

const ProfileReview = props => {
  const { reviews } = props;
  console.log(reviews);
  return (
    <>
      <Wrapper>
        {reviews.map((review, idx) => (
          <ReviewWrapper>
            <ReviewOwner>
              <Image shape="circle" size="30" />
              <Text style={{ marginLeft: "1rem" }} bold>
                {review.nickname}
              </Text>
            </ReviewOwner>
            <Text size="2" bold color="black" style={{ marginBottom: "1rem" }}>
              {review.content}
            </Text>
          </ReviewWrapper>
        ))}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  margin: 1rem;
  min-width: 380px;
`;

const Text = styled.p`
  font-size: ${props => (props.size ? props.size : "1.6")}rem;
  line-height: 3rem;
  ${props => (props.color ? `font-color: ${props.color}` : "font-color: gray")};
  ${props => props.bold && `font-weight: bold`};
`;

const ReviewOwner = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export default ProfileReview;
