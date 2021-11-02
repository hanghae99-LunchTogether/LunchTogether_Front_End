/* eslint-disable */

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const { kakao } = window;

const MapContainer = ({ searchKeyword, setPlace, userInfo, setUserInfo }) => {
  const selectPlace = place => {
    // setPlaces(
    //   places.map(p =>
    //     p.id === place.id ? { ...p, selected: true } : { ...p, selected: false }
    //   )
    // );
  };

  useEffect(() => {
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    const mapContainer = document.getElementById("myMap");
    const mapOption = {
      center: new kakao.maps.LatLng(37.49808633653005, 127.02800140627488),
      level: 3,
    };
    const map = new kakao.maps.Map(mapContainer, mapOption);

    var ps = new kakao.maps.services.Places();
    ps.keywordSearch(searchKeyword, placesSearchCB);

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        let temp_place = [];
        data.forEach(p => {
          p = { ...p, selected: false };
          temp_place.push(p);
        });
        // setPlaces(temp_place);
        var bounds = new kakao.maps.LatLngBounds();

        for (var i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
      }
    }

    function displayMarker(place) {
      var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      kakao.maps.event.addListener(marker, "click", function () {
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            "</div>"
        );
        infowindow.open(map, marker);
        // place.selected = false;
        setUserInfo({
          ...userInfo,
          location: place,
        });
      });
    }
  }, [searchKeyword]);

  return (
    <>
      <Wrap>
        <FakeDiv />
        <MapWrapper id="myMap"></MapWrapper>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  /* justify-content: center; */
`;

const MapWrapper = styled.div`
  width: 50vw;
  height: 35vh;
  border-radius: 20px;
`;
const FakeDiv = styled.div`
  width: 12%;
`;

export default MapContainer;
