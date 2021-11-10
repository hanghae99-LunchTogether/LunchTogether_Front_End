/* eslint-disable */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Image } from "../elements";
import { MdOutlineLocationOn } from "react-icons/md";
import { apis } from "../shared/axios";
import { history } from "../redux/configureStore";
import ProfileHistorySection from "../components/ProfileHistorySection";

const Profile = props => {
  const [user, setUser] = useState(null);

  const userId = props.match.params.id;

  const getProfile = async () => {
    const data = await apis.getProfile(userId);
    console.log(data);
    setUser(data.data.data.user);
  };

  useEffect(() => {
    getProfile();
  }, [userId]);

  return (
    <>
      {user && (
        <Wrapper>
          <Header />
          <PorfileSectionWrapper>
            <ProfileInfoWarpper>
              <ImageWrapper>
                <Image shape="circle" size="100" src={user.image} />
                <ElementWrapper
                  style={{
                    height: "3rem",
                    marginLeft: "-3rem",
                    marginTop: "70px",
                    lineHeight: "2.5rem",
                    position: "relative",
                  }}
                >
                  <Text bold size="1.2">
                    {user.mbti}
                  </Text>
                </ElementWrapper>
              </ImageWrapper>
              <Text style={{ margin: "3rem 0" }} bold size="1.8" color="black">
                {user.nickname}
              </Text>
              <Text size="1.4">{user.job}</Text>
              <Text size="1.4">
                <MdOutlineLocationOn />
                {user.locations &&
                  user.locations.address_name.split(" ").slice(0, 3)}
              </Text>
              <a
                href="instagram.com/hwajeong"
                target="_blank"
                style={{ textDecoration: "underline", fontSize: "1.2rem" }}
              >
                {user.snsurl}
              </a>
              <Text
                size="1.4"
                style={{
                  margin: "3rem 0",
                  lineHeight: "1.5",
                  textAlign: "left",
                }}
              >
                {user.introduction &&
                  user.introduction.split("\n").map(l => {
                    return (
                      <span>
                        {l} <br />
                      </span>
                    );
                  })}
              </Text>
              <InfoWrapper>
                <Text
                  style={{ textAlign: "left", margin: "0" }}
                  bold
                  size="1.2"
                >
                  선호메뉴
                </Text>

                <Text
                  bold
                  size="1.2"
                  style={{
                    backgroundColor: "#ff9841",
                    width: "40px",
                    lineHeight: "2.5rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "10px",
                    color: "white",
                    marginRight: "0",
                  }}
                >
                  {user.likemenu}
                </Text>
              </InfoWrapper>
              <InfoWrapper style={{ justifyContent: "space-between" }}>
                <Text
                  style={{ textAlign: "left", margin: "0" }}
                  size="1.2"
                  bold
                >
                  비선호메뉴
                </Text>
                <Text
                  bold
                  size="1.2"
                  style={{
                    backgroundColor: "#ff9841",
                    width: "40px",
                    lineHeight: "2.5rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "10px",
                    color: "white",
                    marginRight: "0",
                  }}
                >
                  {user.dislikemenu}
                </Text>
              </InfoWrapper>
              <Button>점심 제안하기</Button>
              <Button onClick={() => history.push(`/profileupdate/${userId}`)}>
                프로필 업데이트
              </Button>
            </ProfileInfoWarpper>
            <ProfileHistorySection
              lunchs={user.lunchs}
              reviews={user.userreview}
            ></ProfileHistorySection>
          </PorfileSectionWrapper>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const Header = styled.div`
  width: 100%;
  background-color: #fff0e4;
  height: 10rem;
`;
const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const PorfileSectionWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProfileInfoWarpper = styled.div`
  max-width: 380px;
  width: 100%;
  max-height: 700px;
  display: flex;
  padding: 2rem;
  padding-top: 5rem;
  flex-direction: column;
  align-items: center;
  border: solid 1px #efefef;
  background: white;
  z-index: 1000;
  margin-top: -4rem;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 500px;
    margin-right: 0;
  }
`;

const Text = styled.p`
  text-align: center;
  font-size: ${props => props.size}rem;
  line-height: ${props => props.size}rem;
  ${props => (props.color ? `font-color: ${props.color}` : "font-color: gray")};
  ${props => props.bold && `font-weight: bold`};
  margin: 1rem;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 330px;
`;

const ElementWrapper = styled.div`
  background-color: #ff9841;
  border-radius: 5px;
  color: white;
  display: flex;
  justify-content: center;
  min-width: 5rem;
`;

const Button = styled.button`
  min-width: 330px;
  max-width: 500px;
  width: 50%;
  height: 4rem;
  font-weight: bold;
  font-size: 1.4rem;
  border-radius: 6px;
  border: none;
  background-color: #ff9841;
  color: white;
  margin: 1rem;

  &:hover {
    background-color: #ff9841;
    color: white;
  }
`;

export default Profile;
