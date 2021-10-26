import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Image } from "../elements";

const HomeProfile = props => {
  const user = useSelector(state => state);
  console.log(user);
  return (
    <>
      <Wrapper>
        <Image shape="circle" size="100" />
        <div>닉네임</div>
        <div>직무명 | 회사명</div>
        <button>점심약속 보기</button>
        <button>점심약속 만들기</button>
      </Wrapper>
    </>
  );
};

export default HomeProfile;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 300px;
  max-height: 500px;
  width: 25%;
  background-color: gray;
  margin-right: 1rem;
`;
