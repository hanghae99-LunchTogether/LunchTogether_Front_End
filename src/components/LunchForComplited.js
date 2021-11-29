/* eslint-disable */

import React, { useState } from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import moment from "moment";
import "moment/locale/ko";
import ProfileImg from "../assets/profile.png";
import ReviewModal from "./ReviewModal";

const LunchForComplited = (props) => {
  const { title, host, lunchid, date, membernum, applicants, completed } =
    props;
  console.log("완료점약", props);
  function handleClick() {
    if (props.private === true) {
      history.push(`/privatelunch/${lunchid}`);
    } else {
      history.push(`/lunchpost/${lunchid}`);
    }
  }

  const strDate = String(date);
  const schedule = moment(strDate).format("YYYY-MM-DD(ddd)");

  //리뷰
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Wrapper completed={completed}>
        <ELWrapper
          onClick={handleClick}
          margin="0 0 1rem 0"
          flex
          style={{ justifyContent: "space-between" }}
        >
          <Text weight="600" size="1.4">
            {schedule}
          </Text>
          <Text weight="800" size="1.4">
            {applicants?.length + 1}&nbsp;&nbsp;/&nbsp;&nbsp;{membernum}
          </Text>
        </ELWrapper>
        <ELWrapper margin="0 0 3rem 0" onClick={handleClick}>
          <Text weight="700" size="2" color="black">
            {title}
          </Text>
        </ELWrapper>
        <ELWrapper
          onClick={() => history.push(`/profile/${host.userid}`)}
          flex
          margin="0 0 2rem 0"
        >
          <CircleImage size="5" src={host?.image ? host.image : ProfileImg} />
          <ELWrapper>
            <Text weight="600" color="black" size="1.4">
              {host?.nickname}
            </Text>
            <Text size="1.4">{host?.job}</Text>
          </ELWrapper>
        </ELWrapper>
        {applicants.length < 1 ? (
          <Button bg="gray" style={{ cursor: "default" }}>
            약속 종료
          </Button>
        ) : (
          <Button onClick={() => setModalShow(true)}>리뷰 남기기</Button>
        )}

        <ReviewModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          {...props}
        />
      </Wrapper>
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

export default LunchForComplited;
