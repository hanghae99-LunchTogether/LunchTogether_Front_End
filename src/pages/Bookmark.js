/* eslint-disable */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { apis } from "../shared/axios";
import LunchNew from "../components/LunchNew";
import { useSelector } from "react-redux";
import moment from "moment";

const Bookmark = (props) => {
  const today = moment(new Date()).format();
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
        {bookmarkList.map((item, idx) => {
          if (today < item.date) {
            return <LunchNew {...item} key={idx} />;
          } else {
            return null;
          }
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
  padding: 5rem;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: black;
  margin-bottom: 3rem;
`;

const BookmarkList = styled.div`
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3.2rem;
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
