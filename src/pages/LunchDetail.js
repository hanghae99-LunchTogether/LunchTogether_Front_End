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

const LunchDetail = props => {
  const { history } = props;
  const dispatch = useDispatch();

  const user_info = useSelector(state => state.user.user);
  console.log(user_info);
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

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
        <Head>
          <New>
            <p>NEW</p>
          </New>
          <Title>{lunch.title}</Title>
          <SubTitle>{lunch.content}</SubTitle>
        </Head>
        <LunchInfoWrap>
          <LunchInfoBoth>
            <LunchInfoTitle>
              <p>날짜시간</p>
              <p>신청현황</p>
            </LunchInfoTitle>
            <LunchInfo>
              <p>{lunch.time}</p>
              <p>{lunch.membernum}/4 명</p>
            </LunchInfo>
          </LunchInfoBoth>
          <LunchInfoBoth>
            <LunchInfoTitle>
              <div>약속장소</div>
              <div>진행시간</div>
            </LunchInfoTitle>
            <LunchInfo>
              <p>위치가 왜 새로고침하면 오류나지?</p>
              <p>{lunch.duration}</p>
            </LunchInfo>
          </LunchInfoBoth>
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
              <RiMapPin2Fill style={{ marginRight: "0.4rem", color: "red" }} />
              서울 강남구 개포1동
            </UserAddress>
            <UserDescWrap>
              <UserDesc>👩🏻‍💻고민많은 주니어 프로덕트 디자이너</UserDesc>
              <UserDesc>🧑🏻‍🍳먹는 걸 좋아해서 자주 만들어 먹어요</UserDesc>
              <UserDesc>💸티빙과 넷플릭스 시리즈를 광적으로 좋아해요</UserDesc>
            </UserDescWrap>
            <HostMenu>호스트의 메뉴 취향</HostMenu>
          </UserInfo>
        </UserInfoWrap>
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
  }
`;

const LunchInfoBoth = styled.div`
  display: flex;
  width: 50%;
  padding: 1.2rem;
`;

const LunchInfoTitle = styled.div`
  margin-right: 0.8rem;
  color: #64656a;
  width: 8.3rem;
  @media only screen and (max-width: 1780px) {
    width: 9rem;
    .user_image {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const LunchInfo = styled.div`
  margin-left: 0.8rem;
`;

const UserInfoWrap = styled.div`
  display: flex;
  margin: 2.2rem 0;
  padding: 3.2rem;
  border: solid 1px #efefef;
  @media only screen and (max-width: 1470px) {
    flex-direction: column;
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
`;

const WriterJob = styled.span`
  font-size: 1.6rem;
  padding: 0.8rem 0;
  margin-right: 0.9rem;
  color: #64656a;
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
