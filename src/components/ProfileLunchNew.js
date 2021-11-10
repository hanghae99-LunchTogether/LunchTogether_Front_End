import React from "react";
import styled from "styled-components";
import LunchNew from "./LunchNew";

const ProfileLunchNew = props => {
  return (
    <>
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
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  max-width: 1200px;
  flex-wrap: wrap;
`;

export default ProfileLunchNew;
