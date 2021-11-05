/* eslint-disable */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { apis } from "../shared/axios";
import Lunch from "../components/Lunch";

const Home = (props) => {
  const [lunchList, setLunchList] = useState([]);
  const getLunchList = async () => {
    const data = await apis.getLunchListMain();
    const lunchList = data.data.lunch;
    setLunchList(lunchList);
  };
  useEffect(() => {
    getLunchList();
  }, []);
  return (
    <>
      <Wrapper>
        <BannerImage src="https://i.pinimg.com/originals/0c/cc/3b/0ccc3bd079e58b94c1a7b0ee4ac985f2.jpg" />

        <CurationTitle>큐레이션 타이틀</CurationTitle>
        <LunchList>
          {lunchList.map((l, idx) => {
            return <Lunch {...l} key={idx} />;
          })}
        </LunchList>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  max-width: 1024px;
  flex-direction: column;
  margin: 0 auto;
`;

const BannerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 57.3%;
  background-image: url("${(props) => props.src}");
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (max-width: 768px) {
    height: 300px;
  }
`;

const CurationTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin: 2rem 0;
`;

const LunchList = styled.div`
  display: grid;
  grid-template-columns: 250px 250px 250px 250px;
  gap: 10px;
`;

export default Home;
