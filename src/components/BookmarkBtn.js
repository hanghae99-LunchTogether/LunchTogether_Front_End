import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { apis } from "../shared/axios";

import StarFill from "../assets/starFill.svg";
import Star from "../assets/star.svg";
import { history } from "../redux/configureStore";

const BookmarkBtn = (props) => {
  const user = useSelector((state) => state.user.user);

  const { bk_num, isbook, lunchid } = props;

  const [active, setActive] = useState(isbook);
  const [num, setNum] = useState(bk_num);

  const addBookmarkData = async () => {
    if (active) {
      setActive(!active);
      setNum(num - 1);
      window.alert("즐겨찾기 등록취소!");
      history.push("/");
    } else {
      setActive(!active);
      setNum(num + 1);
      window.alert("즐겨찾기 등록완료!");
      history.push("/bookmark");
    }
    try {
      const data = await apis.addBookmark(lunchid);
      console.log("추가", data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const notUser = () => {
    alert("로그인 후 이용가능한 서비스입니다😉");
  };

  return (
    <>
      {user ? (
        <Bookmark onClick={addBookmarkData}>
          <img src={active ? StarFill : Star} />
          <span>{num}</span>
        </Bookmark>
      ) : (
        <Bookmark onClick={notUser}>
          <img src={Star} />
          <span>{num}</span>
        </Bookmark>
      )}
    </>
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
