import React from "react";
import styled from "styled-components";
import CommentWrite from "../components/CommentWrite";

const LunchDetail = (props) => {
  return (
    <>
      <div>
        <h1>title</h1>
        <p>작성자</p>
      </div>
      <CommentWrite></CommentWrite>
    </>
  );
};

export default LunchDetail;
