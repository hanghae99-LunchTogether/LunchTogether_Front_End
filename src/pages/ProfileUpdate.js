/* eslint-disable */

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Image } from "../elements";

import { useSelector, useDispatch } from "react-redux";
import { profileActions } from "../redux/modules/profile";
import { apis } from "../shared/axios";
import MapContainer from "../components/MapContainer";
import { history } from "../redux/configureStore";

const ProfileUpdate = props => {
  const [userInfo, setUserInfo] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploadImage, setUploadImage] = useState(null);
  const [placeInput, setPlaceInput] = useState("");
  const [places, setPlaces] = useState([]);

  const [place, setPlace] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");
  const userId = props.match.params.id;
  const dispatch = useDispatch();

  const onChange = e => {
    const {
      target: { name, value },
    } = e;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const profileImage = useRef();

  const selectFile = () => {
    const reader = new FileReader();
    const file = profileImage.current.files[0];

    const formData = new FormData();
    formData.append("image", file);
    console.log(formData);

    setUploadImage(formData);

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setPreview(reader.result);
    };
  };

  const getProfileData = async () => {
    try {
      const data = await apis.getProfile(userId);
      const user = data.data.data.user[0];
      setUserInfo(user);
    } catch (error) {
      console.log(error);
    }
  };

  const onSearchKeywordChange = e => {
    setPlaceInput(e.target.value);
  };

  const searchPlace = () => {
    setSearchKeyword(placeInput);
  };

  const onUpdateProfile = async () => {
    console.log(userInfo, "업데이트직전");
    try {
      const data = await apis.updateProfile(userInfo, uploadImage);
      history.push(`/profile/${userId}`);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <>
      {userInfo && (
        <Wrapper>
          <MenuTitle>프로필 수정</MenuTitle>
          <ImageWrapper>
            <Image
              shape="circle"
              size="200"
              src={
                preview ? preview : userInfo.image
                // : userInfo.imageUrl
              }
            />
            <InputWrapper>
              <input
                ref={profileImage}
                onChange={selectFile}
                type="file"
                accept="image/jpeg/png"
              />
            </InputWrapper>
          </ImageWrapper>
          <InputWrapper>
            <Text> 닉네임</Text>
            <Input
              name="nickname"
              onChange={onChange}
              value={userInfo.nickname}
            ></Input>
          </InputWrapper>
          <TextAreaWrapper>
            <Text> Intro</Text>
            <TextArea
              style={{}}
              name="introduction"
              onChange={onChange}
              value={userInfo.introduction}
            ></TextArea>
          </TextAreaWrapper>
          <InputWrapper>
            <Text> MBTI</Text>
            <Input
              name="mbti"
              onChange={onChange}
              value={userInfo.mbti}
            ></Input>
          </InputWrapper>
          <InputWrapper>
            <Text> 직무</Text>
            <Input
              name="company"
              onChange={onChange}
              value={userInfo.company}
            ></Input>
          </InputWrapper>
          <InputWrapper>
            <Text> 메뉴</Text>
            <Input
              name="menu"
              onChange={onChange}
              value={userInfo.menu}
            ></Input>
          </InputWrapper>
          <InputWrapper>
            <Text> 약속 장소</Text>
            <Input
              name="location"
              onChange={onChange}
              value={
                userInfo.location
                  ? userInfo.location.place_name
                  : "장소를 선택해주세요"
              }
            ></Input>
          </InputWrapper>

          <InputWrapper>
            <Text> </Text>
            <PlaceWrapper>
              <Text> 장소변경</Text>
              <Input
                name="location"
                onChange={onSearchKeywordChange}
                value={placeInput}
                style={{ width: "70%", margin: "0 5%" }}
              ></Input>
              <SearchBtn onClick={searchPlace}>검색</SearchBtn>
            </PlaceWrapper>
          </InputWrapper>

          <MapContainer
            searchKeyword={searchKeyword}
            setPlace={setPlace}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
          />
          <UpdateBtn onClick={onUpdateProfile}>수정하기</UpdateBtn>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

const MenuTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  line-height: 5;
  margin-top: 5rem;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 44px;
  margin-bottom: 1rem;
`;

const PlaceWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  padding: 15px 10px;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  color: black;
`;

const Text = styled.p`
  display: block;
  white-space: nowrap;
  color: #333333;
  font-size: 1rem;
  width: 12%;
`;

const Input = styled.input`
  width: 50%;
  height: 3rem;
  padding: 15px 10px;
  border: 1px solid #bebebe;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  color: black;
`;

const TextAreaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  height: 110px;
`;

const TextArea = styled.textarea`
  width: 50%;
  height: 6rem;
  padding: 15px 10px;
  border: 1px solid #bebebe;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  color: black;
`;
const SearchBtn = styled.button`
  background-color: black;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  width: 30%;
  height: 3rem;
  border-radius: 10px;
`;

const UpdateBtn = styled.button`
  width: 60%;
  background-color: black;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  height: 3rem;
  border-radius: 10px;
  margin-top: 2rem;
  margin-bottom: 20rem;
`;

export default ProfileUpdate;
