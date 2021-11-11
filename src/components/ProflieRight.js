import { tooltipClasses } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import LunchNew from "./LunchNew";

const allTabs = [
  {
    id: 1,
    title: "점심약속",
    active: true,
  },
  {
    id: 2,
    title: "후기",
    active: false,
  },
];

const ProflieRight = props => {
  const { lunchs, usersReviews } = props;
  console.log(lunchs);

  const totalLunch = lunchs?.applied.concat(lunchs.owned);
  console.log(totalLunch);

  return (
    <Wrapper>
      <Text size="2.4" color="black" weight="700">
        나의 점심약속
      </Text>
      <LunchListWrapper>
        {totalLunch.length === 0 ? (
          <>
            <Text style={{ marginTop: "5rem" }}> 잡힌 약속이 없어요 🥲 </Text>
            <Button onClick={() => history.push("/")}>점심약속 보러가기</Button>
          </>
        ) : (
          totalLunch.map((l, idx) => {
            return (
              <>
                <LunchNew {...l} />
              </>
            );
          })
        )}
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
  padding: 5rem 2rem 5rem 2rem;
  background-color: white;
  border-radius: 10px;

  @media only screen and (max-width: 768px) {
    margin-top: 1rem;
    max-width: 330px;
  }
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
  justify-content: space-between;
  margin-bottom: 3.2rem;
  gap: 2rem 2rem;
  margin-top: 1rem;

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

export default ProflieRight;
