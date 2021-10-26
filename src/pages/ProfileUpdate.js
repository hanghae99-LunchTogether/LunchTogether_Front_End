/* eslint-disable */

import React from "react";
import styled from "styled-components";
import { useState, useRef } from "react";
import { actionCreators as profileActions } from "../redux/modules/profile";
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";

//본인일 경우에만 페이지 접근가능하게 하기

const ProfileUpdate = (props) => {
  const dispatch = useDispatch();

  const [image, setImage] = useState("");
  //   const preview = useSelector((state) => state.image.preview);
  const imgInput = useRef();

  const changeImage = (e) => {
    const reader = new FileReader();
    const file = imgInput.current.files[0];
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      // 이미지url
      console.log("내용물", reader.result);
    };
  };

  const imgUploadBtnClick = (e) => {
    imgInput.current.click();
  };

  const [nickname, setNickname] = useState("");
  const [job, setJob] = useState("");
  const [mbti, setMbti] = useState("");
  const [introduction, setIntroduction] = useState("");

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
          {/* <img src={preview ? preview : "/img/profile.png"}></img> */}
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
