import React from "react";
import { history } from "../redux/configureStore";

const Home = props => {
  return (
    <>
      <button onClick={() => history.push("/signup")}>회원가입</button>
    </>
  );
};

export default Home;
