import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";

const MemberList = (props) => {
  return (
    <Body>
      <MemberListWrap>
        <MemberCard>
          <CardTop>
            <Avatar sx={{ width: "60px", height: "60px" }} />
            <MemberInfo>
              <MemberName>화정</MemberName>
              <p>디자이너</p>
            </MemberInfo>
          </CardTop>
          <MemberDesc>
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book.
          </MemberDesc>
        </MemberCard>
        <MemberCard>
          <CardTop>
            <Avatar sx={{ width: "60px", height: "60px" }} />
            <MemberInfo>
              <MemberName>화정</MemberName>
              <p>디자이너</p>
            </MemberInfo>
          </CardTop>
          <MemberDesc>
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book.
          </MemberDesc>
        </MemberCard>
      </MemberListWrap>
    </Body>
  );
};

const Body = styled.div`
  height: 100vh;
  background-color: #dbdbdb;
`;

const MemberListWrap = styled.div`
  display: flex;
  min-width: 350px;
  max-width: 600px;
  margin: auto;
  box-sizing: border-box;
  background-color: #c2c2c2; //임시 색깔
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const MemberCard = styled.div`
  box-sizing: border-box;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  width: 290px;
  margin: 5px;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const CardTop = styled.div`
  display: flex;
  align-items: center;
`;

const MemberInfo = styled.div`
  margin: 0 10px;
`;

const MemberName = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const CardBottom = styled.div``;

const MemberDesc = styled.p`
  height: 100px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  margin-top: 10px;
  font-size: 16px;
  padding: 5px;
  line-height: 3rem;
  overflow: hidden;
`;

export default MemberList;
