import React from "react";
import styled from "styled-components";
import { useState, useRef } from "react";

//본인일 경우에만 페이지 접근가능하게 하기

const ProfileUpdate = (props) => {
  const imgInput = useRef();

  const imgUploadBtnClick = () => {
    imgInput.current.click();
  };

  const [image, setImage] = useState("");
  const [nickname, setNickname] = useState("");
  const [job, setJob] = useState("");
  const [mbti, setMbti] = useState("");
  const [introduction, setIntroduction] = useState("");

  const changeImage = (e) => {
    setImage(e.target.value);
  };

  const changeNickname = (e) => {
    setNickname(e.target.value);
  };

  const changeJob = (e) => {
    setJob(e.target.value);
  };
  const changeMbti = (e) => {
    setMbti(e.target.value);
  };
  const changeIntroduction = (e) => {
    setIntroduction(e.target.value);
  };

  return (
    <React.Fragment>
      <ProfileBox>
        <div>
          <img src={"/img/profile.png"}></img>
          <Uploade
            ref={imgInput}
            type="file"
            accept="image/*"
            onChange={changeImage}
          ></Uploade>
          <button
            onClick={() => {
              imgUploadBtnClick();
            }}
          >
            이미지 업로드
          </button>
        </div>
        <div>
          <div>이메일 : </div>
          <div>이름 : </div>
          <div>
            닉네임 : <input type="text" onChange={changeNickname}></input>
            <button>중복확인</button>
          </div>
          <div>
            직업 : <input type="text" onChange={changeJob}></input>
          </div>
          <div>
            MBTI : <input type="text" onChange={changeMbti}></input>
          </div>
          <div>
            자기소개 : <input type="text" onChange={changeIntroduction}></input>
          </div>
          <div></div>
        </div>
        <button>저장하기</button>
      </ProfileBox>
    </React.Fragment>
  );
};

const ProfileBox = styled.div`
  background-color: beige;
  padding: 20px;
  margin: auto;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Uploade = styled.input`
  display: none;
`;

export default ProfileUpdate;
