/* eslint-disable */

import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { apis } from "../shared/axios";

import { RiArrowUpSLine } from "react-icons/ri";

import MemberListCard from "../components/MemberListCard";

const MemberList = (props) => {
  //무한스크롤
  const [page, setPage] = useState(1);
  const [next, setNext] = useState(true);
  const [fetching, setFetching] = useState(false);

  const [alluser, setAllUser] = useState([]);
  const getMemberDate = async () => {
    setFetching(true);
    setPage(page + 1);
    if (!next) {
      return;
    }
    const data = await apis.getMemberList(page);
    const allusers = data.data.user;
    setAllUser([...alluser, ...allusers]);
    if (allusers.length < 11) {
      setNext(false);
    }
    setFetching(false);
  };

  useEffect(() => {
    getMemberDate();
  }, []);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight && !fetching) {
      getMemberDate();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <MemberListWrap>
        {alluser.map((user, idx) => {
          return <MemberListCard {...user} key={idx} />;
        })}
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

const MemberListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 350px;
  max-width: 750px;
  margin: auto;
  box-sizing: border-box;
  @media only screen and (max-width: 768px) {
    margin: 0 auto 75px auto;
  }
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
