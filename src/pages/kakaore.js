import React from "react";
import axios from "axios";
// 스피너 불러오기

const KakaoLoginRedirection = (props) => {

    let code = new URL(window.location.href).searchParams.get("code");
    console.log("인가 코드", code);


    React.useEffect(async () => {
        axios({
            method: "GET",
            url: `http://localhost/kakao/callback?code=${code}`,
          })
            .then((res) => {
                const token = res.data.token;
                localStorage.setItem("token", token);
                window.location.href = "/";
            })
            .catch((error) => {
              console.log(error);
              window.alert("실패");
              window.location.href = "/";
            });
    },[]);

    return (
        // 스피너 컴포넌트 삽입`
        <h1>Kakao Login Redirected Page</h1>
    );
};

export default KakaoLoginRedirection;