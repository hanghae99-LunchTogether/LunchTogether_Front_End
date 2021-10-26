/* eslint-disable */

import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { lunchActions } from "../redux/modules/lunch";

const CreateLunch = props => {
  const dispatch = useDispatch();
  const [createLunch, setCreateLunch] = React.useState("");

  const changeContent = e => {
    setCreateLunch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    console.log(createLunch);
    dispatch(lunchActions.createLunchAPI(createLunch));
  };

  return (
    <CreateLunchBox>
      <input
        value={createLunch}
        onChange={changeContent}
        placeholder="오늘은 누구랑 먹을까?"
      />
      <CreateLunchButton onClick={handleSubmit} type="submit">
        추가하기
      </CreateLunchButton>
    </CreateLunchBox>
  );
};

const CreateLunchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 300px;
  margin: auto;
  background-color: #ffad60;
`;

const CreateLunchButton = styled.button`
  height: 22px;
  width: 100px;
`;

export default CreateLunch;
