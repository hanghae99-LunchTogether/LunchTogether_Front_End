import React, { useState } from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { aaddPostToAxios } from '../redux/modules/lunch';


const CreateLunch = () => {
  const [addPostInput, setAddPostInput] = React.useState('');
  const dispatch = useDispatch();



  const changeContent = (e) => {
    setAddPostInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(aaddPostToAxios(addPostInput));
    console.log('연결됫누?', addPostInput);
  }

  return (
    <CreateLunchBox>
      <input value={addPostInput} onChange={changeContent} placeholder="오늘은 누구랑 먹을까?"/>
      <CreateLunchButton onClick={handleSubmit} type="submit"/>
    </CreateLunchBox>
  )
}

const CreateLunchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 300px;
  margin: auto;
  background-color: red;
`;

const CreateLunchButton = styled.button`
  height: 22px;
  width: 22px;
`;




export default CreateLunch;
