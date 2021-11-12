/* eslint-disable */

import React, { useState, useEffect, useRef, useMemo } from "react";
import styled from "styled-components";
import { Image } from "../elements";

import { useSelector } from "react-redux";
import { apis } from "../shared/axios";
import MapContainer from "../components/MapContainer";
import { history } from "../redux/configureStore";

const ProfileUpdate = props => {
  const [userInfo, setUserInfo] = useState(null);

  const [preview, setPreview] = useState(null);
  const [uploadImage, setUploadImage] = useState(null);
  const [placeInput, setPlaceInput] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const userId = props.match.params.id;

  const onChange = e => {
    const {
      target: { name, value },
    } = e;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const setLocation = place => {
    setUserInfo({
      ...userInfo,
      locations: place,
    });
  };

  const profileImage = useRef();

  const selectFile = () => {
    const reader = new FileReader();
    const file = profileImage.current.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploadImage(formData);

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreview(reader.result);
    };
  };

  const getProfileData = async () => {
    try {
      const data = await apis.getProfile(userId);
      const user = data.data.data.user;
      setUserInfo(user);
      setUploadImage(user.image);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(userInfo);

  const onSearchKeywordChange = e => {
    setPlaceInput(e.target.value);
  };

  const searchPlace = () => {
    setSearchKeyword(placeInput);
  };

  const onUpdateProfile = async () => {
    console.log(userInfo);

    try {
      console.log(userInfo, "요청직전");
      console.log(uploadImage);
      const data = await apis.updateProfile(userInfo, uploadImage);
      console.log(data);
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
          <MenuTitleWrapper>
            <MenuTitle>프로필 수정</MenuTitle>
          </MenuTitleWrapper>
          <ImageWrapper>
            <Image
              shape="circle"
              size="100"
              src={preview ? preview : userInfo.image}
            />
            <input type="file" onChange={selectFile} ref={profileImage} />
          </ImageWrapper>
          <InputWrapper>
            <Text>닉네임</Text>
            <Input
              name="nickname"
              onChange={onChange}
              value={userInfo.nickname}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Text>소개</Text>
            <InputTextArea
              name="introduction"
              onChange={onChange}
              value={userInfo.introduction}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Text>직무</Text>
            <Input
              name="job"
              onChange={onChange}
              value={userInfo.job}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Text>MBTI</Text>
            <Input
              name="mbti"
              onChange={onChange}
              value={userInfo.mbti}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Text>선호메뉴</Text>
            <Input
              name="likemenu"
              onChange={onChange}
              value={userInfo.likemenu}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Text>비선호메뉴</Text>
            <Input
              name="dislikemenu"
              onChange={onChange}
              value={userInfo.dislikemenu}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Text>장소</Text>
            <Input
              onChange={onSearchKeywordChange}
              style={{ marginRight: "1.6rem", minWidth: "200px" }}
              required
            />
            <SearchButton onClick={searchPlace}>검색</SearchButton>
          </InputWrapper>
          {userInfo?.locations && (
            <InputWrapper>
              <FakeDiv />
              <SelectedPlace
                style={{
                  lineHeight: "1.5rem",
                  height: "8rem",
                  padding: "1rem",
                }}
              >
                <Text
                  style={{
                    fontSize: "1.6rem",
                    lineHeight: "1.3",
                    fontWeight: "600",
                    color: "#909090",
                  }}
                >
                  장소명:{" "}
                  {userInfo?.locations.place_name
                    ? userInfo?.locations.place_name
                    : ""}
                </Text>
                <Text
                  style={{
                    fontSize: "1.6rem",
                    lineHeight: "1.3",
                    fontWeight: "600",
                    color: "#909090",
                  }}
                >
                  주소:{" "}
                  {userInfo?.locations.road_address_name
                    ? userInfo?.locations.road_address_name
                    : ""}
                </Text>
                <a
                  href={
                    userInfo?.locations.place_url
                      ? userInfo?.locations.place_url
                      : ""
                  }
                  target="_blank"
                  style={{
                    cursor: "pointer",
                    fontSize: "1.6rem",
                    color: "blue",
                    lineHeight: "1.3",
                    fontWeight: "600",
                  }}
                >
                  카카오 지도 링크
                </a>
              </SelectedPlace>
            </InputWrapper>
          )}
          <InputWrapper>
            <FakeDiv />
            <MapContainer
              setLocation={setLocation}
              searchKeyword={searchKeyword}
            />
          </InputWrapper>
          <Button onClick={onUpdateProfile}>수정하기</Button>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 5rem auto;
`;

const MenuTitleWrapper = styled.div`
  margin: 20px;
`;
const MenuTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
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
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.6rem;
  max-width: 500px;
  min-width: 350px;
`;

const Text = styled.p`
  font-size: 1.6rem;
  color: white;
  min-width: 8rem;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  min-width: 270px;
  color: black;
  font-size: 1.6rem;
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid #dfdfdf;
  background-color: #fff;
`;

const Select = styled.select`
  width: 100%;
  height: 48px;
  min-width: 270px;
  color: black;
  font-size: 1.6rem;
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid #dfdfdf;
  background-color: #fff;
`;

const FakeDiv = styled.div`
  min-width: 8rem;
`;

const InputTextArea = styled.textarea`
  width: 100%;
  height: 8em;
  min-width: 270px;
  color: black;
  font-size: 1.6rem;
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid #dfdfdf;
  background-color: #fff;
  line-height: 2.5rem;
`;

const SearchButton = styled.button`
  width: 7rem;
  min-width: 5rem;
  height: 48px;
  color: white;
  font-size: 1.6rem;
  background-color: #ff9841;
  border-radius: 6px;
  border: none;
`;

const SelectedPlace = styled.div`
  width: 100%;
  height: 48px;
  border-radius: 6px;
  background-color: #fff;
`;

const Button = styled.button`
  min-width: 350px;
  max-width: 500px;
  width: 50%;
  height: 48px;
  font-family: NotoSansKR;
  font-weight: bold;
  font-size: 1.6rem;
  border: 1px solid #ff9841;
  border-radius: 6px;
  background-color: white;
  color: #ff9841;
  margin-bottom: 1em;

  &:hover {
    background-color: #ff9841;
    color: white;
  }
`;

export default ProfileUpdate;
