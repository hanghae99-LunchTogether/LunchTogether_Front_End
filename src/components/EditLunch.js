import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const EditLunch = (currentPost) => {
  const dispatch = useDispatch();
  const [upDateLunch, setUpDateLunch] = useState("변경될 내용");

  const postId = currentPost.postId;

  const changeContent = (e) => {
    setUpDateLunch(e.target.value);
  }

  const updateLunch = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // dispatch(())
  }

  return (
    <CreateLunchBox>
      <input value={upDateLunch} onChange={changeContent} placeholder="오늘은 누구랑 먹을까?" />
      <CreateLunchButton onClick={updateLunch} type="submit" >저장하기</CreateLunchButton>
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
  background-color: #ffeead;
`;

const CreateLunchButton = styled.button`
  height: 22px;
  width: 100px;
`;

export default EditLunch;
