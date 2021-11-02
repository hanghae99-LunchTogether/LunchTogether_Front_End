import React from "react";
import styled from "styled-components";

const CommentItem = (props) => {
  return (
    <React.Fragment>
      <Container>
        <User>
          <UserInfo>
            <img src={"/img/profile.png"} />
            <div style={{ margin: "auto" }}>
              <UserName>닉네임</UserName>
              <Time>시간</Time>
            </div>
          </UserInfo>
          <Edit>
            <span>수정</span>
            <span>삭제</span>
          </Edit>
        </User>
        <Content>내용</Content>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  margin: 2.5rem;
  box-sizing: border-box;
  width: 100%;
  max-width: 768px;
  min-width: 452px;
  margin: auto;
  border-bottom: 1px solid rgb(233, 236, 239);
  padding: 1.5rem 0 1.5rem 0;
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
    font-size: 0.875rem;
    color: rgb(134, 142, 150);
    margin-left: 0.5rem;
    :hover {
      text-decoration: underline;
      color: #b0b5c3;
    }
  }
`;

export default CommentItem;
