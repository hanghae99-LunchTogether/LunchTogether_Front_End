/* eslint-disable */

import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import ProfileUpdate from "../pages/ProfileUpdate";

import Header from "../components/Header";
import Footer from "../components/Footer";

function App() {
  useEffect(() => {
    Kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
    console.log(Kakao.isInitialized());
  }, []);
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Header />
        <Switch>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/signup" exact component={Signup}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/profile/:id" exact component={Profile}></Route>
        </Switch>
        <Footer />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
