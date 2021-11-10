import React from "react";
import styled from "styled-components";

const Grid = props => {
  const { flex, width, margin, padding, bg, children, center } = props;

  const styles = {
    flex,
    width,
    margin,
    padding,
    bg,
    center,
  };

  return (
    <>
      <GridBox {...styles}>{children}</GridBox>
    </>
  );
};

Grid.defaultProps = {
  children: null,
  flex: false,
  width: "100%",
  padding: false,
  margin: false,
  bg: false,
  center: false,
};

const GridBox = styled.div`
  width: ${props => props.width};
  height: 100%;
  ${props => (props.padding ? `padding: ${props.padding};` : "")}
  ${props => (props.margin ? `margin: ${props.margin};` : "")}
  ${props => (props.bg ? `background-color: ${props.bg};` : "")}
  ${props =>
    props.flex
      ? `display: flex; align-items: center; justify-content: space-between; `
      : ""}
  ${props => (props.center ? `text-align: center` : "")}
`;
