import React from "react";

import styled from "styled-components";

const HashtagList = ({ hashtags, onRemove }) => {
  return (
    <HashtagOutterWrap>
      {hashtags.map((h, idx) => (
        <HashtagInnerWrap key={idx}>
          <HashtagContent>{h[0].text}</HashtagContent>
          <RemoveHashBtn onClick={() => onRemove(h[0].id)}>x</RemoveHashBtn>
        </HashtagInnerWrap>
      ))}
    </HashtagOutterWrap>
  );
};

const HashtagOutterWrap = styled.div`
  display: flex;
`;

const HashtagInnerWrap = styled.div`
  background-color: #f4f0e6;
  padding: 0px 4px;
  border-radius: 10px;
  box-sizing: border-box;
`;

const HashtagContent = styled.span`
  font-weight: bold;
  color: #221a12;
`;

const RemoveHashBtn = styled.button`
  height: 20px;
  border: none;
  border-radius: 8px;
  background-color: #f4f0e6;
  &:hover {
    background-color: #ceefe4;
  }
`;

export default HashtagList;
