import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Image } from "../elements";

import { useSelector, useDispatch } from "react-redux";
import { profileActions } from "../redux/modules/profile";
import { apis } from "../shared/axios";

const ProfileUpdate = props => {
  const [userInfo, setUserInfo] = useState(null);
  console.log(userInfo);
  const [image, setImage] = useState(null);
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

  const selectFile = e => {
    const reader = new FileReader();
    const file = profileImage.current.files[0];
    console.log(file);
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      // dispatch(profileActions.setPreview(reader.result));
      setImage(reader.result);
    };
  };

  const getProfileData = async () => {
    try {
      const data = await apis.getProfile(userId);
      console.log(data);
      const user = data.data.data[0];
      setUserInfo(user);
    } catch (error) {
      console.log(error);
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
              value={image}
              src={
                image
                  ? image
                  : "https://cdn.imweb.me/thumbnail/20210130/a7d09236f9041.jpg"
              }
            />
            <InputWrapper>
              <input
                ref={profileImage}
                onChange={selectFile}
                type="file"
                accept="image/jpeg"
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
          <InputWrapper>
            <Text> MBTI</Text>
            <Input
              name="mbti"
              onChange={onChange}
              value={userInfo.mbti}
            ></Input>
          </InputWrapper>
          <TextAreaWrapper>
            <Text> Intro</Text>
            <TextArea
              style={{}}
              name="intro"
              onChange={onChange}
              value={userInfo.mbti}
            ></TextArea>
          </TextAreaWrapper>
          <InputWrapper>
            <Text> 직무</Text>
            <Input
              name="mbti"
              onChange={onChange}
              value={userInfo.mbti}
            ></Input>
          </InputWrapper>
          <InputWrapper>
            <Text> 직무</Text>
            <Input
              name="mbti"
              onChange={onChange}
              value={userInfo.mbti}
            ></Input>
          </InputWrapper>
          <UpdateBtn>수정하기</UpdateBtn>
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
  margin-bottom: 2rem;
`;

const Text = styled.p`
  display: block;
  white-space: nowrap;
  color: #333333;
  font-size: 1rem;
  width: 5%;
`;

const Input = styled.input`
  width: 30%;
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
  height: 44px;
  margin-bottom: 2rem;
  padding: 2rem 0;
`;

const TextArea = styled.textarea`
  width: 30%;
  height: 6rem;
  padding: 15px 10px;
  border: 1px solid #bebebe;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  color: black;
`;

const UpdateBtn = styled.button`
  width: 35%;
  background-color: black;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  height: 3rem;
  border-radius: 10px;
  margin-top: 2rem;
`;

export default ProfileUpdate;
