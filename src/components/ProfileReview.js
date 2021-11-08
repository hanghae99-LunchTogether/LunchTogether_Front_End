/* eslint-disable */

import React from "react";
import styled from "styled-components";

const ProfileReview = props => {
  return (
    <>
      <Wrapper>
        <ReviewListWrapper></ReviewListWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 820px;
`;

const ReviewListWrapper = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: none;
  min-width: 400px;
`;

export default ProfileReview;
