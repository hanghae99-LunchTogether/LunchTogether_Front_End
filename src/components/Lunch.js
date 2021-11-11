/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import moment from "moment";
import "moment/locale/ko";

import Calender from "../assets/calender.svg";
import Location from "../assets/location.svg";
import BookmarkImg from "../assets/bookmark.svg";
import ProfileImg from "../assets/profile.png";

const Lunch = (props) => {
  const { title, host, lunchid, date, locations, membernum } = props;
  const strDate = String(date);
  const schedule = moment(strDate).format("YYYY-MM-DD(ddd) A hh:mm");

  console.log("왜안보여", props);

  return (
    <>
      <Wrapper
        onClick={() => {
          history.push(`/lunchpost/${lunchid}`);
        }}
      >
        <Notice>New</Notice>
        <Title>{title}</Title>
        <User>
          <img src={host.image != null ? host.image : ProfileImg} />
          <span className="nickname">{host.nickname}</span>
          <span className="job">{host.job}</span>
        </User>
        <Date>
          <img src={Calender} />
          <span>{schedule}</span>
        </Date>
        <Place>
          <img src={Location} />
          <span>{locations.place_name}</span>
        </Place>
        <Bottom>
          <Member>
            <img src={ProfileImg} />
            <img className="second" src={ProfileImg} />
            <span>2/{membernum} 명</span>
          </Member>
          <Bookmark>
            <img src={BookmarkImg} />
            <span>3</span>
          </Bookmark>
        </Bottom>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 297px;
  height: 367px;
  border-radius: 0.4rem;
  background-color: #ffffff;
  padding: 2.4rem;
  box-shadow: 0.2rem 0.2rem 0.4rem 0 rgba(55, 50, 40, 0.16);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    min-width: 350px;
    margin: 0 auto;
  }
`;

const Notice = styled.div`
  width: 58px;
  height: 30px;
  padding: 5px 13px 5px 14px;
  border-radius: 15px;
  background-color: #ff9841;
  font-size: 1.4rem;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #3c3c3c;
  line-height: 3.2rem;
  font-weight: bold;
  margin: 1.4rem 0 0.8rem 0;

  @media only screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4.2rem;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .nickname {
    margin: 0 0.9rem;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: #3c3c3c;
  }
  .job {
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: #64656a;
  }

  @media only screen and (max-width: 768px) {
    img {
      width: 50px;
      height: 50px;
    }
    .nickname {
      font-size: 2rem;
    }
    .job {
      font-size: 2rem;
    }
  }
`;

const Date = styled.div`
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: #64656a;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;

  img {
    width: 2rem;
    height: 2rem;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1.8rem;
    img {
      width: 3rem;
      height: 3rem;
    }
  }
`;
const Place = styled.div`
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: #64656a;
  margin-bottom: 3.8rem;
  display: flex;
  align-items: center;

  img {
    width: 2rem;
    height: 2rem;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1.8rem;
    img {
      width: 3rem;
      height: 3rem;
    }
  }
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Member = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  .second {
    position: absolute;
    left: 12.3px;
  }

  img {
    width: 28.9px;
    height: 28.8px;
    border-radius: 50%;
    border: solid 1px #ffffff;
    margin-right: 1.8rem;
  }

  span {
    font-size: 1.6rem;
    font-weight: 500;
    color: #64656a;
  }

  @media only screen and (max-width: 768px) {
    .second {
      left: 14.3px;
    }

    img {
      width: 32px;
      height: 32px;
      margin-right: 2.2rem;
    }
    span {
      font-size: 2rem;
    }
  }
`;
const Bookmark = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 18px;
    height: 21px;
  }
  span {
    font-size: 1.4rem;
    color: #64656a;
    opacity: 0.3;
    margin-left: 0.6rem;
  }

  @media only screen and (max-width: 768px) {
    img {
      width: 22px;
      height: 25px;
    }
    span {
      font-size: 2rem;
    }
  }
`;

export default Lunch;
