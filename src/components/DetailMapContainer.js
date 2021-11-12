import React, { useEffect } from "react";
import styled from "styled-components";
const { kakao } = window;

const DetailMapContainer = props => {
  const location = props.location;
  console.log(location);
  useEffect(() => {
    var mapContainer = document.getElementById("myMap"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(location?.y, location?.x), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 마커가 표시될 위치입니다
    var markerPosition = new kakao.maps.LatLng(location?.y, location?.x);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    var iwContent = `<div style="padding:15px; text-align: center; font-size: 1.6rem; font-weight: 700">${location?.place_name} <br><br><a href=${location?.place_url} style="color:blue;"target="_blank">카카오맵 보기</a></div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      iwPosition = new kakao.maps.LatLng(location?.y, location?.x); //인포윈도우 표시 위치입니다

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
      position: iwPosition,
      content: iwContent,
    });

    // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    infowindow.open(map, marker);
  });
  return (
    <>
      <MapWrapper id="myMap"></MapWrapper>
    </>
  );
};

const MapWrapper = styled.div`
  width: 100%;
  min-height: 350px;
  border-radius: 10px;
`;

export default DetailMapContainer;
