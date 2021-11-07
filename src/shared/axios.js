/* eslint-disable */

import axios from "axios";
import { previousThursday } from "date-fns/fp";

const instance = axios.create({
  baseURL: "http://3.35.54.135",
});

export const apis = {
  //회원가입
  registerUser: user =>
    instance.post(`/signup`, user, {
      headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json",
      },
    }),

  //로그인
  logIn: user =>
    instance.post(`/login`, user, {
      headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json",
      },
    }),

  kakaologin: user =>
    instance.post(`/kakaologin`, user, {
      headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json",
      },
    }),

  // 이메일 중복확인
  checkEmail: email =>
    instance.post(
      "/checkemail",
      { email },
      {
        headers: {
          "content-type": "application/json;charset=UTF-8",
          accept: "application/json",
        },
      }
    ),

  // 닉네임 중복확인
  checkNickname: nickname =>
    instance.post(
      "/checknickname",
      { nickname },
      {
        headers: {
          "content-type": "application/json;charset=UTF-8",
          accept: "application/json",
        },
      }
    ),

  //회원정보 요청
  getUser: () =>
    instance.get(`/login`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),

  //점심 약속 상세보기 정보요청
  getOneLunch: lunchId =>
    instance.get(`/lunchpost/${lunchId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),

  //점심 약속 등록

  createLunch: lunch =>
    instance.post(`/lunchpost`, lunch, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),

  //점심 약속 수정
  updateLunch: _lunch =>
    instance.patch(`/lunchpost`, _lunch, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),

  //점심 약속 삭제
  deleteLunch: post =>
    instance.delete(`/lunchregister/${lunchId}`, post, {
      header: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),

  updateProfile: (profile, image) =>
    instance.patch(
      "/myprofile",
      { profile, image },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    ),

  // 댓글 조회
  getComment: lunchId =>
    instance.get(`/comment/${lunchId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),

  //댓글 추가
  addComment: comment =>
    instance.post(`/comment/${comment.lunchId}`, comment, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),

  // 댓글 삭제
  deleteComment: commentId =>
    instance.delete(`/comment/${commentId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),

  // 내 프로필 조회
  getProfile: userid =>
    instance.get(`/myprofile/${userid}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),

  getProfileLunch: userid =>
    instance.get(`/applicant/user/${userid}`, {
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

  //리뷰 등록
  addReview: review =>
    instance.post("/spoon", review, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),

  //리뷰 조회
  getReview: userid =>
    instance.get(`/spoon/${userid}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),
};
