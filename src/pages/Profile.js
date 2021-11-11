/* eslint-disable */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { apis } from "../shared/axios";
import { history } from "../redux/configureStore";
import ProfileLeft from "../components/ProfileLeft";
import ProfileRight from "../components/ProflieRight";

const Profile = (props) => {
  const [user, setUser] = useState(null);
  console.log(user);

  const userId = props.match.params.id;

  const getProfile = async () => {
    const data = await apis.getProfile(userId);
    setUser(data.data.data.user);
  };

  useEffect(() => {
    getProfile();
  }, []);

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
    align-items: center;
  }
`;

export default Profile;
