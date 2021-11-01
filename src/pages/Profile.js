import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { profileActions } from "../redux/modules/profile";
import { Image } from "../elements";
import { apis } from "../shared/axios";

const Profile = props => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const userId = props.match.params.id;
  console.log(userId);

  const getUser = async () => {
    const user = await apis.getProfile(userId);
    console.log(user);
  };

  useEffect(() => {
    console.log(userId);
    getUser();
  }, []);

  return (
    <>
      <Wrapper>
        <ProfileInfoWarpper>
          <Image
            shape="circle"
            size="200"
            src="https://cdn.imweb.me/thumbnail/20210130/a7d09236f9041.jpg"
          />
          <p>타이틀</p>
        </ProfileInfoWarpper>
        <ProfileHistoryWrapper> 점심약속 영역</ProfileHistoryWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1024px;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProfileInfoWarpper = styled.div`
  width: 35%;
  margin-right: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 2px 3px 5px 0px #ebecf0;
  height: 70vh;
  padding-top: 50px;

  @media only screen and (max-width: 768px) {
    width: 70%;
    margin-right: 0%;
    margin-bottom: 5%;
  }
`;

const ProfileHistoryWrapper = styled.div`
  width: 65%;
  height: 500px;
  height: 70vh;
  border-radius: 10px;
  box-shadow: 2px 3px 5px 0px #ebecf0;
`;

export default Profile;
