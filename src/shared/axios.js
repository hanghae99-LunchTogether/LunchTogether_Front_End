/* eslint-disable */

import axios from "axios";

const instance = axios.create({
  baseURL: "http://3.35.54.135",
});

export const apis = {
  //회원가입
  registerUser: (user) =>
    instance.post(`/signup`, user, {
      headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json",
      },
    }),

  //로그인
  logIn: (user) =>
    instance.post(`/login`, user, {
      headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json",
      },
    }),

  //회원정보 요청
  getUser: () =>
    instance.get(`/login`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),

  //점심 약속 상세보기 정보요청
  // getLunch: () =>
  //   instance.get(`/lunchDetail`)

  //점심 약속 등록

  createLunch: (post) =>
    instance.post(`/lunchregister`, post, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),

  //점심 약속 수정
  updateLunch: (_lunch) =>
    instance.patch(`/lunchregister/${_lunch.lunchid}`, _lunch, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),

  //점심 약속 삭제
  deleteLunch: (lunchId) =>
    instance.delete(`/lunchregister/${lunchId}`, lunchId, {
      header: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),

  //점심 약속 삭제
  deleteLunch: (lunchId) =>
    instance.delete(`/lunchregister/${lunchId}`, lunchId, {
      header: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),

  //점심 약속 삭제
  deleteLunch: (lunchId) =>
    instance.delete(`/lunchpost/${lunchId}`, lunchId, {
      header: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),

  updateProfile: (profile) =>
    instance.patch("/myProfile", profile, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),

  // 댓글 조회
  getComment: (lunchId) =>
    instance.get("/comment", lunchId, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),

  //댓글 추가
  addComment: (comment) =>
    instance.post("/comment", comment, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),

  // 댓글 삭제
  // deleteComment: (commnetId) =>
  //   instance.delete("/comment", commentId, {
  //     headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  //   }),

  // 내 프로필 조회
  getMyProfile: () =>
    instance.get("/myProfile", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),

  // 내 프로필 조회
  editMyProfile: () =>
    instance.get("/myProfile", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),

  // 점약 전체 리스트 조회
  getLunchListMain: () =>
    instance.get("/lunchpost", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),
};
