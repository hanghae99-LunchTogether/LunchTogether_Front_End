import React, { useState } from "react";
import styled from "styled-components";
import { ImSearch } from "react-icons/im";
import { RiArrowUpSLine } from "react-icons/ri";

import MemberListCard from "../components/MemberListCard";

const MemberList = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <InputBox>
        <ImSearch />
        <SearchInput
          placeholder="멤버 검색"
          type="text"
          onClick={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </InputBox>
      <MemberListWrap>
        <MemberListCard />
        <MemberListCard />
        <MemberListCard />
        <MemberListCard />
        <MemberListCard />
        <MemberListCard />
        <MemberListCard />
        <MemberListCard />
      </MemberListWrap>
      <UpScroll
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <RiArrowUpSLine />
      </UpScroll>
    </>
  );
};

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
`;

const UpScroll = styled.div`
  display: flex;
  position: fixed;
  right: 10vw;
  bottom: 20vh;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  font-size: 35px;
  border-radius: 20px;
  background-color: #f5f4e8;
  cursor: pointer;
  color: #f29c2b;
  box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
  &:hover {
    align-items: start;
  }
`;

export default MemberList;
