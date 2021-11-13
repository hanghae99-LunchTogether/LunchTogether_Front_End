/* eslint-disable */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { apis } from "../shared/axios";
import LunchNew from "../components/LunchNew";
import { useSelector } from "react-redux";

const Bookmark = props => {
  const [bookmarkList, setBookmarkList] = useState([]);

  const getBookmarkData = async () => {
    try {
      const data = await apis.getBookmark();
      const bookmarkList = data.data.bookmarks;
      setBookmarkList(bookmarkList);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getBookmarkData();
  }, []);

  return (
    <Wrap>
      <Title>관심있는 약속에 참여해보세요!👀</Title>
      <BookmarkList>
        {bookmarkList.map((l, idx) => {
          return <LunchNew {...l} key={idx} />;
        })}
        <FakeDiv />
        <FakeDiv />
        <FakeDiv />
      </BookmarkList>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: black;
  margin-bottom: 3rem;
`;

const BookmarkList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  justify-content: center;
  align-items: center;
  margin: 0 auto 3.2rem auto;
  gap: 2rem 2rem;

  @media only screen and (max-width: 768px) {
    min-width: 350px;
  }
`;

const FakeDiv = styled.div`
  width: 280px;
  margin: 0 auto;
`;

export default Bookmark;
