/* eslint-disable */

import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { profileActions } from "../redux/modules/profile";
import { useDispatch, useSelector } from "react-redux";

//본인일 경우에만 페이지 접근가능하게 하기

const ProfileUpdate = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.profile);

  useEffect(() => {
    dispatch(profileActions.getProfileAPI());
  }, []);

  const [imageUrl, setImageUrl] = useState("");
  const fileRef = useRef();

  const changeImage = (e) => {
    const reader = new FileReader();
    const file = fileRef.current.files[0];

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
  };

  const imgUploadBtnClick = (e) => {
    fileRef.current.click();
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

  const saveProfile = () => {
    const image = fileRef.current.files[0];
    // const image = imageUrl;
    // console.log("이미지", image);

    const formData = new FormData();
    formData.append("image", image);

    const editProfile = {
      username: user.username,
      password: user.password,
      email: user.email,
      nickname: nickname,
      image: formData,
      // imageUrl: imageUrl,
      mbti: mbti,
      gender: "",
      location: "",
      menu: "",
      company: job,
      introduction: introduction,
      // mannerStatus: "",
    };

    dispatch(profileActions.updateProfileAPI(editProfile));
  };

  return (
    <>
      {user && (
        <React.Fragment>
          <ProfileBox>
            <h1>프로필 수정페이지 입니다.</h1>
            <div>
              <img
                src={imageUrl ? imageUrl : "/img/profile.png"}
                style={{ width: "100px", height: "100px" }}
              ></img>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                onChange={changeImage}
                style={{ display: "none" }}
              ></input>
              <button
                onClick={() => {
                  imgUploadBtnClick();
                }}
              >
                이미지 업로드
              </button>
            </div>
            <div>
              <div>1. 이름 : {user.username}</div>
              <div>2. 이메일 : {user.email}</div>
              <div>
                3. 닉네임 :
                <input
                  type="text"
                  onChange={changeNickname}
                  defaultValue={user.nickname}
                ></input>
                <button>중복확인</button>
              </div>
              <div>
                4. 직업/회사명? :{" "}
                <input type="text" onChange={changeJob}></input>
              </div>
              <div>
                5. MBTI : <input type="text" onChange={changeMbti}></input>
              </div>
              <div>
                6. 자기소개 :{" "}
                <input type="text" onChange={changeIntroduction}></input>
              </div>
            </div>
            <button onClick={saveProfile}>저장하기</button>
          </ProfileBox>
        </React.Fragment>
      )}
    </>
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

export default ProfileUpdate;
