/* eslint-disable */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../redux/configureStore";
import { actionCreators as commentAction } from "../redux/modules/comment";
import CommentList from "./CommentList";

const CommentWrite = (props) => {
  const dispatch = useDispatch();
  const commentList = useSelector((state) => state.comment.commentList.comment);
  const url = useSelector((state) => state.router);
  const lunchId = url.location.pathname.slice(11);
  const user = useSelector((state) => state.user);
  const isLoggedIn = user.isLoggedIn;
  const [content, setContent] = useState("");

  useEffect(() => {
    dispatch(commentAction.getCommentAPI(lunchId));
  }, []);

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onClickWrite = () => {
    const comment = {
      lunchId: lunchId,
      comment: content,
    };

    if (content === "") {
      window.alert("내용을 입력해주세요.");
    }
    if (isLoggedIn === false) {
      window.alert("로그인 후 이용해 주세요.");
      history.push("/login");
    }

    dispatch(commentAction.addCommentAPI(comment));
    setContent("");
  };

  return (
    <React.Fragment>
      <Container>
        <Count>{commentList?.length}개의 댓글</Count>
        <InputBtn>
          <Input
            placeholder="댓글을 작성하세요"
            onChange={onChangeContent}
            value={content}
          />
          <Button
            onClick={() => {
              onClickWrite();
            }}
          >
            댓글 작성
          </Button>
        </InputBtn>
      </Container>
      <CommentList></CommentList>
    </React.Fragment>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Count = styled.h4`
  box-sizing: border-box;
  max-width: 768px;
  min-width: 452px;
  width: 100%;
  font-size: 1.125rem;
  line-height: 1.5;
  font-weight: 600;
  color: #343a40;
  display: block;
  text-align: left;
  margin: 0 auto 1rem auto;
`;

const InputBtn = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.8rem 1.6rem;
  outline: none;
  border: none;
  background-color: #fafafa;
  margin-bottom: 1.5rem;
  margin-right: 1.6rem;
  width: 87.5%;
  box-sizing: inherit;
  border-radius: 4px;
  min-height: 4rem;
  font-size: 1.4rem;
  color: rgb(33, 37, 41);
  line-height: 1.75;
  word-break: break-all;
  ::placeholder {
    color: #adb5bd;
  }
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  border: none;
  background: #c1c1c1;
  color: white;
  border-radius: 4px;
  padding: 0.625rem 1.25rem;
  height: 2rem;
  min-height: 4rem;
  font-size: 1rem;
  font-family: inherit;
  box-sizing: inherit;
  outline: none;
  width: 92px;
  transition: 0.6s;
  &:hover {
    background-color: #ff9841;
    font-size: 1.2rem;
  }
`;

export default CommentWrite;
