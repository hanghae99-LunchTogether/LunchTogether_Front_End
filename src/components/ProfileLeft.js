/* eslint-disable */

import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { useSelector } from "react-redux";
import ProfileImg from "../assets/profile.png";

const ProfileLeft = (props) => {
  const user = useSelector((state) => state.user);

  const {
    dislikemenu,
    image,
    introduction,
    job,
    likemenu,
    locations,
    mannerStatus,
    mbti,
    nickname,
    snsurl,
    userid,
  } = props.user;

  const handleClick = () => {
    if (!user.isLoggedIn) {
      window.alert("로그인이 필요한 서비스입니다😊");
      history.push("/login");
      return;
    } else {
      history.push(`/private/${userid}`);
    }
  };

  return (
    <>
      <Wrapper>
        <ELWrapper margin="0 0 2rem 0">
          <CircleImage size="10" src={image ? image : ProfileImg} />
        </ELWrapper>
        <ELWrapper margin="0 0 1rem 0">
          <Text color="black" weight="700">
            {nickname}
          </Text>
        </ELWrapper>
        <ELWrapper margin="0 0 8px 0">
          <Text size="1.2" weight="500" color="black">
            {job}
          </Text>
        </ELWrapper>
        <ELWrapper margin="0 0 2rem 0">
          <Text size="1.2"> 📍&nbsp;&nbsp;{locations?.address_name}</Text>
        </ELWrapper>
        <ELWrapper margin="0 0 2rem 0">
          <Text size="1.4">
            {introduction &&
              introduction.split("\n").map((l, idx) => {
                return (
                  <span key={idx}>
                    {l} <br />
                  </span>
                );
              })}
          </Text>
        </ELWrapper>

        <ELWrapper flex margin="0 0 1rem 0">
          <Text size="1.2" weight="600">
            MBTI
          </Text>
          <Text size="1.2" weight="600">
            {mbti}
          </Text>
        </ELWrapper>
        <ELWrapper flex margin="0 0 1rem 0">
          <Text size="1.2" weight="600">
            선호메뉴
          </Text>
          <Text size="1.2" weight="600">
            {likemenu}
          </Text>
        </ELWrapper>
        <ELWrapper flex margin="0 0 1rem 0">
          <Text size="1.2" weight="600">
            비선호메뉴
          </Text>
          <Text size="1.2" weight="600">
            {dislikemenu}
          </Text>
        </ELWrapper>
        {user?.user?.userid === userid ? (
          <Button onClick={() => history.push(`/profileupdate/${userid}`)}>
            프로필 업데이트
          </Button>
        ) : (
          <Button onClick={handleClick}>점심 제안하기</Button>
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 330px;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 2rem;
  background-color: white;
  border-radius: 10px;
  margin-right: 3rem;

  @media only screen and (max-width: 768px) {
    margin-right: 0;
    padding: 2rem 2rem;
  }
`;
const ELWrapper = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  background-color: ${(props) => (props.bg ? props.bg : "white")};
  ${(props) =>
    props.flex
      ? `display: flex; align-items: center; justify-content: space-between`
      : ""};
  ${(props) => (props.center ? `text-align: center` : "")};
  ${(props) =>
    props.shadow ? `box-shadow: 5px 5px 5px 2px rgba(55, 50, 40, 0.16)` : ""};
  align-items: center;
`;

const Text = styled.p`
  font-size: ${(props) => (props.size ? props.size : "1.6")}rem;
  font-weight: ${(props) => (props.weight ? props.weight : "400")};
  color: ${(props) => (props.color ? props.color : "#909090")};
  overflow: hidden;
  text-overflow: ellipsis;
  /* white-space: nowrap; */
  letter-spacing: -1.1px;
  line-height: 2.2rem;
`;

const CircleImage = styled.div`
  width: ${(props) => props.size}rem;
  height: ${(props) => props.size}rem;
  border-radius: ${(props) => props.size}rem;

  background-image: url("${(props) => props.src}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
`;

const Button = styled.button`
  width: 100%;
  height: 4rem;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 5px;
  border: none;
  background-color: #ff9841;
  color: white;
  margin: 1rem;
`;

export default ProfileLeft;
