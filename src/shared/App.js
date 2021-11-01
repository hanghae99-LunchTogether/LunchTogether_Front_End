/* eslint-disable */

import React, { useEffect } from "react";
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

import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import { userActions } from "../redux/modules/user";
import Review from "../components/Review";
import MapContainer from "../components/MapContainer";
import SearchPlace from "../components/SearchPlace";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    Kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
    dispatch(userActions.getUserAPI());
  }, []);
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Header />
        <Switch>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/signup" exact component={Signup}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/profile" exact component={Profile}></Route>
          <Route path="/profileupdate" exact component={ProfileUpdate}></Route>
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
          <Route path="/review" exact component={Review}></Route>
          <Route path="/map" exact component={SearchPlace}></Route>
        </Switch>
        {/* <Footer /> */}
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
