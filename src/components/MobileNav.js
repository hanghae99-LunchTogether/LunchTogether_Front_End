import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { useSelector } from "react-redux";
import { AiOutlineHome } from "react-icons/ai";
import { IoPeopleOutline } from "react-icons/io5";
import { VscRepoForked } from "react-icons/vsc";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiProfileLine } from "react-icons/ri";

const MobaileNav = (props) => {
  const user = useSelector((state) => state.user.user);

  return (
    <>
      <Wrapper>
        <MenuWrapper onClick={() => history.push("/")}>
          <MenuIcon>
            <AiOutlineHome color="white" />
          </MenuIcon>
          <MenuText>홈</MenuText>
        </MenuWrapper>
        <MenuWrapper onClick={() => history.push("/memberlist")}>
          <MenuIcon>
            <IoPeopleOutline color="white" />
          </MenuIcon>
          <MenuText>멤버</MenuText>
        </MenuWrapper>
        <MenuWrapper onClick={() => history.push("/lunchregister")}>
          <MenuIcon>
            <VscRepoForked color="white" />
          </MenuIcon>
          <MenuText style={{ letterSpacing: "-1px" }}>점약 만들기</MenuText>
        </MenuWrapper>
        <MenuWrapper onClick={() => history.push("/notification")}>
          <MenuIcon>
            <IoMdNotificationsOutline color="white" />
          </MenuIcon>
          <MenuText>알림</MenuText>
        </MenuWrapper>
        <MenuWrapper onClick={() => history.push(`/profile/${user.userid}`)}>
          <MenuIcon>
            <RiProfileLine color="white" />
          </MenuIcon>
          <MenuText>프로필</MenuText>
        </MenuWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: none;

  @media only screen and (max-width: 768px) {
    display: flex;
    position: fixed;
    width: 100%;
    bottom: 0;
    justify-content: space-around;
    align-items: center;
    height: 10rem;
    background-color: #ff9841;
    z-index: 10;
    padding-bottom: 1rem;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50px;
  margin: 5px;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
`;

const MenuIcon = styled.p`
  padding: 1rem;
  margin: 0 auto;
  font-size: 3.5rem;
  font-weight: 900;
`;

const MenuText = styled.p`
  margin: 0 auto;
  font-size: 1.5rem;
  font-weight: 900;
  color: white;
`;

export default MobaileNav;
