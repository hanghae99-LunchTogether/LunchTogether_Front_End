/* eslint-disable */

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { apis } from "../shared/axios";
import { history } from "../redux/configureStore";
import CarouselSlide from "../components/CarouselSlide";
import Lunch from "../components/Lunch";
import LunchNew from "../components/LunchNew";
import lunch from "../redux/modules/lunch";

const Home = props => {
  const [page, setPage] = useState(1);
  const [next, setNext] = useState(true);
  const [fetching, setFetching] = useState(false);

  const [lunchList, setLunchList] = useState([]);
  const getLunchList = async () => {
    setFetching(true);
    setPage(page + 1);
    if (!next) {
      return;
    }
    const data = await apis.getLunchListMain(page);
    const lunchs = data.data.lunch;
    setLunchList([...lunchList, ...lunchs]);
    if (lunchs.length < 11) {
      setNext(false);
    }
    setFetching(false);
  };

  useEffect(() => {
    getLunchList();
  }, []);

  const user = useSelector(state => state.user.isLoggedIn);

  const moveToLunchRegister = () => {
    if (!user) {
      window.alert("로그인이 필요한 서비스입니다!");
      history.push("/login");
      return;
    }
    history.push(`/lunchregister`);
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight && !fetching) {
      getLunchList();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <Container>
        <Wrapper>
          {/* <Banner /> */}
          <CurationTitle>
            <div>
              <h1>
                매일매일 기대되는 <br />
                점심시간.
              </h1>
              <h2> 새로운 사람들과 즐거운 점심먹어요</h2>
            </div>
            <button onClick={moveToLunchRegister}>점심약속 등록하기</button>
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
  width: 100%;
  margin: 0 auto 60px auto;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    min-width: 375px;
    padding: 0 3.2rem;
  }
`;

const CurationTitle = styled.p`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10rem 0 5rem 0;

  h1 {
    font-size: 5rem;
    line-height: 6.5rem;
    color: white;
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: center;
  }

  h2 {
    font-size: 3rem;
    line-height: 3rem;
    color: white;
    text-align: center;
    font-weight: 300;
    margin-bottom: 5rem;
  }

  button {
    width: 50%;
    height: 56px;
    padding: 1.6rem 0 1.6rem 0;
    border-radius: 0.4rem;
    background-color: #ff9841;
    border: none;
    font-size: 1.6rem;
    font-weight: 700;
    color: #ffffff;
    box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
  }

  @media only screen and (max-width: 768px) {
    min-width: 350px;
    flex-direction: column;
    text-align: center;

    button {
      width: 100%;
      max-width: 300px;

      margin-top: 2rem;
    }
  }
`;

const LunchList = styled.div`
  max-width: 1200px;

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
  margin: 0 auto;
`;

export default Home;
