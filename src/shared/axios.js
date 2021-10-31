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

  //점심 약속 등록
  createLunch: (post) =>
    instance.post(`/lunchpost`, post, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),

  //점심 약속 수정
  updateaLunch: (post) =>
    instance.patch(`/lunchpost${post}`, post, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),

  //프로필 조회
  getProfile: () =>
    instance.get(`/myProfile`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),

  //프로필 수정
  updateProfile: (profile) =>
    instance.patch(`/myProfile`, profile, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),

  addReview: (review) =>
    instance.post("/review", review, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),

  getReview: (lunchId) =>
    instance.get("/review", lunchId, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),

  deleteReview: (reviewId) =>
    instance.delete("/review", reviewId, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),
};
