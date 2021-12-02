import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as ForkImg } from "../assets/fork.svg";

const ReviewRating = (props) => {
  const [clickValue, setClickValue] = useState(0);
  // const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const forks = Array(5).fill(0);

  const handleClick = (value) => {
    props.getValue(setClickValue(value));
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <Wrap>
      {forks.map((_, index) => {
        return (
          <ForkImg
            style={{
              cursor: "pointer",
              marginRight: "4px",
              width: "15.1px",
              height: "14px",
            }}
            key={index}
            onClick={() => handleClick(index + 1)}
            onMouseOver={() => handleMouseOver(index + 1)}
            onMouseLeave={handleMouseLeave}
            fill={(hoverValue || clickValue) > index ? "#ff9841" : "#efefef"}
          />
        );
      })}
      <span>{clickValue}점</span>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  span {
    font-size: 1.4rem;
    color: #64656a;
    margin-left: 10px;
  }
`;

export default ReviewRating;
