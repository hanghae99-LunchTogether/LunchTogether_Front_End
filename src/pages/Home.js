/* eslint-disable */

import React, { useEffect, useState } from "react";
import { history } from "../redux/configureStore";
import Banner from "../components/Banner";
import styled from "styled-components";
import { apis } from "../shared/axios";
import Lunch from "../components/Lunch";

const Home = props => {
  const [lunchList, setLunchList] = useState([]);
  console.log(lunchList);
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
        {lunchList.map((l, idx) => {
          return <Lunch {...l} key={idx} />;
        })}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  max-width: 1024px;
  height: 100vh;
  flex-direction: column;
  margin: 0 auto;
`;

const BannerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 400px;
  height: 30%;
  width: 100%;
  background-color: green;
  background-image: url("${props => props.src}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
`;

const CurationTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin: 2rem 0;
`;

export default Home;
