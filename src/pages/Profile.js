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
  padding: 5rem 0 5rem 0;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export default Profile;
