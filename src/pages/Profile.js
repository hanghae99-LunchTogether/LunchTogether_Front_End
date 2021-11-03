/* eslint-disable */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { profileActions } from "../redux/modules/profile";
import { Image } from "../elements";
import { apis } from "../shared/axios";
import { history } from "../redux/configureStore";

const Profile = props => {
  const user = useSelector(state => state.profile.user);
  console.log(user);
  const dispatch = useDispatch();
  const userId = props.match.params.id;

  useEffect(() => {
    dispatch(profileActions.getProfileAPI(userId));
  }, []);

  return (
    <>
      {user && (
        <Wrapper>
          <ProfileInfoWarpper>
            <ImageCircle src={user.image} />
            <NickName>{user.nickname}</NickName>
            <p style={{ color: "#696969", lineHeight: "2", marginTop: "10px" }}>
              Frontend Developer
            </p>
            <p style={{ color: "#696969", lineHeight: "1", marginTop: "5px" }}>
              📍&nbsp;Gangnam-gu, Seoul
            </p>
            <Intro>{user.introduction}</Intro>
            <LunchIndex>
              <div>점심지수</div>
              <div style={{ fontWeight: "600" }}>100</div>
            </LunchIndex>
            <LunchIndex>
              <div>매너지수</div>
              <div style={{ fontWeight: "600" }}>4.5</div>
            </LunchIndex>
            <LunchIndex>
              <div>메뉴</div>
              <div style={{ fontWeight: "600" }}>{user.menu}</div>
            </LunchIndex>
            <LunchIndex>
              <div>MBTI</div>
              <div style={{ fontWeight: "600" }}>{user.mbti}</div>
            </LunchIndex>
            <LunchBtn>Get Lunch</LunchBtn>
            <UpdateBtn onClick={() => history.push(`/profileupdate/${userId}`)}>
              Update Profile
            </UpdateBtn>
          </ProfileInfoWarpper>
          <ProfileHistoryWrapper>
            <TabBtn>점심약속</TabBtn>
            <TabBtn>후기</TabBtn>
          </ProfileHistoryWrapper>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  max-width: 1024px;
  justify-content: center;
  margin: 0 auto;
  margin-top: 50px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProfileInfoWarpper = styled.div`
  max-width: 374px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 5px #ebecf0;
  height: 50vh;
  padding-top: 50px;
  margin-right: 2rem;

  @media only screen and (max-width: 768px) {
    min-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin-bottom: 10px;
    box-shadow: 5px 5px 5px 5px #ebecf0;
    height: 400px;
    padding-top: 10px;
    margin-right: 0;
    margin-bottm: 1rem;
  }
`;

const ImageCircle = styled.image`
  width: 100px;
  height: 100px;
  border-radius: 100px;

  background-image: url("${props => props.src}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top; ;
`;

const NickName = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-top: 1rem;
`;

const Intro = styled.p`
  color: #696969;
  line-height: 1.5;
  margin: 20px 0px;
  min-width: 350px;
  padding: 20px;
  height: 120px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media only screen and (max-width: 768px) {
    height: 50px;
    overflow: hidden;
    margin: 0px;
    text-overflow: ellipsis;
  }
`;

const LunchBtn = styled.button`
  cursor: pointer;
  border-radius: 20px;
  border: none;
  padding: 10px 0px;
  font-size: 14px;
  text-align: center;
  margin-top: 20px;
  max-width: 650px;
  color: white;
  font-weight: bold;
  background: blue;
  cursor: pointer;
  width: 90%;
`;

const UpdateBtn = styled.button`
  cursor: pointer;
  border-radius: 20px;
  border: none;
  padding: 10px 0px;
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
  max-width: 650px;
  color: white;
  font-weight: bold;
  background: blue;
  cursor: pointer;
  width: 90%;
`;

const LunchIndex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 20px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ProfileHistoryWrapper = styled.div`
  width: 70%;
  height: 500px;
  min-width: 400px;
  height: 70vh;
  border-radius: 10px;
`;

const TabBtn = styled.button`
  background: none;
  font-size: 1rem;
  font-weight: 600;
  border: none;
`;

export default Profile;
