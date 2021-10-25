import React from 'react'

import styled from 'styled-components';

const CreateLunch = () => {
  return (
    <CreateLunchBox>
      <input onClick=""/>
      <CreateLunchButton/>
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
