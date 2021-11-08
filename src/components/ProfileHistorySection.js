import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { apis } from "../shared/axios";
import useTabs from "../shared/useTabs";
import ProfileLunch from "./ProfileLunch";
import ProfileReview from "./ProfileReview";

const content = [
  {
    id: 0,
    tab: "점심약속",
    active: false,
  },
  {
    id: 1,
    tab: "후기",
    active: false,
  },
];

const ProfileHistorySection = props => {
  const { lunchs, reviews } = props;
  // const appliedLunch = lunchs.filter(l => l.status === "applied");
  // const madeLunch = lunchs.filter(l => l.status === "made");
  // const [lunch, setLunch] = useState(appliedLunch);
  const { currentItem, changeItem } = useTabs(0, content);

  const onChange = e => {
    const {
      target: { name, value },
    } = e;
    console.log(typeof value);
    // value === "1" ? setLunch(appliedLunch) : setLunch(madeLunch);
  };

  return (
    <>
      <Wrapper>
        <TabWrapper>
          {content.map((section, idx) => (
            <Button
              key={idx}
              active={currentItem.id === idx ? true : false}
              onClick={() => changeItem(idx)}
            >
              {section.tab}
            </Button>
          ))}
        </TabWrapper>
        <HistorySection>
          {currentItem.tab === "점심약속" ? (
            <>
              <HistoryWrapper>
                <ProfileLunch lunchs={lunchs} />
              </HistoryWrapper>
            </>
          ) : (
            <>
              <HistoryWrapper>
                <ProfileReview reviews={reviews} />
              </HistoryWrapper>
            </>
          )}
        </HistorySection>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-top: 5rem;
  @media only screen and (max-width: 768px) {
    margin-left: 0;
    align-items: center;
  }
`;

const TabWrapper = styled.div`
  display: flex;
  margin-bottom: 5rem;
  padding: 1rem;
`;

const HistoryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    align-items: center;
  }
`;

const Text = styled.p`
  text-align: center;
  font-size: ${props => props.size}rem;
  line-height: ${props => props.size}rem;
  ${props => (props.color ? `font-color: ${props.color}` : "font-color: gray")};
  ${props => props.bold && `font-weight: bold`};
  margin: 1rem;
`;

const Button = styled.button`
  width: 10rem;
  line-height: 3rem;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.active ? "#ff9841" : "gray")};
  color: white;
  font-weight: ${props => props.active && "bold"};
  font-size: 1.6rem;
  text-align: center;
  border-radius: 10px;
  padding: 1rem;
  border: none;
  margin-right: 2rem;

  @media only screen and (max-width: 768px) {
    margin-right: 0;
  }
`;

const HistorySection = styled.div`
  width: 100%;
  display: flex;
`;

const Select = styled.select`
  height: 48px;
  color: black;
  font-size: 1.6rem;
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid #dfdfdf;
  background-color: #fff;
  margin-bottom: 3rem;
  min-width: 380px;
  max-width: 500px;
`;

export default ProfileHistorySection;
