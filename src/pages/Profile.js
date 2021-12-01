/* eslint-disable */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { apis } from "../shared/axios";
import { history } from "../redux/configureStore";
import ProfileLeft from "../components/ProfileLeft";
import ProfileRight from "../components/ProflieRight";
import { useSelector } from "react-redux";

const Profile = (props) => {
  const [user, setUser] = useState(null);
  const userId = props.match.params.id;

  const getProfile = async () => {
    try {
      const data = await apis.getProfile(userId);
      setUser(data.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getProfile();
  }, [userId]);

  return (
    <>
      {user && (
        <Wrapper>
          <ProfileLeft user={user} />
          <ProfileRight {...user} />
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  max-width: 1200px;
  height: 100%;
  justify-content: center;
  padding: 5rem 0 5rem 0;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 45px;
  }
`;

export default Profile;
