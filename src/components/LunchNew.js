import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Grid } from "../elements";
import { history } from "../redux/configureStore";
import moment from "moment";
import "moment/locale/ko";

import { apis } from "../shared/axios";

import ProfileImg from "../assets/profile.png";
import BookmarkImg from "../assets/bookmark.svg";

const LunchNew = (props) => {
  const { title, host, lunchid, date, locations, membernum, applicants } =
    props;
  const strDate = String(date);
  const schedule = moment(strDate).format("YYYY-MM-DD(ddd)");
  const scheduleTime = moment(strDate).format("A hh시 mm분");
  const adressDong = locations.address_name.split(" ")[2];
  console.log("프롭스", props);
  //북마크
  const [bookmark, setBookmark] = useState(0);

  const getBookmarkData = async () => {
    try {
      const data = await apis.getBookmark(lunchid);
      console.log("데이터", data);
      // const lunch = data.data.lunch;
      // setBookmark(lunch);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    if (lunchid) {
      getBookmarkData();
    }
  }, []);

  const addBookmarkData = async () => {
    try {
      const data = await apis.addBookmark(bookmark);
      console.log("ssssss", data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <Wrapper
      // onClick={() => {
      //   history.push(`/lunchpost/${lunchid}`);
      // }}
      >
        <ELWrapper
          margin="0 0 1rem 0"
          flex
          style={{ justifyContent: "space-between" }}
        >
          <Text weight="600" size="1.4" color="#FFC428">
            {adressDong}&nbsp;&nbsp;|&nbsp;&nbsp; {scheduleTime}
          </Text>
          <Text weight="800" size="1.4">
            {applicants?.length}&nbsp;&nbsp;/&nbsp;&nbsp;{membernum}
          </Text>
        </ELWrapper>
        <ELWrapper margin="0 0 2rem 0" style={{ overflowY: "hidden" }}>
          <Text weight="700" size="2" color="black">
            {title}
          </Text>
        </ELWrapper>
        <ELWrapper flex margin="0 0 2rem 0">
          <CircleImage
            size="5"
            src={host.image != null ? host.image : { ProfileImg }}
          />
          <ELWrapper>
            <Text weight="600" color="black" size="1.4">
              {host?.nickname}
            </Text>
            <Text size="1.4">{host?.job}</Text>
          </ELWrapper>
        </ELWrapper>
        <ELWrapper margin="0 0 2rem 0">
          <hr />
        </ELWrapper>
        <ELWrapper flex style={{ justifyContent: "space-between" }}>
          <ELWrapper>
            <Text size="1.4">📍&nbsp;&nbsp; {locations?.place_name}</Text>
            <Text size="1.4">📆&nbsp;&nbsp; {schedule}</Text>
          </ELWrapper>

          <Bookmark onClick={addBookmarkData}>
            {/* <Bookmark onClick={(e) => e.stopPropagation({ addBookmark })}> */}
            <img src={BookmarkImg} />
            <span>3</span>
          </Bookmark>
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

  background-image: url("${(props) =>
    props.src
      ? props.src
      : "http://webimage.10x10.co.kr/image/basic600/165/B001654412.jpg"}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  margin-right: 1rem;
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
`;

export default LunchNew;
