/* eslint-disable */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { useSelector } from "react-redux";
import moment from "moment";
import "moment/locale/ko";
import { apis } from "../shared/axios";
import ProfileImg from "../assets/profile.png";
import BookmarkBtn from "./BookmarkBtn";

import { useHistory } from "react-router";

const LunchNew = (props) => {
  const user = useSelector((state) => state.user.user);

  // let participant = props.applicants?.findIndex(
  //   (u) => u.user.userid === user?.userid
  // );

  // let owner = props.host?.userid === user?.userid ? true : false;

  // let lunchend = props.date < new Date();

  const {
    title,
    host,
    lunchid,
    date,
    locations,
    membernum,
    applicants,
    bk_num,
    completed,
    isbook,
    end,
    setLunchListFunction,
  } = props;

  const strDate = String(date);
  const schedule = moment(strDate).format("YYYY-MM-DD(ddd)");
  const scheduleTime = moment(strDate).format("A hh시 mm분");
  const adressDong = locations?.address_name.split(" ")[2];

  //참여여부 및 과거날짜 확인

  const validateReview = () => {
    applicants?.findIndex((u) =>
      u.user.userid === user?.userid ? true : false
    );
  };

  validateReview();

  //리뷰
  const goToReview = () => {
    if (applicants.length < 1) {
      window.alert("참여자가 없어요!");
      return;
    }
    history.push(`/review/${lunchid}`);
  };

  return (
    <>
      {end ? (
        <Wrapper completed={completed}>
          <ELWrapper
            onClick={() => history.push(`/lunchpost/${lunchid}`)}
            margin="0 0 1rem 0"
            flex
            style={{ justifyContent: "space-between" }}
          >
            <Text weight="600" size="1.4" color="#FFC428">
              {adressDong}&nbsp;&nbsp;|&nbsp;&nbsp; {scheduleTime}
            </Text>
            <Text weight="800" size="1.4">
              {applicants?.length + 1}&nbsp;&nbsp;/&nbsp;&nbsp;{membernum}
            </Text>
          </ELWrapper>
          <ELWrapper
            margin="0 0 3rem 0"
            onClick={() => history.push(`/lunchpost/${lunchid}`)}
          >
            <Text weight="700" size="2" color="black">
              {title}
            </Text>
          </ELWrapper>
          <ELWrapper
            flex
            margin="0 0 2rem 0"
            onClick={() => history.push(`/profile/${host.userid}`)}
          >
            <CircleImage size="5" src={host?.image ? host.image : ProfileImg} />
            <ELWrapper>
              <Text weight="600" color="black" size="1.4">
                {host?.nickname}
              </Text>
              <Text size="1.4">{host?.job}</Text>
            </ELWrapper>
          </ELWrapper>
          <Button onClick={goToReview}>리뷰 남기기</Button>
        </Wrapper>
      ) : (
        <Wrapper completed={completed}>
          <ELWrapper
            onClick={() => history.push(`/lunchpost/${lunchid}`)}
            margin="0 0 1rem 0"
            flex
            style={{ justifyContent: "space-between" }}
          >
            <Text weight="600" size="1.4" color="#FFC428">
              {adressDong}&nbsp;&nbsp;|&nbsp;&nbsp; {scheduleTime}
            </Text>
            <Text weight="800" size="1.4">
              {applicants?.length + 1}&nbsp;&nbsp;/&nbsp;&nbsp;{membernum}
            </Text>
          </ELWrapper>
          <ELWrapper
            margin="0 0 3rem 0"
            onClick={() => history.push(`/lunchpost/${lunchid}`)}
          >
            <Text weight="700" size="2" color="black">
              {title}
            </Text>
          </ELWrapper>
          <ELWrapper
            flex
            margin="0 0 2rem 0"
            onClick={() => history.push(`/profile/${host.userid}`)}
          >
            <CircleImage size="5" src={host?.image ? host.image : ProfileImg} />
            <ELWrapper>
              <Text weight="600" color="black" size="1.4">
                {host?.nickname}
              </Text>
              <Text size="1.4">{host?.job}</Text>
            </ELWrapper>
          </ELWrapper>
          <hr />
          <ELWrapper
            margin="0 0 1rem 0"
            flex
            style={{ justifyContent: "space-between" }}
          >
            <ELWrapper onClick={() => history.push(`/lunchpost/${lunchid}`)}>
              <Text size="1.4">📍&nbsp;&nbsp; {locations?.place_name}</Text>
              <Text size="1.4">📆&nbsp;&nbsp; {schedule}</Text>
            </ELWrapper>
            <BookmarkBtn bk_num={bk_num} isbook={isbook} lunchid={lunchid} />
          </ELWrapper>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  width: 280px;
  height: 270px;
  padding: 2rem;
  background-color: white;
  box-shadow: 5px 5px 5px 2px rgba(55, 50, 40, 0.16);
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    width: 330px;
    height: 230px;
  }
`;

const ELWrapper = styled.div`
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  background-color: ${(props) => (props.bg ? props.bg : "white")};
  ${(props) => (props.flex ? `display: flex; align-items: center; ` : "")};
  ${(props) => (props.center ? `text-align: center` : "")};
  ${(props) =>
    props.shadow ? `box-shadow: 5px 5px 5px 2px rgba(55, 50, 40, 0.16)` : ""};
  align-items: center;
  cursor: pointer;
`;

const Text = styled.p`
  font-size: ${(props) => (props.size ? props.size : "1.6")}rem;
  font-weight: ${(props) => (props.weight ? props.weight : "400")};
  color: ${(props) => (props.color ? props.color : "#909090")};
  overflow: hidden;
  /* text-overflow: ellipsis; */
  white-space: nowrap;
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
  margin-right: 1rem;
`;

const Button = styled.button`
  width: 100%;
  height: 5rem;
  font-weight: bold;
  font-size: 1.6rem;
  border-radius: 5px;
  border: none;
  background-color: ${(props) => (props.bg ? props.bg : "#ff9841")};
  color: white;
  z-index: 1000;
  margin-top: 1rem;
`;

export default LunchNew;
