/* eslint-disable */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Image } from "../elements";
import { MdOutlineLocationOn } from "react-icons/md";
import { apis } from "../shared/axios";
import { history } from "../redux/configureStore";
import ProfileHistorySection from "../components/ProfileHistorySection";
import ProfileLeft from "../components/ProfileLeft";
import ProfileRight from "../components/ProflieRight";

const Profile = props => {
  const [user, setUser] = useState(null);

  const userId = props.match.params.id;

  const getProfile = async () => {
    const data = await apis.getProfile(userId);
    console.log(data);
    setUser(data.data.data.user);
  };

  useEffect(() => {
    getProfile();
  }, [userId]);

  return (
    <>
      {user && (
        <Wrapper>
          <ProfileLeft {...user} />
          <ProfileRight {...user} />
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  /* width: 100%; */
  max-width: 1920px;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const Button = styled.button`
  min-width: 330px;
  max-width: 500px;
  width: 50%;
  height: 4rem;
  font-weight: bold;
  font-size: 1.4rem;
  border-radius: 6px;
  border: none;
  background-color: #ff9841;
  color: white;
  margin: 1rem;

  &:hover {
    background-color: #ff9841;
    color: white;
  }
`;

export default Profile;
