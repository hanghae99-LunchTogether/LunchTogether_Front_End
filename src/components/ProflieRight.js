/* eslint-disable */

import React, { useState } from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import LunchNew from "./LunchNew";
import ProfileReviewItem from "./ProfileReviewItem";
import moment from "moment";

const ProflieRight = props => {
  const { lunchs, usersReviews } = props;

  const today = moment(new Date()).format();

  const totalLunch = lunchs.applied.concat(lunchs.owned).concat(lunchs.offered);
  const scheduledLunch = totalLunch.filter(
    l => moment(l.date).format() > today
  );
  const completedLunch = totalLunch.filter(
    l => moment(l.date).format() < today
  );

  const [tabs, setTabs] = useState([
    {
      title: "예정된 점심약속",
      active: true,
      content: scheduledLunch,
    },
    {
      title: "완료된 점심약속",
      active: false,
      content: completedLunch,
    },
    // {
    //   title: "리뷰",
    //   active: false,
    //   content: [1, 2, 3],
    // },
  ]);
  const [index, setIndex] = useState(0);

  const changeTab = index => {
    setTabs(
      tabs.map((tab, i) =>
        i === index ? { ...tab, active: true } : { ...tab, active: false }
      )
    );
    setIndex(index);
  };

  return (
    <Wrapper>
      <Text size="2.6" color="black" weight="800">
        나의 점심약속
      </Text>
      <ElWrapper>
        {tabs.map((tab, idx) => (
          <TabWrapper
            key={idx}
            onClick={() => changeTab(idx)}
            active={tab.active}
          >
            {tab.title}
            {tab.active && (
              <hr
                style={{
                  marginBottom: "1rem",
                  height: "2px",
                  background: "black",
                }}
              />
            )}
          </TabWrapper>
        ))}
      </ElWrapper>
      <LunchListWrapper>
        {tabs[index].content.map(
          (l, idx) =>
            // index !== 2 ? (
            index === 0 ? (
              <LunchNew key={idx} {...l} />
            ) : (
              <LunchNew key={idx} completed {...l} />
            )

          // <ProfileReviewItem key={idx} reviews={usersReviews} />
        )}
        <FakeDiv />
      </LunchListWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 650px;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem 5rem 2rem;
  background-color: white;
  border-radius: 10px;

  @media only screen and (max-width: 768px) {
    margin-top: 1rem;
    max-width: 330px;
  }
`;

const ElWrapper = styled.div`
  display: flex;
`;

const TabWrapper = styled.div`
  height: 100%;
  margin-right: 2rem;
  cursor: pointer;
  margin-top: 2rem;
  font-size: 2rem;
  ${props =>
    props.active
      ? "color: black; font-weight: 700;"
      : "color: gray; font-weight: 400;"};
`;

const Text = styled.p`
  font-size: ${props => (props.size ? props.size : "1.6")}rem;
  font-weight: ${props => (props.weight ? props.weight : "400")};
  color: ${props => (props.color ? props.color : "#909090")};
  overflow: hidden;
  text-overflow: ellipsis;
  /* white-space: nowrap; */
  letter-spacing: -1.1px;
  line-height: 3rem;
`;

const LunchListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 3.2rem;
  gap: 2rem 2rem;
  margin-top: 2rem;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Button = styled.button`
  width: 80%;
  height: 4rem;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 5px;
  border: none;
  background-color: ${props => (props.bg ? props.bg : "#ff9841")};
  color: white;
  z-index: 1000;
`;

const FakeDiv = styled.div`
  width: 295px;
`;

export default ProflieRight;
