/* eslint-disable */

import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { profileActions } from "../redux/modules/profile";
import { history } from "../redux/configureStore";

const UserProfile = (props) => {
  const dispatch = useDispatch();
  const profileInfo = useSelector((state) => state.profile.profile);

  // const loginInfo = useSelector((state) => state.user.user.email);
  // const userId = profileInfo.email;

  useEffect(() => {
    dispatch(profileActions.getProfileAPI());
  }, []);

  // if (loginInfo === userId) {
  return (
    <React.Fragment>
      <ProfileBox>
        <div>
          <img src={"/img/profile.png"}></img>
        </div>
        <div>
          <div>이메일 : {profileInfo.email}</div>
          <div>이름 : {profileInfo.username}</div>
          <div>닉네임 :{profileInfo.nickname}</div>
          <div>직업 : {profileInfo.company}</div>
          <div>MBTI : {profileInfo.mbti}</div>
          <div>자기소개 :{profileInfo.introduction}</div>
          <div></div>
        </div>
        <button>수정하기</button>
      </ProfileBox>
    </React.Fragment>
  );
  // }

  // return (
  //   <React.Fragment>
  //     <ProfileBox>
  //       <div>
  //         <img src={"/img/profile.png"}></img>
  //       </div>
  //       <div>
  //         <div>이메일 : {profileInfo.email}</div>
  //         <div>이름 : {profileInfo.username}</div>
  //         <div>닉네임 :{profileInfo.nickname}</div>
  //         <div>직업 : {profileInfo.company}</div>
  //         <div>MBTI : {profileInfo.mbti}</div>
  //         <div>자기소개 :{profileInfo.introduction}</div>
  //         <div></div>
  //       </div>
  //     </ProfileBox>
  //   </React.Fragment>
  // );
};

const ProfileBox = styled.div`
  background-color: beige;
  padding: 20px;
  width: 500px;
  display: flex;
  align-items: center;
  button {
    margin-left: 50px;
  }
`;

export default UserProfile;
