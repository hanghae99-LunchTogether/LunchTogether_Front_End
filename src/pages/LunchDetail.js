import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { lunchActions } from "../redux/modules/lunch";
import CommentWrite from "../components/CommentWrite";

const LunchDetail = props => {
  const { history } = props;
  const dispatch = useDispatch();

  const user_info = useSelector(state => state);
  const post_info = useSelector(state => state.lunch.lunchList);

  const id = props.match.params.lunchid;

  useEffect(() => {
    // 런치 조회
    dispatch(lunchActions.getOneLunchAPI(id));
  }, []);
  return (
    <>
      <div>
        <h1>title</h1>
        <p>작성자</p>
        <p>설명</p>
        <p>약속 날짜/시간</p>
        <p>음식점 위치</p>
      </div>
      <CommentWrite></CommentWrite>
    </>
  );
};

export default LunchDetail;
