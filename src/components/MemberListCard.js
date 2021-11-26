import React from "react";
import styled from "styled-components";

import { Avatar } from "@mui/material";

import { history } from "../redux/configureStore";

const MemberListCard = ({ userid, nickname, image, introduction, job }) => {
  return (
    <>
      <MemberCard>
        <CardTop>
          <Avatar
            src={`${image && image}`}
            sx={{ width: "60px", height: "60px" }}
          />
          <MemberInfo
            onClick={() => {
              history.push(`profile/${userid}`);
            }}
          >
            <MemberName>{nickname}</MemberName>
            <Memberjob>{job}</Memberjob>
          </MemberInfo>
        </CardTop>
        <CardBottom>
          <MemberDesc>{introduction}</MemberDesc>
          <MemberButton onClick={() => history.push(`/private/${userid}`)}>
            신청하기
          </MemberButton>
        </CardBottom>
      </MemberCard>
    </>
  );
};

const MemberCard = styled.div`
  box-sizing: border-box;
  padding: 20px 10px 10px 10px;
  background-color: white;
  border-radius: 10px;
  width: 365px;
  margin: 5px;
  box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
  &:hover {
    background-color: #f2f4f6;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const CardTop = styled.div`
  margin: 15px 0;
  display: flex;
  align-items: center;
`;

const MemberInfo = styled.div`
  cursor: pointer;
  margin: 0 10px;
`;

const MemberName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Memberjob = styled.p`
  font-size: 16px;
  color: #9d9d9d;
`;

const CardBottom = styled.div`
  display: flex;
  flex-direction: column;
`;

const MemberDesc = styled.p`
  height: 60px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-top: 10px;
  font-size: 16px;
  padding: 5px;
  line-height: 30px;
  overflow: hidden;
`;

const MemberButton = styled.button`
  padding: 7px 15px;
  margin: 25px 5px 10px 5px;
  height: 37px;
  color: #ed6653;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  background-color: #ffedee;
  box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
  &:hover {
    border: 1px solid #ed6653;
  }
`;

export default MemberListCard;
