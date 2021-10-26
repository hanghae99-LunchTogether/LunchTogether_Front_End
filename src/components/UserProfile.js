import React from "react";
import styled from "styled-components";

const UserProfile = () => {
  return (
    <React.Fragment>
      <ProfileBox>
        <div>
          <img src={"/img/profile.png"}></img>
        </div>
        <div>
          <div>이메일 : </div>
          <div>이름 : </div>
          <div>닉네임 : </div>
          <div>직업 : </div>
          <div>MBTI : </div>
          <div>자기소개 :</div>
          <div></div>
        </div>
        <button>수정하기</button>
      </ProfileBox>
    </React.Fragment>
  );
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
