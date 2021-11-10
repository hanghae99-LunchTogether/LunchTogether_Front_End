import React from "react";
import styled from "styled-components";
import LunchNew from "./LunchNew";

const ProfileLunchNew = props => {
  return (
    <>
      <JustiWrapper>
        <Wrapper>
          <LunchNew />
          <LunchNew />
          <LunchNew />
          <LunchNew />
          <LunchNew />
          <LunchNew />
          <LunchNew />
          <LunchNew />

          <LunchNew />
          <LunchNew />
          <FakeDiv />
          <FakeDiv />
          <FakeDiv />
          <FakeDiv />
        </Wrapper>
      </JustiWrapper>
    </>
  );
};

const JustiWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  justify-content: space-around;
`;
const FakeDiv = styled.div`
  width: 269px;
`;

export default ProfileLunchNew;
