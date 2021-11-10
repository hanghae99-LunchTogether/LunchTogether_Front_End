import React from "react";
import styled from "styled-components";
import { Grid } from "../elements";

const LunchNew = props => {
  return (
    <>
      <Wrapper padding="2rem" margin="0 1rem 1rem 0" shadow>
        <ELWrapper
          margin="0 0 1rem 0"
          flex
          style={{ justifyContent: "space-between" }}
        >
          <Text weight="600" color="black" size="1.4" color="#FFC428">
            삼성동&nbsp;&nbsp;|&nbsp;&nbsp; 12시
          </Text>
          <Text weight="800" size="1.4">
            3&nbsp;/&nbsp;4
          </Text>
        </ELWrapper>
        <ELWrapper margin="0 0 2rem 0">
          <Text weight="700" size="2" color="black">
            코엑스 에그슬럿에서 가볍고, 빠르게!
          </Text>
        </ELWrapper>
        <ELWrapper flex margin="0 0 2rem 0">
          <CircleImage size="5" />
          <ELWrapper>
            <Text weight="700" color="black" size="1.2">
              gizmo7duck
            </Text>
            <Text size="1">프론트엔드 개발자</Text>
          </ELWrapper>
        </ELWrapper>
        <ELWrapper margin="0 0 2rem 0">
          <hr />
        </ELWrapper>
        <ELWrapper flex style={{ justifyContent: "space-between" }}>
          <ELWrapper>
            <Text size="1.4">📍&nbsp;&nbsp; 코엑스 에그슬럿</Text>
            <Text size="1.4">📆&nbsp;&nbsp; 2021년 11월 10일(수)</Text>
          </ELWrapper>
          <Bookmark>
            <img src="/img/bookmark.svg" />
            <span>3</span>
          </Bookmark>
        </ELWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: ${props => props.width};
  height: 100%;
  ${props => (props.padding ? `padding: ${props.padding};` : "")};
  ${props => (props.margin ? `margin: ${props.margin};` : "")};
  background-color: ${props => (props.bg ? props.bg : "white")};
  ${props => (props.flex ? `display: flex; align-items: center; ` : "")};
  ${props => (props.center ? `text-align: center` : "")};
  ${props =>
    props.shadow ? `box-shadow: 5px 5px 5px 2px rgba(55, 50, 40, 0.16)` : ""};
  border-radius: 10px;
  max-width: 260px;
  max-height: 240px;
`;

const ELWrapper = styled.div`
  ${props => (props.padding ? `padding: ${props.padding};` : "")};
  ${props => (props.margin ? `margin: ${props.margin};` : "")};
  background-color: ${props => (props.bg ? props.bg : "white")};
  ${props => (props.flex ? `display: flex; align-items: center; ` : "")};
  ${props => (props.center ? `text-align: center` : "")};
  ${props =>
    props.shadow ? `box-shadow: 5px 5px 5px 2px rgba(55, 50, 40, 0.16)` : ""};
  align-items: center;
`;

const Text = styled.p`
  font-size: ${props => (props.size ? props.size : "1.6")}rem;
  font-weight: ${props => (props.weight ? props.weight : "400")};
  color: ${props => (props.color ? props.color : "#909090")};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  letter-spacing: -1.1px;
  line-height: 2.2rem;
`;

const CircleImage = styled.div`
  width: ${props => props.size}rem;
  height: ${props => props.size}rem;
  border-radius: ${props => props.size}rem;

  background-image: url("https://www.007.com/wp-content/uploads/2020/05/B25_36645_RC2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  margin-right: 1rem;
`;

const Bookmark = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 18px;
    height: 21px;
  }
  span {
    font-size: 1.4rem;
    color: #64656a;
    opacity: 0.3;
    margin-left: 0.6rem;
  }
`;

export default LunchNew;
