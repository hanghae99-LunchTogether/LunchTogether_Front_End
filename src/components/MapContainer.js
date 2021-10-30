import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const { kakao } = window;

const MapContainer = ({ searchPlace }) => {
  const [places, setPlaces] = useState([]);
  const [place, setPlace] = useState(null);
  console.log(place);

  const selectPlace = place => {
    setPlace(place);
    setPlaces(
      places.map(p =>
        p.id === place.id ? { ...p, selected: true } : { ...p, selected: false }
      )
    );
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
    ps.keywordSearch(searchPlace, placesSearchCB);

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        let temp_place = [];
        data.forEach(p => {
          p = { ...p, selected: false };
          temp_place.push(p);
        });
        setPlaces(temp_place);
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
        selectPlace(place);
      });
    }
  }, [searchPlace]);

  return (
    <>
      <div>만나는 장소</div>
      <div>
        장소명: {place ? place.place_name : "만날 장소를 선택해주세요"}{" "}
      </div>
      <Wrap>
        <MapWrapper>
          <div id="myMap" style={{ width: "500px", height: "500px" }}></div>
        </MapWrapper>
        <PlaceListWrapper>
          {places &&
            places.map((p, idx) => {
              return (
                <div active={p.selected} key={idx}>
                  <p style={p.selected ? { color: "red" } : { color: "blue" }}>
                    {p.place_name}
                  </p>
                  <button
                    onClick={() => {
                      selectPlace(p);
                    }}
                  >
                    확인
                  </button>
                </div>
              );
            })}
        </PlaceListWrapper>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const MapWrapper = styled.div`
  margin-right: 5%;
`;

const PlaceListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  max-height: 500px;
  overflow: scroll;
`;

export default MapContainer;
