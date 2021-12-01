import React from "react";
import { useSelector } from "react-redux";
import CommentItem from "./CommentItem";

const CommentList = (props) => {
  const commentList = useSelector((state) => state.comment.commentList);
  // const commentList = useSelector((state) => state.comment.commentList.comment);
  console.log("List", commentList);
  return (
    <>
      {commentList && (
        <React.Fragment>
          {commentList.map((item, index) => {
            return <CommentItem {...item} index={index} key={index} />;
          })}
        </React.Fragment>
      )}
    </>
  );
};

export default CommentList;
