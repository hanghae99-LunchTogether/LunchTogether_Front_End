/* eslint-disable */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { apis } from "../shared/axios";
import DetailMapContainer from "../components/DetailMapContainer";
import { useSelector } from "react-redux";
import { history } from "../redux/configureStore";
import moment from "moment";
import ProfileImg from "../assets/profile.png";
import "moment/locale/ko";
import DetailMember from "../components/DetailMember";
import { stubFalse } from "lodash";

const LunchDetailForPrivate = (props) => {
  const user = useSelector((state) => state.user);

  const lunchId = props.match.params.lunchid;
  const [lunch, setLunch] = useState(null);

  const getLunch = async () => {
    try {
      const data = await apis.getOneLunch(lunchId);
      const lunch = data.data;
      setLunch(lunch);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getLunch();
  }, []);

  const confirm = lunch?.useroffers[0].confirmed;

  const applyLunch = async () => {
    if (!user.isLoggedIn) {
      window.alert("로그인을 해주세요!");
      history.replace("/login");
    }
    try {
      const apply = { confirmed: true };
      const data = await apis.offerApplyLunch(lunchId, apply);
      history.push(`/profile/${user?.user?.userid}`);
    } catch (error) {
      console.log(error.response);
    }
  };

  const cancelLunch = async () => {
    if (!user.isLoggedIn) {
      window.alert("로그인을 해주세요!");
      history.replace("/login");
    }
    try {
      const apply = { confirmed: false };
      const data = await apis.offerApplyLunch(lunchId, apply);
      history.push(`/profile/${user?.user?.userid}`);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      {lunch && (
        <Wrapper>
          <ELWrapper center margin="2rem 0 2rem 0">
            <Text
              size="4"
              weight="700"
              color="black"
              style={{
                textAlign: "center",
                lineHeight: "5rem",
                marginBottom: "2rem",
              }}
            >
              {lunch.title}
            </Text>
            <Text size="2" style={{ textAlign: "center" }}>
              {lunch.content}
            </Text>
          </ELWrapper>

          <hr style={{ margin: "4rem 0" }} />
          <Text
            color="black"
            size="2"
            weight="800"
            lineheight="3"
            style={{ margin: "0 0 2rem 0" }}
          >
            요약정보
          </Text>
          <ELWrapper flex>
            <Text size="1.6" width="10">
              진행일자
            </Text>
            <Text color="black" size="1.6">
              {moment(lunch.date).format("YYYY-MM-DD(ddd)")}
              {moment(lunch.date).format("A hh시 mm분")}
            </Text>
          </ELWrapper>
          <ELWrapper flex>
            <Text size="1.6" width="10">
              점심장소
            </Text>
            <Text color="black" size="1.6">
              {lunch.locations.place_name}
            </Text>
          </ELWrapper>
          <ELWrapper flex>
            <Text size="1.6" width="10">
              신청인원
            </Text>
            <Text color="black" size="1.6">
              {lunch.applicants.length + 1} / {lunch.membernum}
            </Text>
          </ELWrapper>
          <ELWrapper flex margin="1rem 0 1rem 5rem">
            <Text size="1.6" width="10">
              진행시간
            </Text>
            <Text color="black" size="1.6">
              {lunch.duration ? lunch.duration : "30분"}
            </Text>
          </ELWrapper>
          <hr style={{ margin: "4rem 0" }} />
          <Text
            color="black"
            size="2"
            weight="800"
            lineheight="3"
            style={{ margin: "0 0 2rem 0" }}
          >
            호스트 소개
          </Text>
          <ELWrapper flex>
            <CircleImage
              size="10"
              src={lunch.host.image ? lunch.host.image : ProfileImg}
              onClick={() => history.push(`/profile/${lunch.host.userid}`)}
            />
            <ELWrapper style={{ marginLeft: "2rem" }}>
              <Text size="1.6">호스트</Text>
              <Text
                color="black"
                size="1.6"
                weight="600"
                style={{ marginBottom: "1rem" }}
              >
                {lunch.host.nickname} {lunch.host.job && ` | ${lunch.host.job}`}
              </Text>
              <Text color="black" size="1.6">
                {lunch.host.introduction &&
                  lunch.host.introduction.split("\n").map((l, idx) => {
                    return (
                      <span key={idx}>
                        {l} <br />
                      </span>
                    );
                  })}
              </Text>
            </ELWrapper>
          </ELWrapper>
          <hr style={{ margin: "4rem 0" }} />
          <Text color="black" size="2" weight="800" lineheight="3">
            신청자
          </Text>
          <ELWrapper flex>
            {lunch.applicants.map((u, idx) => (
              <DetailMember applicant={u} key={idx} lunch={lunch} />
            ))}
          </ELWrapper>
          <hr style={{ margin: "4rem 0" }} />
          <Text color="black" size="2" weight="800" lineheight="3">
            약속장소 상세정보
          </Text>
          <ELWrapper>
            <Text size="1.6" lineheight="3">
              상호명: &nbsp;{lunch.locations.place_name}
            </Text>
            <Text size="1.6" lineheight="3" style={{ marginBottom: "2rem" }}>
              도로명주소: &nbsp;
              {lunch.locations.road_address_name
                ? lunch.locations.road_address_name
                : lunch.locations.address_name}
            </Text>

            <DetailMapContainer
              style={{ marginTop: "2rem" }}
              location={lunch.locations}
            />
          </ELWrapper>
          <ELWrapper>
            {user?.user?.userid === lunch?.host.userid ? (
              <Button onClick={() => history.push(`/lunchregister/${lunchId}`)}>
                수정하기
              </Button>
            ) : confirm === null ? (
              <>
                <Button onClick={applyLunch}>점심약속 수락하기</Button>
                <Button bg="gray" onClick={cancelLunch}>
                  점심약속 거절하기
                </Button>
              </>
            ) : confirm === true ? (
              <Button bg="gray" onClick={cancelLunch}>
                점심약속 취소하기
              </Button>
            ) : (
              <Button onClick={applyLunch}>점심약속 수락하기</Button>
            )}
          </ELWrapper>
          <ELWrapper></ELWrapper>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  max-width: 1200px;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 10rem 3rem;
  margin: 0 auto;
  background-color: white;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ELWrapper = styled.div`
  height: 100%;
  ${(props) => props.center && `justify-content: center`};
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  background-color: ${(props) => (props.bg ? props.bg : "white")};
  ${(props) => (props.flex ? `display: flex; align-items: center;` : "")};

  ${(props) =>
    props.shadow ? `box-shadow: 5px 5px 5px 2px rgba(55, 50, 40, 0.16)` : ""};
  margin: 1rem 0 0.5rem 0;
`;

const Text = styled.p`
  width: 100%;
  font-size: ${(props) => (props.size ? props.size : "1.6")}rem;
  font-weight: ${(props) => (props.weight ? props.weight : "400")};
  color: ${(props) => (props.color ? props.color : "#909090")};
  overflow: hidden;
  text-overflow: ellipsis;
  /* white-space: nowrap; */
  letter-spacing: -1.1px;
  width: ${(props) => props.width && props.width}rem;
  line-height: ${(props) => props.lineheight && props.lineheight}rem;
`;

const CircleImage = styled.div`
  width: ${(props) => props.size}rem;
  height: ${(props) => props.size}rem;
  border-radius: ${(props) => props.size}rem;

  background-image: url("${(props) => props.src}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100%;
  height: 5rem;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 5px;
  border: none;
  background-color: ${(props) => (props.bg ? props.bg : "#ff9841")};
  color: white;
  margin-bottom: 2rem;
`;

const ApproveBtn = styled.button`
  width: 80%;
  height: 4rem;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 5px;
  border: none;
  background-color: ${(props) => (props.bg ? props.bg : "#ff9841")};
  color: white;
  margin-top: 1rem;
`;

export default LunchDetailForPrivate;
