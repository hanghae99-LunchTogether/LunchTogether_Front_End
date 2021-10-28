import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const { kakao } = window;

const MapContainer = ({ searchPlace }) => {
  const [places, setPlaces] = useState([]);
  const [place, setPlace] = useState(null);
  const [latlng, setLatLng] = useState({ x: null, y: null });

  const changeLocation = (x, y) => {
    setLatLng({ x: x, y: y });
  };

  console.log(place);

  useEffect(() => {
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    const mapContainer = document.getElementById("myMap");
    const mapOption = {
      center: new kakao.maps.LatLng(
        latlng.x ? latlng.x : 33.450701,
        latlng.y ? latlng.y : 126.570667
      ),
      level: 3,
    };
    const map = new kakao.maps.Map(mapContainer, mapOption);

    var ps = new kakao.maps.services.Places();
    ps.keywordSearch(searchPlace, placesSearchCB);

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        setPlaces(data);
        var bounds = new kakao.maps.LatLngBounds();

        for (var i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
      }
    }

    function displayMarker(place) {
      // 마커를 생성하고 지도에 표시합니다
      var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, "click", function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            "</div>"
        );
        infowindow.open(map, marker);
        setPlace(place);
      });
    }
  }, [searchPlace]);

  return (
    <Wrapper>
      <MapWrapper
        id="myMap"
        style={{
          width: "500px",
          height: "500px",
        }}
      ></MapWrapper>
      <PlaceListWrapper>
        {places.map((p, idx) => {
          return (
            <div key={idx}>
              <div> {p.place_name}</div>
              <div> {p.x}</div>
              <button onClick={() => changeLocation(p.x, p.y)}>확인</button>
            </div>
          );
        })}
      </PlaceListWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const MapWrapper = styled.div`
  width: 65%;
  margin-right: 5%;
  height: 30%;
`;

const PlaceListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  background-color: green;
  height: 500px;
  overflow: scroll;
`;

export default MapContainer;
