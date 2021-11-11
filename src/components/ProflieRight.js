import React from "react";
import styled from "styled-components";
import LunchNew from "./LunchNew";

const ProflieRight = props => {
  const { lunchs } = props;

  const totalLunch = lunchs?.applied.concat(lunchs.owned);

  return (
    <Wrapper>
      <Text size="2.4" color="black" weight="700">
        나의 점심약속
      </Text>
      <LunchListWrapper>
        {lunchs &&
          totalLunch.map((l, idx) => {
            console.log(l);
            return <LunchNew {...l} />;
          })}
        <LunchNew />
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

const LunchList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3.2rem;
  gap: 1rem 1rem;

  @media only screen and (max-width: 768px) {
    min-width: 350px;
  }
`;

export default ProflieRight;
