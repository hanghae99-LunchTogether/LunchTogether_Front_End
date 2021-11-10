import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { apis } from "../shared/axios";
import DetailMapContainer from "../components/DetailMapContainer";
import { useSelector } from "react-redux";
import { history } from "../redux/configureStore";

const LunchDetailNew = props => {
  const user = useSelector(state => state.user.user);
  const lunchId = props.match.params.lunchid;
  const [lunch, setLunch] = useState(null);

  const getLunch = async () => {
    const data = await apis.getOneLunch(lunchId);
    const lunch = data.data.data.lunch;
    setLunch(lunch);
  };

  const applyLunch = async () => {
    // if (true) {
    //   window.alert("로그인을 해주세요!");
    //   history.replace("/login");
    // }
    const data = await apis.applyLunch(lunchId);
    console.log(data);
  };

  const updateLunch = async () => {
    history.push(`/lunchregister/${lunchId}`);
  };

  useEffect(() => {
    getLunch();
  }, []);

  return (
    <>
      {lunch && (
        <Wrapper>
          <img src="https://w.namu.la/s/05f1889f36069a0583e25ab2146c506e9175115142bdbe94e3691791eab9c7732cf672677d78710b3cf3cff89be1d6cb332984869290cc70648060d79e203b0b7b7af3c065dff21050b0db7e334a6595cc8ee70c596d0c8831febf54ec84ba73" />
          <ELWrapper center margin="2rem 0 2rem 0">
            <Text
              size="3"
              weight="700"
              color="black"
              style={{ textAlign: "center", lineHeight: "5rem" }}
            >
              {lunch.title}
            </Text>
            <Text style={{ textAlign: "center" }}>{lunch.content}</Text>
          </ELWrapper>

          <hr style={{ margin: "4rem" }} />
          <Text
            color="black"
            size="2"
            weight="800"
            style={{ margin: "0 0 2rem 5rem" }}
          >
            요약정보
          </Text>
          <ELWrapper flex>
            <Text size="1.6" width="10">
              진행일자
            </Text>
            <Text color="black" size="1.6">
              {lunch.date}
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
              {lunch.applicants.length} / {lunch.membernum}
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
          <hr style={{ margin: "4rem" }} />
          <Text
            color="black"
            size="2"
            weight="800"
            style={{ margin: "0 0 2rem 5rem" }}
          >
            호스트 소개
          </Text>
          <ELWrapper flex>
            <CircleImage size="10" style={{ marginRight: "2rem" }} />
            <ELWrapper>
              <Text size="1.6" lineheight="3">
                호스트
              </Text>
              <Text color="black" size="1.6" weight="600">
                {lunch.host.nickname}{" "}
                {lunch.host.job &&
                  `&nbsp; &nbsp; | &nbsp; &nbsp;${lunch.host.job}`}
              </Text>
              <Text color="black" size="1.6">
                {lunch.host.introduction}
              </Text>
            </ELWrapper>
          </ELWrapper>
          <hr style={{ margin: "4rem" }} />
          <Text
            color="black"
            size="2"
            weight="800"
            style={{ margin: "0 0 2rem 5rem" }}
          >
            신청자
          </Text>
          <ELWrapper flex>
            <ELWrapper
              flex
              style={{
                flexDirection: "column",
                alignItems: "center",
                margin: "0 0 1rem 0",
              }}
            >
              <CircleImage size="10" style={{ marginBottom: "1rem" }} />
              <Text color="black" size="1.6" weight="600" lineheight="3">
                닉네임
              </Text>
              <Text color="black" size="1.6">
                직무
              </Text>
            </ELWrapper>
          </ELWrapper>
          <hr style={{ margin: "4rem" }} />
          <Text
            color="black"
            size="2"
            weight="800"
            style={{ margin: "0 0 2rem 5rem" }}
          >
            약속장소 상세정보
          </Text>
          <ELWrapper>
            <Text size="1.6" lineheight="3">
              상호명: &nbsp;{lunch.locations.place_name}
            </Text>
            <Text size="1.6" lineheight="3">
              도로명주소: &nbsp;
              {lunch.locations.road_address_name
                ? lunch.locations.road_address_name
                : lunch.locations.address_name}
            </Text>
            <a
              href={lunch.locations.place_url}
              target="_blank"
              style={{
                cursor: "pointer",
                lineHeight: "2",
                fontSize: "1.6rem",
                color: "#909090",
              }}
            >
              카카오맵 링크: &nbsp;{lunch.locations.place_url}
            </a>

            <DetailMapContainer location={lunch.locations} />
          </ELWrapper>
          <ELWrapper>
            {user?.userid === lunch?.host.userid ? (
              <Button onClick={updateLunch}>수정하기</Button>
            ) : (
              <Button onClick={applyLunch()}>점심약속 신청하기</Button>
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
  padding: 5rem 2rem 5rem 2rem;
  margin: 0rem auto;
  background-color: white;
  margin-bottom: 5rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ELWrapper = styled.div`
  height: 100%;
  ${props => props.center && `justify-content: center`};
  ${props => (props.padding ? `padding: ${props.padding};` : "")};
  ${props => (props.margin ? `margin: ${props.margin};` : "")};
  background-color: ${props => (props.bg ? props.bg : "white")};
  ${props => (props.flex ? `display: flex; align-items: center;` : "")};

  ${props =>
    props.shadow ? `box-shadow: 5px 5px 5px 2px rgba(55, 50, 40, 0.16)` : ""};
  margin: 1rem 0 0.5rem 5rem;
`;

const Text = styled.p`
  font-size: ${props => (props.size ? props.size : "1.6")}rem;
  font-weight: ${props => (props.weight ? props.weight : "400")};
  color: ${props => (props.color ? props.color : "#909090")};
  overflow: hidden;
  text-overflow: ellipsis;
  /* white-space: nowrap; */
  letter-spacing: -1.1px;
  width: ${props => props.width && props.width}rem;
  line-height: ${props => props.lineheight && props.lineheight}rem;
`;

const CircleImage = styled.div`
  width: ${props => props.size}rem;
  height: ${props => props.size}rem;
  border-radius: ${props => props.size}rem;

  background-image: url("${props =>
    props.src
      ? props.src
      : "http://webimage.10x10.co.kr/image/basic600/165/B001654412.jpg"}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
`;

const Button = styled.button`
  width: 95%;
  height: 4rem;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 5px;
  border: none;
  background-color: #ff9841;
  color: white;
  margin-bottom: 2rem;
`;

export default LunchDetailNew;
