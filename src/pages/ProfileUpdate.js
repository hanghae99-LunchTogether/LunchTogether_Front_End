/* eslint-disable */

import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { profileActions } from "../redux/modules/profile";
import { useDispatch, useSelector } from "react-redux";

//본인일 경우에만 페이지 접근가능하게 하기

const ProfileUpdate = (props) => {
  const user = useSelector((state) => state.user.user);
  // console.log("네", user);

  // useEffect(() => {
  //   dispatch(commentAction.getProfileAPI(userId));
  // }, []);

  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState(null);
  const fileRef = useRef();

  const changeImage = (e) => {
    const reader = new FileReader();
    const file = fileRef.current.files[0];
    console.log(file);

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      console.log(reader.result);
      setImageUrl(reader.result);
    };
  };

  const imgUploadBtnClick = (e) => {
    fileRef.current.click();
  };

  // const username = useSelector((state) => state.user.user.username);
  // const email = useSelector((state) => state.user.user.email);
  // const nickname = useSelector((state) => state.user.user.nickname);
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

    const formData = new FormData();
    formData.append("image", image);

    const profileInfo = {
      username: "string",
      password: "string",
      email: "string",
      nickname: nickname,
      image: formData,
      mbti: mbti,
      gender: "String",
      location: "String",
      menu: "String",
      company: job,
      introduction: introduction,
    };

    dispatch(profileActions.updateProfileAPI(profileInfo));
  };

  console.log(
    "고객정보",
    useSelector((state) => state)
  );

  return (
    <>
      {user && (
        <React.Fragment>
          <ProfileBox>
            <h1>프로필 수정페이지 입니다.</h1>
            <div>
              <img
                src={imageUrl ? imageUrl : "img/profile.png"}
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
              <div>1. 이름 : </div>
              <div>2. 이메일 : </div>
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
              <div>7. 메뉴정보(선호?혹은못먹는) 해시태그로 </div>
              <div>8. 내위치</div>
              <div>9. 성별</div>
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
