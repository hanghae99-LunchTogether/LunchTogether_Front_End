/* eslint-disable */

import React, { useState } from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { apis } from "../shared/axios";
import { useSelector } from "react-redux";
import ProfileImg from "../assets/profile.png";

const DetailMember = (props) => {
  const user = useSelector((state) => state.user);
  const { applicant, lunch } = props;
  const [active, setActive] = useState(user?.confirmed);
  console.log(lunch);

  const approveUser = async (userid, bool) => {
    setActive(!active);
    console.log(bool);
    const approval = {
      userid: userid,
      confirmed: bool,
      comment: "꺼지셈",
    };
    try {
      const data = await apis.approveMember(lunch?.lunchid, approval);
      window.location.replace(`/lunchpost/${lunch?.lunchid}`);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <ELWrapper
        flex
        style={{
          flexDirection: "column",
          alignItems: "center",
          margin: "0 4rem 1rem 0",
        }}
      >
        <CircleImage
          size="10"
          style={{ marginBottom: "1rem" }}
          src={applicant.user.image ? applicant.user.image : ProfileImg}
          onClick={() => history.push(`/profile/${applicant.userid}`)}
        />
        <Text
          color="black"
          size="1.6"
          weight="600"
          lineheight="3"
          style={{ textAlign: "center" }}
        >
          {applicant.user.nickname}
        </Text>
        <Text color="black" size="1.6" style={{ textAlign: "center" }}>
          {applicant.user.job ? applicant.user.job : <div> &nbsp;</div>}
        </Text>
        {user?.user?.userid === lunch?.host.userid ? (
          applicant.confirmed ? (
            <ApproveBtn style={{ backgroundColor: "green" }} disabled>
              승인완료
            </ApproveBtn>
          ) : applicant.confirmed === null ? (
            <div style={{ display: "flex" }}>
              <ApproveBtn
                style={{ marginRight: "1rem" }}
                onClick={() => approveUser(applicant.userid, true)}
              >
                승인
              </ApproveBtn>
              <ApproveBtn
                style={{ backgroundColor: "red" }}
                onClick={() => approveUser(applicant.userid, false)}
              >
                거절
              </ApproveBtn>
            </div>
          ) : applicant.confirmed === false ? (
            <ApproveBtn disabled style={{ backgroundColor: "gray" }}>
              거절됨
            </ApproveBtn>
          ) : (
            <ApproveBtn
              style={{ backgroundColor: "red" }}
              onClick={() => approveUser(applicant.userid, false)}
            ></ApproveBtn>
          )
        ) : applicant.confirmed ? (
          <ApproveBtn style={{ backgroundColor: "green" }} disabled>
            승인완료
          </ApproveBtn>
        ) : applicant.confirmed !== false ? (
          <ApproveBtn disabled style={{ backgroundColor: "gray" }}>
            승인대기중
          </ApproveBtn>
        ) : (
          <ApproveBtn disabled style={{ backgroundColor: "gray" }}>
            거절됨
          </ApproveBtn>
        )}
      </ELWrapper>
    </>
  );
};

const ELWrapper = styled.div`
  height: 100%;
  ${(props) => props.center && `justify-content: center`};
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  background-color: ${(props) => (props.bg ? props.bg : "white")};
  ${(props) => (props.flex ? `display: flex; align-items: center;` : "")};

  ${(props) =>
    props.shadow ? `box-shadow: 5px 5px 5px 2px rgba(55, 50, 40, 0.16)` : ""};
  margin: 1rem 0 0.5rem 0;
`;

const Text = styled.p`
  width: 100%;
  font-size: ${(props) => (props.size ? props.size : "1.6")}rem;
  font-weight: ${(props) => (props.weight ? props.weight : "400")};
  color: ${(props) => (props.color ? props.color : "#909090")};
  overflow: hidden;
  text-overflow: ellipsis;
  /* white-space: nowrap; */
  letter-spacing: -1.1px;
  width: ${(props) => props.width && props.width}rem;
  line-height: ${(props) => props.lineheight && props.lineheight}rem;
`;

const CircleImage = styled.div`
  width: ${(props) => props.size}rem;
  height: ${(props) => props.size}rem;
  border-radius: ${(props) => props.size}rem;
  background-image: url("${(props) => props.src}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  cursor: pointer;
`;

const ApproveBtn = styled.button`
  width: 80%;
  height: 4rem;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 5px;
  border: none;
  background-color: ${(props) => (props.bg ? props.bg : "#ff9841")};
  color: white;
  margin-top: 1rem;
`;

export default DetailMember;
