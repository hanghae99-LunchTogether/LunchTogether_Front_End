/* eslint-disable */

import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const EditLunch = (currentPost) => {
  const dispatch = useDispatch();
  const [upDateLunch, setUpDateLunch] = useState("");

  const postId = currentPost.postId;

  const changeContent = (e) => {
    setUpDateLunch(e.target.value);
  };

  const updateLunch = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(updateLunchAPI(upDateLunch));
  };

  return (
    <CreateLunchBox>
      <input
        value={upDateLunch}
        onChange={changeContent}
        placeholder="오늘은 누구랑 먹을까?"
      />
      <div>
        {is_edit ? (
          <Button onClick={updateLunch} type="submit">
            수정하기
          </Button>
        ) : (
          <Button onClick={updateLunch} type="submit">
            저장하기
          </Button>
        )}
      </div>
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

const Button = styled.button`
  height: 22px;
  width: 100px;
`;

export default EditLunch;
