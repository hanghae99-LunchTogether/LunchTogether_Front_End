import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { apis } from "../shared/axios";

import BookmarkImg from "../assets/bookmark.svg";
import BookmarkImgFilled from "../assets/bookmarkFilled.svg";

const BookmarkBtn = (props) => {
  const { bk_num, isbook, lunchid } = props;

  const [active, setActive] = useState(isbook);
  const [num, setNum] = useState(bk_num);

  const addBookmarkData = async () => {
    if (active) {
      setActive(!active);
      setNum(num - 1);
    } else {
      setActive(!active);
      setNum(num + 1);
    }
    try {
      const data = await apis.addBookmark(lunchid);
      console.log("추가", data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <Bookmark onClick={addBookmarkData}>
      <img src={active ? BookmarkImgFilled : BookmarkImg} />
      <span>{num}</span>
    </Bookmark>
  );
};
const Bookmark = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    width: 18px;
    height: 21px;
  }
  span {
    font-size: 1.4rem;
    color: #64656a;
    opacity: 0.3;
    margin-left: 0.6rem;
  }
`;
export default BookmarkBtn;
