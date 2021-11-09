import React from "react";
import styled from "styled-components";

import { Avatar } from "@mui/material";

const MemberListCard = () => {
  return (
    <>
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
          dummy text ever since the 1500s, when an unknown printer took a galley
        </MemberDesc>
      </MemberCard>
      {/* map 돌리기전 임시더미데이터 */}
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
          dummy text ever since the 1500s, when an unknown printer took a galley
        </MemberDesc>
      </MemberCard>
      {/* map 돌리기전 임시더미데이터 */}
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
          dummy text ever since the 1500s, when an unknown printer took a galley
        </MemberDesc>
      </MemberCard>
    </>
  );
};

const MemberCard = styled.div`
  box-sizing: border-box;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  max-width: 290px;
  margin: 5px;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
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

export default MemberListCard;
