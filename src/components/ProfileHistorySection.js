import React from "react";
import styled from "styled-components";
import useTabs from "../shared/useTabs";

const content = [
  {
    tab: "점심약속",
    component: <div>점약</div>,
  },
  {
    tab: "후기",
    component: <div>후기</div>,
  },
];

const ProfileHistorySection = props => {
  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <>
      <Wrapper>
        {content.map((section, idx) => (
          <button onClick={() => changeItem(idx)}> {section.tab}</button>
        ))}
        <div>{currentItem.component}</div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TabWrapper = styled.div`
  display: flex;
`;

export default ProfileHistorySection;
