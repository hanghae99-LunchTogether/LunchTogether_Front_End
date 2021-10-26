import styled from "styled-components";
import React from "react";

const Image = props => {
  const { shape, src, size } = props;

  const styles = {
    src: src,
    size: size,
  };

  if (shape === "circle") {
    return <ImageCircle {...styles}></ImageCircle>;
  }

  if (shape === "rectangle") {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    );
  }

  return (
    <React.Fragment>
      <ImageDefault {...styles}></ImageDefault>
    </React.Fragment>
  );
};

Image.defaultProps = {
  shape: "rectangle",
  src: "https://www.007.com/wp-content/uploads/2020/05/B25_36645_RC2.jpg",
  size: 36,
};

const ImageDefault = styled.div`
  --size: ${props => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: url("${props => props.src}");
  background-size: contain;
`;

const AspectOutter = styled.div`
  width: 100%;
  min-width: 250px;
`;

const AspectInner = styled.div`
  margin: 0px 5px;
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url("${props => props.src}");
  background-size: cover;
`;

const ImageCircle = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: ${props => props.size}px;

  background-image: url("${props => props.src}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
`;

export default Image;
