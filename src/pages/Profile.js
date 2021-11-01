import React from "react";
import { useSelector } from "react-redux";
import UserProfile from "../components/UserProfile";

const Profile = (props) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  if (isLoggedIn) {
    return (
      <React.Fragment>
        <h1>프로필페이지 입니다.</h1>
        <UserProfile />
        <div>매너온도 표시(컴포넌트)</div>
        <div>내가 작성한 점심약속 카드형태로 추가(컴포넌트)</div>
        <div>내가 참여한 점심약속 카드형태로 추가(컴포넌트)</div>
        <div>타인평가 후기(컴포넌트)</div>
      </React.Fragment>
    );
  }

  return <h1>로그인을 해주세요</h1>;
};

export default Profile;
