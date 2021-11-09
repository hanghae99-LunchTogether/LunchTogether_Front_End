import React from "react";
import styled from "styled-components";

const ProfileLunchNew = props => {
  return <div>ddd</div>;
};

const LunchWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.div``;

const CircleImage = styled.div`
  --size: ${props => props.size}rem;
  width: var(--size);
  height: var(--size);
  border-radius: ${props => props.size}rem;

  background-image: url("${props => props.src}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
`;

export default ProfileLunchNew;
