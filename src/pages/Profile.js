import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { profileActions } from "../redux/modules/profile";
import { Image } from "../elements";
import { apis } from "../shared/axios";
import { history } from "../redux/configureStore";

const Profile = props => {
  const [user, setUser] = useState(null);
  const userId = props.match.params.id;
  console.log(user);

  const getUser = async () => {
    const data = await apis.getProfile(userId);
    setUser(data.data.data[0]);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {user && (
        <Wrapper>
          <ProfileInfoWarpper>
            <ImageCircle src="https://cdn.imweb.me/thumbnail/20210130/a7d09236f9041.jpg" />
            <NickName>Deokhyun Kim</NickName>
            <p style={{ color: "#696969", lineHeight: "2", marginTop: "10px" }}>
              Frontend Developer
            </p>
            <p style={{ color: "#696969", lineHeight: "1", marginTop: "5px" }}>
              📍&nbsp;Gangnam-gu, Seoul
            </p>
            <Intro>
              AGE creative is a team focused on planning integration and visual
              coordination. We work closely with artists, designers and planners
              in various fields, from 2D Motion, 3D Motion, filming, to art
              direction in graphic design, Brand design, album design, and
              creative planning, strategic analysis, and m…
            </Intro>
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
              <div style={{ fontWeight: "600" }}>100</div>
            </LunchIndex>
            <LunchIndex>
              <div>MBTI</div>
              <div style={{ fontWeight: "600" }}>ESTJ</div>
            </LunchIndex>
            <LunchBtn>Get Lunch</LunchBtn>
            <UpdateBtn onClick={() => history.push("/profileupdate")}>
              Update Profile
            </UpdateBtn>
          </ProfileInfoWarpper>
          <ProfileHistoryWrapper> 점심약속 영역</ProfileHistoryWrapper>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  max-width: 1024px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProfileInfoWarpper = styled.div`
  max-width: 374px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 5px #ebecf0;
  height: 70vh;
  padding-top: 50px;

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
  box-shadow: 5px 5px 5px 5px #ebecf0;
`;

export default Profile;
