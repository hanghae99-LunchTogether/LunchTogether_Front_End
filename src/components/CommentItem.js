/* eslint-disable */

import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as commentAction } from "../redux/modules/comment";
import { MdDelete } from "react-icons/md";

import ProfileImg from "../assets/profile.png";

const CommentItem = (props) => {
  const dispatch = useDispatch();

  const { comment, user, time, commentid } = props;
  const userInfo = useSelector((state) => state.user);
  const url = useSelector((state) => state.router);
  const lunchId = url.location.pathname.slice(11);

  const onClickDelete = () => {
    const result = window.confirm("댓글을 정말로 삭제하시겠습니까?");

    if (result) {
      dispatch(commentAction.deleteCommentAPI(commentid, lunchId));
    }
  };

  return (
    <>
      {userInfo.isLoggedIn == false ? (
        <React.Fragment>
          <Container>
            <User>
              <UserInfo>
                <img src={user.image != null ? user.image : ProfileImg} />
                <div style={{ margin: "auto" }}>
                  <UserName>{user.nickname}</UserName>
                  <Time>{time}</Time>
                </div>
              </UserInfo>
            </User>
            <Content>{comment}</Content>
          </Container>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Container>
            <User>
              <UserInfo>
                <img src={user.image != null ? user.image : ProfileImg} />
                <div style={{ margin: "auto" }}>
                  <UserName>{user.nickname}</UserName>
                  <Time>{time}</Time>
                </div>
              </UserInfo>
              {user.userid === userInfo.user.userid ? (
                <Edit>
                  <span onClick={onClickDelete}>
                    <MdDelete />
                  </span>
                </Edit>
              ) : null}
            </User>
            <Content>{comment}</Content>
          </Container>
        </React.Fragment>
      )}
    </>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: auto;
  border-bottom: 1px solid rgb(233, 236, 239);
  padding: 1.5rem 0 1.5rem 0;
  background-color: #fff;
`;

const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    margin-right: 0.5rem;
  }
`;

const UserInfo = styled.div`
  display: flex;
`;

const UserName = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: rgb(52, 58, 64);
  text-align: left;
`;

const Time = styled.div`
  margin-top: 0.25rem;
  color: rgb(134, 142, 150);
  font-size: 0.875rem;
`;

const Content = styled.div`
  font-size: 1.125rem;
  color: rgb(34, 36, 38);
  line-height: 1.7;
  letter-spacing: -0.004em;
  word-break: keep-all;
  overflow-wrap: break-word;
  text-align: left;
  margin: 1.5rem 0 0 0;
`;

const Edit = styled.div`
  span {
    cursor: pointer;
    font-size: 2rem;
    color: rgb(134, 142, 150);
    margin: 2rem;
    :hover {
      text-decoration: underline;
      color: #b0b5c3;
    }
  }
`;

export default CommentItem;
