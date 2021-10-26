/* eslint-disable */

import React from "react";
import styled from "styled-components";
import { useState, useRef } from "react";
import { history } from "../redux/configureStore";
import { profileActions } from "../redux/modules/profile";
import { useDispatch } from "react-redux";

//본인일 경우에만 페이지 접근가능하게 하기

const ProfileUpdate = props => {
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState(null);
  const imgInput = useRef();

  const changeImage = e => {
    const reader = new FileReader();
    const file = imgInput.current.files[0];
    console.log(file);

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      console.log(reader.result);
      setImageUrl(reader.result);
    };
  };

  const imgUploadBtnClick = e => {
    imgInput.current.click();
    // const image = imgInput.current.files[0];

    // const formData = new FormData();
    // formData.append('image', image);

    // dispatch(updateProfileAPI(formData));
  };

  const [nickname, setNickname] = useState("");
  const [job, setJob] = useState("");
  const [mbti, setMbti] = useState("");
  const [introduction, setIntroduction] = useState("");

  const changeNickname = e => {
    setNickname(e.target.value);
  };

  const changeJob = e => {
    setJob(e.target.value);
  };
  const changeMbti = e => {
    setMbti(e.target.value);
  };
  const changeIntroduction = e => {
    setIntroduction(e.target.value);
  };

  const saveProfile = () => {
    const profileInfo = {
      username: "string",
      password: "string",
      email: "string",
      nickname: nickname,
      image: "image",
      mbti: mbti,
      gender: "String",
      location: "String",
      menu: "String",
      company: job,
      introduction: introduction,
    };

    dispatch(profileActions.updateProfileAPI(profileInfo));
  };

  return (
    <React.Fragment>
      <ProfileBox>
        <div>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://cdn.eyesmag.com/content/uploads/posts/2020/04/16/dune-first-behind-scene-release-main-343e8e4c-69d5-4966-99c9-4b935c10b610.jpg"
            }
            style={{ width: "100px", height: "100px" }}
          ></img>
          {/* <img src={preview ? preview : "/img/profile.png"}></img> */}
          <Upload
            ref={imgInput}
            type="file"
            accept="image/*"
            onChange={changeImage}
          ></Upload>
          {/* 프리뷰 부분 */}
          <div src={imageUrl ? imageUrl : "/img/profile.png"} />
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
        <button onClick={saveProfile}>저장하기</button>
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

const Upload = styled.input`
  display: none;
`;

export default ProfileUpdate;
