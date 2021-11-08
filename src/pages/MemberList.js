import React from "react";
import styled from "styled-components";
import { ImSearch } from "react-icons/im";
import MemberListCard from "../components/MemberListCard";
const MemberList = (props) => {
  return (
    <MemberListBody>
      <InputBox>
        <ImSearch />
        <SearchInput placeholder="멤버 검색" type="text" />
      </InputBox>
      <MemberListWrap>
        <MemberListCard />
      </MemberListWrap>
    </MemberListBody>
  );
};

const MemberListBody = styled.div`
  height: 100vh;
  background-color: #dbdbdb;
`;

const InputBox = styled.div`
  display: flex;
  max-width: 600px;
  min-width: 350px;
  align-items: center;
  background-color: #eff2f5;
  font-size: 1.6rem;
  padding: 10px;
  margin: 10px auto;
  border-radius: 33px;
`;

const SearchInput = styled.input`
  display: flex;
  flex: 1;
  border: none;
  background-color: transparent;
  outline-width: 0;
`;

const MemberListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 350px;
  max-width: 600px;
  margin: auto;
  box-sizing: border-box;
  background-color: #c2c2c2; //임시 색깔
  }
`;

export default MemberList;
