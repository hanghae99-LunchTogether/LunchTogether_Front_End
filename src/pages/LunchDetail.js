/* eslint-disable */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { lunchActions } from "../redux/modules/lunch";
import CommentWrite from "../components/CommentWrite";
import { Image } from "../elements";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { apis } from "../shared/axios";

const LunchDetail = props => {
  const { history } = props;
  const dispatch = useDispatch();

  const user_info = useSelector(state => state);
  const post_info = useSelector(state => state);
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  console.log(post_info);
  const lunchId = props.match.params.lunchid;

  const [lunch, setLunch] = useState("null");

  const getLunch = async () => {
    const data = await apis.getOneLunch(lunchId);
    const lunchData = data.data.data.lunch;
    setLunch(lunchData);
  };

  useEffect(() => {
    getLunch();
  }, []);
  return (
    <>
      <LunchDetailBox>
        <Title>하이디라오 강남점에서 점심 같이 먹어요👀</Title>
        <p style={{ fontWeight: "bold" }}>작성자</p>
        <UserInfoBox>
          <Image
            shape="circle"
            size="100"
            src={"https://t1.daumcdn.net/cfile/blog/134665344D7625B635"}
            /*src={user_info.image}*/
          />
          <UserInfo>
            <p>
              화정
              <span
                style={{
                  fontSize: "12px",
                  color: "#a2a9af",
                  marginLeft: "5px",
                }}
              >
                | 디자이너
              </span>
            </p>
            <p>매너온도 60도</p>
            <p>ISFJ</p>
          </UserInfo>
        </UserInfoBox>

        <InfoWrap>
          <label>
            <LabelName>설명</LabelName>
            <DetailDesc>
              마라탕 같이 드실 분 구해요. 저희 회사 분들은 매운걸 못 드시네요
              같이 점심 드실분?
            </DetailDesc>
          </label>
        </InfoWrap>
        <InfoWrap>
          <label>
            <LabelName>약속 날짜/시간</LabelName>
            <DetailInfo>
              2021년 12월31일 (수) 12시 30분~13시 30분(1시간)
            </DetailInfo>
          </label>
        </InfoWrap>
        <InfoWrap>
          <label>
            <LabelName>음식점 위치</LabelName>
            <DetailInfo>서울특별시 서초구 서초동 서초대로77길 54</DetailInfo>
          </label>
        </InfoWrap>
        <MemberAndButtonWrap>
          <MemberNum>
            <MemberNumLeft>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  margin: "5px 0px",
                }}
              >
                모집인원
              </p>
              <span style={{ fontSize: "12px", color: "#a2a9af" }}>2/4 명</span>
            </MemberNumLeft>
            <AvatarGroup max={4}>
              <Avatar
                alt="Remy Sharp"
                src="https://t1.daumcdn.net/cfile/blog/134665344D7625B635"
              />
              <Avatar
                alt="Travis Howard"
                src="https://news.nateimg.co.kr/orgImg/iz/2021/04/29/6bbc25b9-e735-4d0b-a59d-fb7a99e0723d.jpg"
              />
              <Avatar
                alt="Cindy Baker"
                src="https://img2.sbs.co.kr/img/sbs_cms/CH/2020/01/02/CH44395109_w300_h300.jpg"
              />
              <Avatar
                alt="Agnes Walker"
                src="https://cdnweb01.wikitree.co.kr/webdata/editor/202110/06/img_20211006122415_d52bb366.webp"
              />
            </AvatarGroup>
          </MemberNum>
          <DetailButton
            onClick={() => {
              if (!isLoggedIn) {
                window.alert("로그인을 해주세요!");
                history.replace("/login");
              }
            }}
          >
            신청하기
          </DetailButton>
        </MemberAndButtonWrap>
        <CommentWrite></CommentWrite>
      </LunchDetailBox>
    </>
  );
};

const LunchDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 33.33vw;
  min-width: 350px;
  max-width: 768px;
  padding: 10px;
  margin: 30px auto;
  box-shadow: 5px 5px 5px 5px #ebecf0;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 20px;
  margin: 30px 0px;
`;

const UserInfoBox = styled.div`
  display: flex;
  padding: 15px;
  box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  flex-direction: column;
`;

const InfoWrap = styled.div`
  padding: 10px 0px;
  width: 100%;
`;

const LabelName = styled.p`
  font-size: 12px;
  font-weight: bold;
  padding-bottom: 10px;
`;

const DetailDesc = styled.div`
  height: 129px;
  width: 100%;
  padding: 12px;
  border: 2px solid #dadada;
  border-radius: 5px;
`;

const DetailInfo = styled.div`
  width: 100%;
  padding: 12px;
  border: 2px solid #dadada;
  border-radius: 5px;
`;

const MemberAndButtonWrap = styled.div`
  display: flex;
`;

const MemberNum = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 68%;
  padding: 12px;
  margin: 10px 10px 10px 0px;
  border: 2px solid #dadada;
  border-radius: 5px;
`;

const MemberNumLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailButton = styled.button`
  flex: 1;
  margin: 10px 0px 10px 0px;
  padding: 10px;
  border: 2px solid #dadada;
  border-radius: 5px 5px 30px 5px;
  transition: 0.1s;
  &:hover {
    border-radius: 5px;
    color: white;
    background-color: #204969;
  }
`;

export default LunchDetail;
