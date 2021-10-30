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

  return (
    <>
      {lunchList && (
        <Wrapper>
          {lunchList.map((l, idx) => {
            return (
              <>
                <CardWrapper>
                  <div>{l.title}</div>
                  <div>{l.content}</div>
                  {/* <div>{l.user.nickName}</div> */}
                </CardWrapper>
              </>
            );
          })}
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const CardWrapper = styled.div``;

export default LunchList;
