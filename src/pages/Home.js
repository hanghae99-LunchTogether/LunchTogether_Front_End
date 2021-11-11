/* eslint-disable */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { apis } from "../shared/axios";
import { history } from "../redux/configureStore";
import CarouselSlide from "../components/CarouselSlide";
import Lunch from "../components/Lunch";
import LunchNew from "../components/LunchNew";

const Home = props => {
  const [lunchList, setLunchList] = useState([]);
  const getLunchList = async () => {
    const data = await apis.getLunchListMain();
    console.log(data);
    const lunchList = data.data.lunch;
    setLunchList(lunchList);
  };
  useEffect(() => {
    getLunchList();
  }, []);
  return (
    <>
      <Container>
        <Wrapper>
          <Banner />
          <CurationTitle>
            <div>
              <h1>오늘의 점심약속을 만나보세요🍱</h1>
              <h2>
                원하시는 점심약속을 찾아보고 새로운 사람과 교류를 늘려보세요
              </h2>
            </div>
            <button
              onClick={() => {
                history.push("/lunchregister");
              }}
            >
              점심약속 등록하기
            </button>
          </CurationTitle>
          <LunchList>
            {lunchList.map((l, idx) => {
              return <LunchNew {...l} key={idx} />;
            })}
            <FakeDiv />
            <FakeDiv />
            <FakeDiv />
          </LunchList>
        </Wrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    min-width: 375px;
    padding: 0 3.2rem;
  }
`;

const Banner = styled.div`
  width: 100%;
  height: 30vh;
  background-image: url("https://images.squarespace-cdn.com/content/v1/5c2d560c5cfd7902be87d759/1551228568578-1R8DDL4VITBS3TNQKBYK/Jeannie-Phan-Illustration-Editorial-Airbnb-Design-Blog-6.jpg?format=1500w");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
`;

const CurationTitle = styled.p`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5rem 0 2rem 0;

  h1 {
    font-size: 2.4rem;
    line-height: 2rem;
    color: white;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 1.8rem;
    line-height: 3rem;
    color: white;
  }

  button {
    width: 308px;
    height: 56px;
    padding: 1.6rem 0 1.6rem 0;
    border-radius: 0.4rem;
    background-color: #ff9841;
    border: none;
    font-size: 1.6rem;
    font-weight: 700;
    color: #ffffff;
  }

  @media only screen and (max-width: 768px) {
    min-width: 350px;
    flex-direction: column;
    text-align: center;

    button {
      width: 100%;
      margin-top: 2rem;
    }
  }
`;

const LunchList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3.2rem;
  gap: 2rem 2rem;

  @media only screen and (max-width: 768px) {
    min-width: 350px;
  }
`;

const FakeDiv = styled.div`
  width: 280px;
`;

export default Home;
