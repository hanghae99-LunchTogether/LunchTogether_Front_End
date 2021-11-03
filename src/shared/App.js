/* eslint-disable */

import React, { useEffect } from "react";
import GlobalStyle from "../styles/GlobalStyles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";

import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import LunchCreateUpdate from "../pages/LunchCreateUpdate";
import ProfileUpdate from "../pages/ProfileUpdate";
import LunchDetail from "../pages/LunchDetail";
import Review from "../pages/Review";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { userActions } from "../redux/modules/user";
import CommentWrite from "../components/CommentWrite";
import MemberList from "../pages/MemberList";
import Notification from "../pages/Notification";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  console.log(token);

  useEffect(() => {
    Kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
    console.log("APPjs");
    if (token) {
      dispatch(userActions.getUserAPI());
    }
  }, []);

  return (
    <React.Fragment>
      <GlobalStyle />
      <ConnectedRouter history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/signup" exact component={Signup}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/profile/:id" exact component={Profile}></Route>
          <Route
            path="/profileupdate/:id"
            exact
            component={ProfileUpdate}
          ></Route>
          <Route
            path="/lunchpost/:lunchid"
            exact
            component={LunchDetail}
          ></Route>
          <Route
            path="/lunchregister"
            exact
            component={LunchCreateUpdate}
          ></Route>
          <Route
            path="/lunchregister/:lunchid"
            exact
            component={LunchCreateUpdate}
          ></Route>
          <Route path="/memberlist" exact component={MemberList}></Route>
          <Route path="/notification" exact component={Notification}></Route>
          <Route path="/review" exact component={Review}></Route>
        </Switch>
        {/* <Footer /> */}
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
