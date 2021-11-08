/* eslint-disable */

import React from "react";
import styled from "styled-components";
import { Image } from "../elements";

const ProfileLunch = props => {
  const { lunch } = props;
  console.log(lunch);
  return (
    <>
      <Wrapper>
        <LunchListWrapper>
          {lunch.map((l, idx) => {
            return (
              <LunchWrapper>
                <Text
                  size="2"
                  bold
                  color="black"
                  style={{ marginBottom: "1rem" }}
                >
                  {l.title}
                </Text>
                <OwnerWrapper>
                  <Image shape="circle" size="30" src={l.user.image} />
                  <Text style={{ marginLeft: "1rem" }} bold>
                    {l.nickname} {l.job}
                  </Text>
                </OwnerWrapper>
                <Text>{l.time.split(" ")[0]}</Text>
                <Text>{l.locations.place_name}</Text>
                <Text>{l.membernum}</Text>
                <Text>참여인원이미지, 닉네임, 직무</Text>
              </LunchWrapper>
            );
          })}
        </LunchListWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
`;

const LunchListWrapper = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: none;
  min-width: 380px;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    margin-right: 0;
  }
`;

const LunchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 380px;
  padding: 2rem;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  margin-right: 1rem;
  margin-bottom: 1rem;
  @media only screen and (max-width: 768px) {
    margin-right: 0;
  }
`;

const Text = styled.p`
  font-size: ${props => (props.size ? props.size : "1.6")}rem;
  line-height: 3rem;
  ${props => (props.color ? `font-color: ${props.color}` : "font-color: gray")};
  ${props => props.bold && `font-weight: bold`};
`;

const OwnerWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export default ProfileLunch;
