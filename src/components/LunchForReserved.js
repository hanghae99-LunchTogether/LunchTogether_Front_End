/* eslint-disable */

import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { useSelector } from "react-redux";
import moment from "moment";
import "moment/locale/ko";
import ProfileImg from "../assets/profile.png";

const LunchForReserved = (props) => {
  const user = useSelector((state) => state.user.user);

  const {
    title,
    host,
    lunchid,
    date,
    locations,
    membernum,
    applicants,
    completed,
  } = props;

  const strDate = String(date);
  const schedule = moment(strDate).format("YYYY-MM-DD(ddd)");
  const scheduleTime = moment(strDate).format("A hh시 mm분");
  const adressDong = locations?.address_name.split(" ")[2];

  function handleClick() {
    if (props.private === true) {
      history.push(`/privatelunch/${lunchid}`);
    } else {
      history.push(`/lunchpost/${lunchid}`);
    }
  }

  //약속 승인결과
  const itsme = applicants.filter((item) => item.userid === user.userid);

  return (
    <>
      <Wrapper completed={completed}>
        <ELWrapper
          onClick={handleClick}
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
        <ELWrapper margin="0 0 3rem 0" onClick={handleClick}>
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
          onClick={handleClick}
          margin="0 0 1rem 0"
          flex
          style={{ justifyContent: "space-between" }}
        >
          <ELWrapper>
            <Text size="1.4">📍&nbsp;&nbsp; {locations?.place_name}</Text>
            <Text size="1.4">📆&nbsp;&nbsp; {schedule}</Text>
          </ELWrapper>

          {itsme[0] && itsme[0].confirmed == true ? (
            <Text weight="700" size="2" color="black">
              약속확정
            </Text>
          ) : itsme[0] && itsme[0].confirmed == false ? (
            <Text weight="700" size="2" color="black">
              승인거절됨
            </Text>
          ) : itsme[0] && itsme[0].confirmed == null ? (
            <Text weight="700" size="2" color="black">
              승인대기중
            </Text>
          ) : (
            <Text weight="700" size="2" color="black">
              승인하러가기
            </Text>
          )}
        </ELWrapper>
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
  height: 3rem;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 5px;
  border: none;
  background-color: ${(props) => (props.bg ? props.bg : "#ff9841")};
  color: white;
  z-index: 1000;
  margin-top: 1rem;
`;

export default LunchForReserved;
