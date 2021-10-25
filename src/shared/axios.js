import axios from "axios";

const instance = axios.create({
  baseURL: "http://",
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
  login: user =>
    instance.post(`/login`, user, {
      headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json",
      },
    }),

  //회원정보 요청
  login: () =>
    instance.post(`/login`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),
};
