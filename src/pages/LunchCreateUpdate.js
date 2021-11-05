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
        </MenuTitleWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 15%;
`;

const MenuTitleWrapper = styled.div`
  margin: 20px;
`;

const MenuTitle = styled.h1`
  font-size: 2em;
  font-weight: bold;
`;

export default LunchCreateUpdate;
