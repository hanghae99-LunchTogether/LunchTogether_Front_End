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

const LunchCreateUpdate = (props) => {
  const [lunch, setLunch] = useState(null);
  const [date, setDate] = useState(null);
  const [placeInput, setPlaceInput] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [place, setPlace] = useState(null);
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


  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;

    setLunch({
      ...lunch,
      [name]: value,
      location: place,
      date: date,
    });
  };


  useEffect(() => {
    if (lunchId) {
      getLunchData();
    }
  }, []);

  const onSearchKeywordChange = (e) => {
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
          <Text style={{ textAlign: "center", margin: "1em" }}>
            맛있게 먹어봐
          </Text>
        </MenuTitleWrapper>
        <InputWrapper>
          <Text>타이틀</Text>
          <Input />
        </InputWrapper>
        <InputWrapper>
          <Text>소개</Text>
          <InputTextArea />
        </InputWrapper>
        <InputWrapper>
          <Text>날짜/시간</Text>
          <Calendar />
        </InputWrapper>
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
  margin: 0 auto;
  margin-top: 8rem;
`;

const MenuTitleWrapper = styled.div`
  margin: 20px;
`;

const MenuTitle = styled.h1`
  font-size: 1rem;
  font-weight: bold;
`;

const Text = styled.p`
  font-size: 1rem;
  color: gray;
  min-width: 5rem;
`;

const InputWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  max-width: 500px;
  min-width: 350px;
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  min-width: 270px;
  color: black;
  font-size: 1rem;
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid #dfdfdf;
  background-color: #fff;
`;
const InputTextArea = styled.textarea`
  width: 100%;
  height: 8em;
  min-width: 270px;
  color: black;
  font-size: 1em;
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid #dfdfdf;
  background-color: #fff;
`;

const Button = styled.button`
  min-width: 350px;
  width: 41%;
  height: 48px;
  font-family: NotoSansKR;
  font-weight: bold;
  font-size: 1.2em;
  border: 1px solid #ff9841;
  border-radius: 6px;
  background-color: white;
  color: #ff9841;
  margin-bottom: 1em;

  &:hover {
    background-color: #ff9841;
    color: white;
  }
  ${props =>
    props.src
      ? `background-image: url(${props.src}); background-size: contain; border: none; background-position: center; background-repeat: no-repeat; background-color: #FFEB02; &:hover {background-color: #FFEB02;}`
      : ""}
`;

export default LunchCreateUpdate;
