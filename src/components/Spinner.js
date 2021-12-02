import React, { useState } from "react";
import { css } from "@emotion/react";
import PacmanLoader from "react-spinners/PacmanLoader";

const Spinner = (props) => {
  const override = css`
    display: block;
    margin: 0 auto;
  `;
  const color = "#FE7022";

  return (
    <div>
      <PacmanLoader
        color={color}
        loading={props.loading}
        size={100}
        css={override}
      />
    </div>
  );
};

export default Spinner;
