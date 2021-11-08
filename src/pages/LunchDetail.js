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
import { RiMapPin2Fill } from "react-icons/ri";
import { GiKnifeFork } from "react-icons/gi";
import { Avatar } from "@mui/material";

const LunchDetail = (props) => {
  const { history } = props;
  const dispatch = useDispatch();

  const user_info = useSelector((state) => state.user.user);
  console.log(user_info);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const lunchId = props.match.params.lunchid;

  const [lunch, setLunch] = useState("null");
  console.log(lunch);
  const getLunch = async () => {
    const data = await apis.getOneLunch(lunchId);
    const lunchData = data.data.data.lunch;
    setLunch(lunchData);
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
            <New>
              <p>NEW</p>
            </New>
            <Title>{lunch.title}</Title>
            <SubTitle>{lunch.content}</SubTitle>
          </Head>
          <LunchInfoWrap>
            <LunchInfoLeft>
              <p>신청현황</p>
              <p>약속장소</p>
              <p>날짜시간</p>
              <p>진행시간</p>
            </LunchInfoLeft>
            <LunchInfoRight>
              <p>{lunch.membernum}/4</p>
              <p>영안식당</p>
              <p>{lunch.time}</p>
              <p>{lunch.duration}</p>
            </LunchInfoRight>
          </LunchInfoWrap>
          <UserInfoWrap>
            <Image
              className="user_image"
              shape="circle"
              size="100"
              src={"https://t1.daumcdn.net/cfile/blog/134665344D7625B635"}
              /*src={user_info.image}*/
            />
            <UserInfo>
              <WriterInfo>
                <WriterName>화정</WriterName>
                <WriterJob>디자이너</WriterJob>
                <Manner>
                  <GiKnifeFork />
                  4.85점
                </Manner>
              </WriterInfo>
              <UserAddress>
                <RiMapPin2Fill
                  style={{ marginRight: "0.4rem", color: "red" }}
                />
                서울 강남구 개포1동
              </UserAddress>
              <UserDescWrap>
                <UserDesc>👩🏻‍💻고민많은 주니어 프로덕트 디자이너</UserDesc>
                <UserDesc>🧑🏻‍🍳먹는 걸 좋아해서 자주 만들어 먹어요</UserDesc>
                <UserDesc>
                  💸티빙과 넷플릭스 시리즈를 광적으로 좋아해요
                </UserDesc>
              </UserDescWrap>
              <HostMenu>호스트의 메뉴 취향</HostMenu>
              <HostFoodBox>
                <HostFood>한식</HostFood>
                <HostFood>양식</HostFood>
                <HostFood>콩</HostFood>
              </HostFoodBox>
            </UserInfo>
          </UserInfoWrap>
          <MapPosition>하이디라오 강남점</MapPosition>
          <MapAddress>서울특별시 서초구 서초1동</MapAddress>
          <MapWarp>
            <MapContainer />
          </MapWarp>
          <WishMember>이런 분들과 함께 점심을 먹고 싶어요</WishMember>
          <MemberOption>
            🐱고양이를 키우시는 분과 같이 먹고싶어요 (나만 고양이 없어… 고양이
            사진 보고싶어요…)
          </MemberOption>
          <MemberOption>
            👻마이네임 재밌게 보신 분! 먹으면서 이야기해요
          </MemberOption>
          <MemberOption>
            👀디자인 회사 이직 고민중인데 저와 같은 상황이신 분 있으실까요?
          </MemberOption>
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
          {user_info.userid === lunch.userid && (
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
  margin: 1.56rem auto;
  box-shadow: 5px 5px 5px 5px #ebecf0;
`;

const Head = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid #efefef;
`;

const New = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1.4rem;
  background-color: #ff9841;
  border-radius: 15px;
  margin-top: 12.9rem;
  margin-bottom: 1.6rem;
  p {
    font-size: 1.4rem;
    color: white;
    padding: 0.3rem 0px;
  }
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 2.4rem;
  margin: 1.6rem 0px 0.8rem 0;
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
`;

const LunchInfoLeft = styled.div`
  margin-left: 5rem;
  padding-right: 1rem;
  line-height: 3.2rem;
  width: 100px;
  text-align: end;
  background-color: #fff8f2;
  border-radius: 30px 0 0 30px;
  @media only screen and (max-width: 1100px) {
    padding-left: 1rem;
    margin-left: 2rem;
    text-align: center;
    width: 90px;
  }
`;

const LunchInfoRight = styled.div`
  line-height: 3.2rem;
  margin-left: 3rem;
`;

const UserInfoWrap = styled.div`
  display: flex;
  margin: 2.2rem 0 8rem 0;
  padding: 3.2rem;
  border: solid 1px #efefef;
  @media only screen and (max-width: 1470px) {
    flex-direction: column;
    width: 100%;
    margin: 2.2rem auto;
    align-items: center;
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

const HostFood = styled.div`
  display: flex;
  height: 3rem;
  width: 8rem;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
  border-radius: 16px;
  background-color: #e7dbd0;
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
  font-size: 1.6rem;
  margin-left: 3.1rem;
  padding: 0.4rem 0;
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
