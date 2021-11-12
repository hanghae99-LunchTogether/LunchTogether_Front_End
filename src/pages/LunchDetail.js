/* eslint-disable */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { lunchActions } from "../redux/modules/lunch";
import CommentWrite from "../components/CommentWrite";
import { Image } from "../elements";
import { apis } from "../shared/axios";
import MapContainer from "../components/MapContainer";
import { RiMapPin2Fill, RiHeartFill, RiDislikeFill } from "react-icons/ri";
import { GiKnifeFork } from "react-icons/gi";
import { Avatar } from "@mui/material";
import LunchMemberCard from "../components/LunchMemberCard";

const LunchDetail = props => {
  const { history } = props;
  const dispatch = useDispatch();

  const user_info = useSelector(state => state.user.user);
  console.log(user_info);
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  const lunchId = props.match.params.lunchid;

  const [lunch, setLunch] = useState(null);
  console.log(lunch);
  const getLunch = async () => {
    const data = await apis.getOneLunch(lunchId);
    console.log(data);
    const lunchData = data.data.data.lunch;
    setLunch(lunchData);
    console.log(lunchData);
  };

  useEffect(() => {
    getLunch();
  }, []);

  const applyLunch = async () => {
    const data = await apis.applyLunch(lunchId);
    console.log(data);
  };

  const deleteLunch = async () => {
    const data = await apis.deleteLunch(lunchId);
    console.log(data);
  };

  return (
    <>
      {lunch && (
        <LunchDetailBox>
          <Head>
            <Title>{lunch.title}</Title>
            <SubTitle>{lunch.content}</SubTitle>
          </Head>
          <LunchInfoWrap>
            <LunchInfoLeft>
              <div>신청현황</div>
              <div>날짜시간</div>
              <div>진행시간</div>
              <div>약속장소</div>
            </LunchInfoLeft>
            <LunchInfoRight>
              <div>{lunch.applicants.length + 1}/4</div>
              <div>{lunch.date && lunch.date.substring(0, 16)}</div>
              <div>{lunch.duration * 60}분</div>
              <div>{lunch.locations.place_name}</div>
              &nbsp;
              <a
                style={{ color: "#9d9d9d", textDecoration: "underline" }}
                href={lunch.locations.place_url}
              >
                <RiMapPin2Fill style={{ color: "#2d8df4" }} />
                카카오맵으로자세히보기
              </a>
            </LunchInfoRight>
          </LunchInfoWrap>
          <UserInfoWrap>
            <div>
              <Avatar
                sx={{ width: 100, height: 100 }}
                src={`${lunch.host && lunch.host.image}`}
              />
              {lunch.host.mbti && (
                <NbtiBox>
                  <p>{lunch.host.mbti}</p>
                </NbtiBox>
              )}
            </div>
            <UserInfo>
              <WriterInfo>
                <WriterName>{lunch.host.nickname}</WriterName>
                <WriterJob>{lunch.host.job}</WriterJob>
                <Manner>
                  <GiKnifeFork />
                  {lunch.host.mannerStatus}
                </Manner>
              </WriterInfo>
              <UserAddress>
                <RiMapPin2Fill
                  style={{ marginRight: "0.4rem", color: "red" }}
                />
                {lunch.host.location}
              </UserAddress>
              <UserDescWrap>
                <UserDesc>{lunch.host.introduction}</UserDesc>
              </UserDescWrap>
              <HostMenu>호스트의 메뉴 취향</HostMenu>
              <HostFoodBox>
                {lunch.host.likemenu && (
                  <LikeFood>
                    <RiHeartFill style={{ color: "#ff9841" }} />
                    {lunch.host.likemenu}
                  </LikeFood>
                )}
                {lunch.host.dislikemenu && (
                  <DisLikeFood>
                    <RiDislikeFill />
                    {lunch.host.dislikemenu}
                  </DisLikeFood>
                )}
              </HostFoodBox>
            </UserInfo>
          </UserInfoWrap>
          <MapPosition>
            {lunch.locations.place_name}
            &nbsp;
            <a
              style={{
                color: "#9d9d9d",
                textDecoration: "underline",
                fontSize: "1.2rem",
              }}
              href={lunch.locations.place_url}
            >
              <RiMapPin2Fill style={{ color: "#2d8df4" }} />
              카카오맵으로자세히보기
            </a>
          </MapPosition>
          <MapAddress>{lunch.locations.address_name}</MapAddress>
          <MapWarp>
            <MapContainer />
          </MapWarp>
          <LunchMemberCard />
          <WishMember>이런 분들과 함께 점심을 먹고 싶어요</WishMember>
          <MemberOption>
            🐱고양이를 키우시는 분과 같이 먹고싶어요 (나만 고양이 없어… 고양이
            사진 보고싶어요…)
          </MemberOption>
          <ButtonWrap>
            <DetailButton
              onClick={() => {
                if (!isLoggedIn) {
                  window.alert("로그인을 해주세요!");
                  history.replace("/login");
                }
                applyLunch();
              }}
            >
              점심약속 신청하기
            </DetailButton>
            {user_info?.userid === lunch.userid && (
              <>
                <DetailButton
                  onClick={() => {
                    history.push(`/lunchpost/${lunchId}`);
                  }}
                >
                  수정하기
                </DetailButton>
                <DetailButton
                  onClick={() => {
                    deleteLunch();
                    history.push("/");
                  }}
                >
                  삭제하기
                </DetailButton>
              </>
            )}
          </ButtonWrap>
          <CommentWrite></CommentWrite>
        </LunchDetailBox>
      )}
    </>
  );
};

const LunchDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 33.33vw;
  min-width: 350px;
  max-width: 600px;
  margin: 1.56rem auto 100px auto;
  // box-shadow: 5px 5px 5px 5px #ebecf0;
`;

const Head = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5rem;
  border-bottom: 1px solid #efefef;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 2.4rem;
  margin: 1.6rem 0px 1.6rem 0;
  color: #3c3c3c;
`;

const SubTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 3.2rem;
  color: #64656a;
`;

const LunchInfoWrap = styled.div`
  display: flex;
  font-size: 1.6rem;
  color: #64656a;
  padding: 0.4rem;
  margin: 3.2rem 0;
  background-color: white;
  border-radius: 2rem;
`;

const LunchInfoLeft = styled.div`
  margin-left: 5rem;
  padding-right: 1rem;
  line-height: 3.2rem;
  width: 100px;
  text-align: end;
  border-radius: 30px 0 0 30px;
  @media only screen and (max-width: 1140px) {
    padding-left: 1rem;
    margin-left: 2rem;
    text-align: center;
    width: 90px;
  }
`;

const LunchInfoRight = styled.div`
  line-height: 3.2rem;
  margin-left: 3rem;
  @media only screen and (max-width: 1260px) {
    margin-left: 2rem;
    font-size: 1.4rem;
  }
`;

const UserInfoWrap = styled.div`
  display: flex;
  background-color: white;
  margin: 2.2rem 0 8rem 0;
  padding: 3.2rem;
  border: solid 1px #efefef;
  border-radius: 2rem;
  @media only screen and (max-width: 1470px) {
    flex-direction: column;
    width: 100%;
    margin: 2.2rem auto;
    align-items: center;
  }
`;

const NbtiBox = styled.div`
  position: relative;
  bottom: 2.7rem;
  left: 5rem;
  background-color: #ff9841;
  display: flex;
  justify-content: center;
  padding: 0.7rem 0;
  border-radius: 1rem;
  height: 2.7rem;
  width: 5rem;
  font-size: 1.3rem;
  p {
    color: white;
  }
  @media only screen and (max-width: 768px) {
    left: 8rem;
  }
`;

const UserInfo = styled.div`
  margin-left: 2.9rem;
`;

const WriterInfo = styled.div`
  display: flex;
`;

const WriterName = styled.p`
  font-weight: bold;
  padding: 0.8rem 0;
  font-size: 1.6rem;
  margin-right: 0.9rem;
  color: #64656a;
`;

const WriterJob = styled.span`
  font-size: 1.6rem;
  padding: 0.8rem 0;
  margin-right: 0.9rem;
  color: #64656a;
  @media only screen and (max-width: 1135px) {
    font-size: 1.4rem;
  }
`;

const Manner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.2rem;
  height: 2.1rem;
  padding: 0.8rem 0;
  background-color: #ff9841;
  border-radius: 11px;
  margin-top: 0.6rem;
  color: white;
`;

const UserAddress = styled.p`
  margin-bottom: 0.75rem;
`;

const UserDescWrap = styled.div`
  font-size: 1.4rem;
  margin: 0.75rem 0 0.3rem 0;
  color: #64656a;
`;

const UserDesc = styled.p`
  line-height: 2.2rem;
  padding: 0.5rem;
`;

const HostMenu = styled.p`
  margin: 1.3rem 0;
  font-size: 1.4rem;
  color: #64656a;
`;

const HostFoodBox = styled.div`
  display: flex;
`;

const LikeFood = styled.div`
  display: flex;
  height: 3rem;
  width: 8rem;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
  border-radius: 16px;
  background-color: #fff3e8;
  font-size: 1.4rem;
`;

const DisLikeFood = styled.div`
  display: flex;
  height: 3rem;
  width: 8rem;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
  border-radius: 16px;
  background-color: #efefef;
  font-size: 1.4rem;
`;

const MapPosition = styled.h2`
  font-size: 18px;
  color: #64656a;
  padding: 0.6rem 0;
  margin-bottom: 0.8rem;
`;

const MapAddress = styled.p`
  color: #64656a;
  font-size: 1.4rem;
  padding: 0.3rem;
`;

const MapWarp = styled.div`
  display: flex;
  flex: 1;
  min-width: 350px;
  justify-content: center;
  margin: 3.3rem 0 8rem 0;
`;

const WishMember = styled.h2`
  font-weight: bold;
  font-size: 1.8rem;
  color: #3c3c3c;
  padding: 0.4rem 0;
  margin-bottom: 1.2rem;
`;

const MemberOption = styled.p`
  line-height: 3.2rem;
  font-size: 1.6rem;
  margin-left: 3.1rem;
  padding: 0.4rem 0;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6rem 0;
`;

const DetailButton = styled.button`
  width: 30.8rem;
  height: 5.6rem;
  font-size: 16px;
  color: white;
  background-color: #ff9841;
  border: none;
  border-radius: 4px;
  margin: 1rem auto;
  transition: 0.8s;
  &:hover {
    border-radius: 20px;
  }
`;

export default LunchDetail;
