import React from "react";
import styled from "styled-components";

import { Avatar } from "@mui/material";

const LunchMemberCard = () => {
  return (
    <CardWrap>
      <Card>
        <Avatar
          style={{ width: "6rem", height: "6rem", marginBottom: "1rem" }}
          src="https://mblogthumb-phinf.pstatic.net/MjAxOTA5MTZfNDEg/MDAxNTY4NjEzNDE4MDky.AtKgatkzuefGhdjn7FiyyDg8UsM7cjkcAQ-o1WrgUYUg.VvkFBGaPnYOxQhKjcQk3Pzqfj9oPI5twchbOj9VbcQIg.JPEG.b-seol/42002592_146833202929531_3098455045419712594_n.jpg?type=w800"
        />
        <UserName>이민국</UserName>
        <UserJob>개발자</UserJob>
        <CardButton>신청거절</CardButton>
      </Card>
      <Card>
        <Avatar
          style={{ width: "6rem", height: "6rem", marginBottom: "1rem" }}
          src="https://mblogthumb-phinf.pstatic.net/MjAxOTA5MTZfNDEg/MDAxNTY4NjEzNDE4MDky.AtKgatkzuefGhdjn7FiyyDg8UsM7cjkcAQ-o1WrgUYUg.VvkFBGaPnYOxQhKjcQk3Pzqfj9oPI5twchbOj9VbcQIg.JPEG.b-seol/42002592_146833202929531_3098455045419712594_n.jpg?type=w800"
        />
        <UserName>이민국</UserName>
        <UserJob>개발자</UserJob>
        <CardButton>신청거절</CardButton>
      </Card>
      <Card>
        <Avatar
          style={{ width: "6rem", height: "6rem", marginBottom: "1rem" }}
          src="https://mblogthumb-phinf.pstatic.net/MjAxOTA5MTZfNDEg/MDAxNTY4NjEzNDE4MDky.AtKgatkzuefGhdjn7FiyyDg8UsM7cjkcAQ-o1WrgUYUg.VvkFBGaPnYOxQhKjcQk3Pzqfj9oPI5twchbOj9VbcQIg.JPEG.b-seol/42002592_146833202929531_3098455045419712594_n.jpg?type=w800"
        />
        <UserName>이민국</UserName>
        <UserJob>개발자</UserJob>
        <CardButton>신청거절</CardButton>
      </Card>
    </CardWrap>
  );
};

const CardWrap = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  width: 33%;
  margin: 0.5rem;
  padding: 0.8rem;
  line-height: 2rem;
  background-color: #fff7f7;
  &:hover {
    background-color: #fff1ac;
  }
`;

const UserName = styled.p`
  color: #3c3c3c;
  font-weight: bold;
  font-size: 1.6rem;
`;

const UserJob = styled.p`
  font-size: 1.3rem;
  color: #64656a;
`;

const CardButton = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #ffebe7;
  color: #ec693f;
  font-size: 1.2rem;
  font-weight: bold;
  height: 3.5rem;
  margin: 1rem 0;
  border: none;
  border-radius: 7px;
  &:hover {
    background-color: #f71735;
    color: #ffebe7;
  }
`;

export default LunchMemberCard;
