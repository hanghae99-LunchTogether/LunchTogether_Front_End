/* eslint-disable */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { apis } from "../shared/axios";
import { history } from "../redux/configureStore";
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
        <BannerImage>
          <img src="https://i.pinimg.com/originals/0c/cc/3b/0ccc3bd079e58b94c1a7b0ee4ac985f2.jpg" />
        </BannerImage>
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
            return <Lunch {...l} key={idx} />;
          })}
        </LunchList>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  max-width: 192rem;
  padding: 0 32rem 0 32rem;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
`;

const BannerImage = styled.div`
  width: 100%;
  height: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
  }

  @media only screen and (max-width: 768px) {
    height: 300px;
  }
`;

const CurationTitle = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 0 3rem 0;

  h1 {
    font-size: 2.4rem;
    line-height: 3.7rem;
    color: #3c3c3c;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 1.8rem;
    line-height: 3rem;
    color: #64656a;
  }

  button {
    width: 30.8rem;
    height: 5.6rem;
    padding: 1.6rem 0 1.6rem 0;
    border-radius: 0.4rem;
    background-color: #ff9841;
    border: none;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: #ffffff;
  }
`;

const LunchList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3.2rem 2.8rem;
`;

export default Home;
