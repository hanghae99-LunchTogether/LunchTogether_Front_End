import React from "react";
import styled from "styled-components";
import { Grid } from "../elements";

const LunchNew = props => {
  return (
    <>
      <Wrapper padding="2rem" margin="0 0 2rem 0" shadow>
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
          <CircleImage
            size="5"
            src="data:image/jpeg;base64,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"
          />
          <ELWrapper>
            <Text weight="600" color="black" size="1.4">
              gizmo7duck
            </Text>
            <Text size="1.4">프론트엔드 개발자</Text>
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
  max-height: 270px;
`;

const ELWrapper = styled.div`
  height: 100%;
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
  /* white-space: nowrap; */
  letter-spacing: -1.1px;
  line-height: 2.2rem;
`;

const CircleImage = styled.div`
  width: ${props => props.size}rem;
  height: ${props => props.size}rem;
  border-radius: ${props => props.size}rem;

  background-image: url("${props =>
    props.src
      ? props.src
      : "http://webimage.10x10.co.kr/image/basic600/165/B001654412.jpg"}");
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
