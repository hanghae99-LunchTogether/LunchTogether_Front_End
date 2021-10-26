/* eslint-disable */

import React from "react";
import { history } from "../redux/configureStore";
import Banner from "../components/Banner";
import LunchList from "../components/LunchList";
import HomeProfile from "../components/HomeProfile";
import styled from "styled-components";

const Home = (props) => {
  return (
    <>
      <Wrapper>
        <Banner />
        <HomeProfile />
      </Wrapper>
      <LunchList />
    </>
  );
};

export default Home;

const Wrapper = styled.div`
  max-width: 1050px;
  display: flex;
`;
