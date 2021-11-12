/* eslint-disable */

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css"; // css import
import { useDispatch, useSelector } from "react-redux";
import HashtagList from "../components/HashtagList";
import { apis } from "../shared/axios";
import Calendar from "../components/Calendar";
import DetailMapContainer from "../components/DetailMapContainer";
import MapContainer from "../components/MapContainer";
import { history } from "../redux/configureStore";

const LunchCreateUpdate = props => {
  const targetUser = props.match.params.userid ? props.match.params.userid : "";
  const [placeInput, setPlaceInput] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const [lunch, setLunch] = useState({
    title: "",
    content: "",
    locations: "",
    membernum: "2",
    date: "",
  });

  const setLocation = place => {
    setLunch({
      ...lunch,
      locations: place,
    });
  };

  const setDate = date => {
    setLunch({
      ...lunch,
      date: date,
    });
  };

  const lunchId = props.match.params.lunchid;
  const is_edit = lunchId ? true : false;

  const getLunchData = async () => {
    try {
      const data = await apis.getOneLunch(lunchId);
      const _lunch = data.data.data.lunch;
      console.log(_lunch);
      setLunch(_lunch);
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      const data = await apis.getProfile(targetUser);
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const onChange = e => {
    const {
      target: { name, value },
    } = e;
    setLunch({
      ...lunch,
      [name]: value,
    });
  };

  useEffect(() => {
    if (lunchId) {
      getLunchData();
    } else if (targetUser) {
      getUser();
    }
  }, []);

  const onSearchKeywordChange = e => {
    setPlaceInput(e.target.value);
  };

  const searchPlace = () => {
    setSearchKeyword(placeInput);
  };

  const addLunch = async () => {
    console.log(targetUser);
    console.log(lunch);
    try {
      if (targetUser) {
        const data = await apis.createPrivatelunch(targetUser, lunch);
        const newLunchId = data.data.data.lunch.lunchid;
        history.push(`/lunchpost/${newLunchId}`);
      } else {
        const data = await apis.createLunch(lunch);
        console.log(data);
        const newLunchId = data.data.data.lunch.lunchid;
        history.push(`/lunchpost/${newLunchId}`);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const updateLunch = async () => {
    for (const option in lunch) {
      if (lunch[option] === null && option !== "duration") {
        window.alert(`${option}값을 확인해주세요`);
        return;
      }
    }
    console.log(lunch);
    try {
      const data = await apis.updateLunch(lunchId, lunch);
      console.log(data);
      history.push(`/lunchpost/${lunchId}`);
    } catch (error) {
      console.log(error.response);
    }
  };

  const deleteLunch = async () => {
    try {
      const data = await apis.deleteLunch(lunchId);
      console.log(data);
      history.push("/");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      {lunch && (
        <Wrapper>
          <MenuTitleWrapper>
            <MenuTitle>점심약속 등록하기</MenuTitle>
            <Text style={{ textAlign: "center", margin: "1rem" }}>
              맛있게 먹어봐
            </Text>
          </MenuTitleWrapper>
          <InputWrapper>
            <Text>타이틀</Text>
            <Input
              name="title"
              onChange={onChange}
              value={lunch.title ? lunch.title : ""}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Text>소개</Text>
            <InputTextArea
              name="content"
              onChange={onChange}
              value={lunch.content ? lunch.content : ""}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Text>날짜/시간</Text>
            <Calendar setDate={setDate} date={lunch?.date && lunch.date} />
          </InputWrapper>
          <InputWrapper>
            <Text>장소</Text>
            <Input
              onChange={onSearchKeywordChange}
              style={{ marginRight: "1.6rem", minWidth: "200px" }}
              required
            />
            <SearchButton onClick={searchPlace}>검색</SearchButton>
          </InputWrapper>

          <>
            {lunch.locations && (
              <InputWrapper>
                <FakeDiv />
                <SelectedPlace>
                  <Text style={{ color: "#909090", lineHeight: "3rem" }}>
                    장소명: {lunch.locations.place_name}
                  </Text>
                  <Text
                    style={{
                      color: "#909090",
                      lineHeight: "3rem",
                    }}
                  >
                    주소: {lunch.locations.road_address_name}
                  </Text>
                  <a
                    href={lunch.locations.place_url}
                    target="_blank"
                    style={{
                      cursor: "pointer",
                      fontSize: "1.6rem",
                      color: "blue",
                      lineHeight: "3rem",
                      fontWeight: "600",
                    }}
                  >
                    카카오 지도 링크
                  </a>
                </SelectedPlace>
              </InputWrapper>
            )}

            <InputWrapper>
              <FakeDiv />
              <MapContainer
                setLocation={setLocation}
                location={lunch.locations}
                searchKeyword={searchKeyword}
              />
            </InputWrapper>
          </>

          <InputWrapper>
            <Text>정원</Text>
            <Select
              name="membernum"
              onChange={onChange}
              value={lunch?.membernum ? lunch?.membernum : "2"}
            >
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </Select>
          </InputWrapper>

          {is_edit ? (
            <>
              <Button onClick={updateLunch}>수정하기</Button>{" "}
              <Button style={{ marginBottom: "8rem" }} onClick={deleteLunch}>
                삭제하기
              </Button>{" "}
            </>
          ) : (
            <Button style={{ marginBottom: "8rem" }} onClick={addLunch}>
              등록하기
            </Button>
          )}
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 5rem auto;
  @media only screen and (max-width: 768px) {
    margin: 5rem auto 70px auto;
  }
`;

const MenuTitleWrapper = styled.div`
  margin: 20px;
`;

const MenuTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
`;

const Text = styled.p`
  font-size: 1.6rem;
  color: gray;
  min-width: 8rem;
  color: white;
  font-weight: 500;
`;

const InputWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.6rem;
  max-width: 500px;
  min-width: 350px;
`;

const SelectedPlace = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  background-color: #fff;
  padding: 1rem;
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  min-width: 270px;
  color: black;
  font-size: 1.6rem;
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid #dfdfdf;
  background-color: #fff;
`;

const Select = styled.select`
  width: 100%;
  height: 48px;
  min-width: 270px;
  color: black;
  font-size: 1.6rem;
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid #dfdfdf;
  background-color: #fff;
`;

const FakeDiv = styled.div`
  min-width: 8rem;
`;

const InputTextArea = styled.textarea`
  width: 100%;
  height: 8em;
  min-width: 270px;
  color: black;
  font-size: 1.6rem;
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid #dfdfdf;
  background-color: #fff;
`;

const SearchButton = styled.button`
  width: 7rem;
  min-width: 5rem;
  height: 48px;
  color: white;
  font-size: 1.6rem;
  background-color: #ff9841;
  border-radius: 6px;
  border: none;
`;

const Button = styled.button`
  min-width: 350px;
  max-width: 500px;
  width: 50%;
  height: 48px;
  font-weight: bold;
  font-size: 1.6rem;
  border: 1px solid #ff9841;
  border-radius: 6px;
  background-color: white;
  color: #ff9841;
  margin-bottom: 1rem;

  &:hover {
    background-color: #ff9841;
    color: white;
  }
`;

export default LunchCreateUpdate;
