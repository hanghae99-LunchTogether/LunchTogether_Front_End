/* eslint-disable */

import React from "react";
import styled from "styled-components";
import { Image } from "../elements";
import { history } from "../redux/configureStore";
import { apis } from "../shared/axios";

const ProfileLunch = props => {
  const { lunchs } = props;
  const appliedLunch = lunchs.applied;
  const ownedLunch = lunchs.owned;

  const approveMember = async (lunchid, id, bool, comment) => {
    const approval = { userid: id, statusdesc: bool, comment: "꺼지셈" };
    const data = await apis.approveMember(lunchid, approval);
  };

  return (
    <>
      <Wrapper>
        {ownedLunch && (
          <>
            <LunchListWrapper>
              <ColumnWrapper>
                <Text bold size="2" style={{ marginBottom: "2rem" }}>
                  {" "}
                  만든 점심약속{" "}
                </Text>
                {ownedLunch.map((l, idx) => {
                  console.log(l);
                  return (
                    <LunchWrapper>
                      <Text
                        size="2"
                        bold
                        color="black"
                        style={{ marginBottom: "1rem" }}
                        onClick={() => history.push(`/lunchpost/${l.lunchid}`)}
                      >
                        {l.title}
                      </Text>
                      <UserWrapper>
                        <Image shape="circle" size="40" src={l.host.image} />
                        <Text style={{ marginLeft: "1rem" }} bold>
                          {l.host.nickname} {l.host.job}
                        </Text>
                      </UserWrapper>
                      <Text>{l.time.split(" ")[0]}</Text>
                      <Text>{l.locations.place_name}</Text>
                      <Text>{l.membernum}</Text>
                      {l.applicants.map((u, idx) => {
                        return (
                          <UserWrapper
                            onClick={() => {}}
                            style={{ justifyContent: "space-between" }}
                          >
                            <GeneralWrapper
                              onClick={() => {
                                history.push(`/profile/${u.user.userid}`);
                              }}
                            >
                              <Image
                                shape="circle"
                                size="40"
                                src={u.user.image}
                              />
                              <UserInfoWrapper style={{ marginLeft: "1rem" }}>
                                <Text bold>{u.user.nickname}</Text>
                                <Text>{u.user.job}</Text>
                              </UserInfoWrapper>
                            </GeneralWrapper>
                            <GeneralWrapper style={{ marginLeft: "10rem" }}>
                              <Button
                                onClick={() =>
                                  approveMember(l.lunchid, u.user.userid, true)
                                }
                              >
                                승인
                              </Button>
                              <Button
                                style={{ backgroundColor: "red" }}
                                onClick={() =>
                                  approveMember(l.lunchid, u.user.userid, false)
                                }
                              >
                                거절
                              </Button>
                            </GeneralWrapper>
                          </UserWrapper>
                        );
                      })}
                    </LunchWrapper>
                  );
                })}
              </ColumnWrapper>
            </LunchListWrapper>
          </>
        )}

        <Text bold size="2" style={{ marginBottom: "2rem" }}>
          {" "}
          신청한 점심약속{" "}
        </Text>
        <LunchListWrapper>
          {appliedLunch.map((lunch, idx) => {
            const l = lunch.lunch;
            return (
              <LunchWrapper
                onClick={() => history.push(`/lunchpost/${l.lunchid}`)}
              >
                <Text
                  size="2"
                  bold
                  color="black"
                  style={{ marginBottom: "1rem" }}
                >
                  {l.title}
                </Text>
                <UserWrapper>
                  <Image shape="circle" size="40" src={l.host.image} />
                  <Text style={{ marginLeft: "1rem" }} bold>
                    {l.host.nickname} {l.host.job}
                  </Text>
                </UserWrapper>
                <Text>{l.time.split(" ")[0]}</Text>
                <Text>{l.locations.place_name}</Text>
                <Text>{l.membernum}</Text>
                <UserWrapper>
                  {l.applicants.map((u, idx) => {
                    return (
                      <UserWrapper
                        onClick={() => {
                          console.log(u.user.userid);
                          history.push(`/profile/${u.user.userid}`);
                        }}
                      >
                        <Image shape="circle" size="40" src={u.user.image} />
                        <UserInfoWrapper style={{ marginLeft: "1rem" }}>
                          <Text bold>{u.user.nickname}</Text>
                          <Text>{u.user.job}</Text>
                        </UserInfoWrapper>
                      </UserWrapper>
                    );
                  })}
                </UserWrapper>
              </LunchWrapper>
            );
          })}
        </LunchListWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
`;

const LunchListWrapper = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 5rem;
  border: none;
  min-width: 380px;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    margin-right: 0;
    flex-direction: column;
  }
`;

const LunchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 380px;
  padding: 2rem;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  margin-right: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    margin-right: 0;
  }
`;

const Text = styled.p`
  max-width: 380px;
  font-size: ${props => (props.size ? props.size : "1.6")}rem;
  line-height: 3rem;
  ${props => (props.color ? `font-color: ${props.color}` : "font-color: gray")};
  ${props => props.bold && `font-weight: bold`};
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  cursor: pointer;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const GeneralWrapper = styled.div`
  display: flex;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 5rem;
  line-height: 5rem;
  border: none;
  margin-right: 1rem;
  border-radius: 5px;
  font-weight: bold;
`;

export default ProfileLunch;
