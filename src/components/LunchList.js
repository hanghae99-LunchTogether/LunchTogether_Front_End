import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { lunchActions } from "../redux/modules/lunch";

const LunchList = props => {
  const dispatch = useDispatch();
  const lunchList = useSelector(state => state.lunch.lunchListMain);
  console.log(lunchList);

  useEffect(() => {
    dispatch(lunchActions.getLunchListMainAPI());
  }, []);

  return <></>;
};

const Wrapper = styled.div`
  display: flex;
`;

export default LunchList;
