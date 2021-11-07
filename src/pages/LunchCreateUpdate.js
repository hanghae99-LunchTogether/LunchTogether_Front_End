/* eslint-disable */

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css"; // css import
import { useDispatch, useSelector } from "react-redux";
import HashtagList from "../components/HashtagList";
import { apis } from "../shared/axios";
import Calendar from "../components/Calendar";
import MapContainer from "../components/MapContainer";
import { history } from "../redux/configureStore";

const LunchCreateUpdate = props => {
  const [lunch, setLunch] = useState({
    title: "",
    content: "",
    location: "",
    membernum: "",
    date: "",
  });

  const [placeInput, setPlaceInput] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const lunchId = props.match.params.id;
  const is_edit = lunchId ? true : false;

  const getLunchData = async () => {
    try {
      const data = await apis.getOneLunch(lunchId);
      const lunch = data.data.lunch;
      setLunch(lunch);
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = e => {
    const {
      target: { name, value },
    } = e;
    setLunch({
      ...lunch,
      [name]: value,
      location: location,
    });
  };

  useEffect(() => {
    if (lunchId) {
      getLunchData();
    }
  }, []);

  const onSearchKeywordChange = e => {
    setPlaceInput(e.target.value);
  };

  const searchPlace = () => {
    setSearchKeyword(placeInput);
  };

  const addLunch = async () => {
    console.log(lunch);
    const data = await apis.createLunch(lunch);
    console.log(data);
    const newLunchId = data.data.data.lunch.lunchid;
    console.log(newLunchId);
    history.push(`/lunchpost/${newLunchId}`);
  };

  return (
    <>
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
            // defaultValue={lunch.title}
            value={lunch.title ? lunch.title : ""}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Text>소개</Text>
          <InputTextArea
            name="content"
            onChange={onChange}
            value={lunch.content}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Text>날짜/시간</Text>
          <Calendar setLunch={setLunch} lunch={lunch} />
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
        {lunch.location && (
          <InputWrapper>
            <FakeDiv />
            <SelectedPlace style={{ lineHeight: "1.5rem" }}>
              <Text style={{ fontSize: "1.4rem" }}>
                장소명: {lunch.location.place_name}
              </Text>
              <Text style={{ fontSize: "1.4rem" }}>
                주소: {lunch.location.road_address_name}
              </Text>
              <a
                href={lunch.location.place_url}
                target="_blank"
                style={{
                  cursor: "pointer",
                  fontSize: "1.4rem",
                  color: "blue",
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
            setLunch={setLunch}
            lunch={lunch}
            searchKeyword={searchKeyword}
          />
        </InputWrapper>
        <InputWrapper>
          <Text>정원</Text>
          <Select
            name="membernum"
            onChange={onChange}
            defalutValue="2"
            value={lunch.membernum}
          >
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </Select>
        </InputWrapper>
        <Button onClick={addLunch}>등록하기</Button>
      </Wrapper>
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
`;

const MenuTitleWrapper = styled.div`
  margin: 20px;
`;

const MenuTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
`;

const Text = styled.p`
  font-size: 1.6rem;
  color: gray;
  min-width: 8rem;
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

const SelectedPlace = styled.div`
  width: 100%;
  height: 48px;
  border-radius: 6px;
  background-color: #fff;
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
  margin-bottom: 1em;

  &:hover {
    background-color: #ff9841;
    color: white;
  }
`;

export default LunchCreateUpdate;
