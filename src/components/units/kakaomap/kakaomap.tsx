import React, { useEffect, useState } from "react";

const KakaoMap = () => {
    const [location, setLocation] = useState({lat: 0, lng: 0})
    const [address, setAddress] = useState("");

    useEffect(() => {
    // 카카오 지도 API가 로드되었는지 확인
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=c8f6b07aee4e7694244348a97138ca96&autoload=false&libraries=services,clusterer,drawing`;
    script.async = true;

    script.onload = () => {
      // 카카오 API를 로드한 후 실행
        window.kakao.maps.load(() => {
        const container = document.getElementById("map"); // 지도를 표시할 div
        const options = {
          center: new window.kakao.maps.LatLng(35.87282012612147, 128.5529895713901),
          level: 3, // 지도의 확대 레벨
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성

        map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const lat = position.coords.latitude;
              const lng = position.coords.longitude;
              setLocation({lat: lat, lng: lng})

              // 지도를 현재 위치로 이동
              const currentPosition = new window.kakao.maps.LatLng(lat, lng);
              map.setCenter(currentPosition); // 현재 위치로 지도 중심 이동

              // 현재 위치에 마커 추가
              const marker = new window.kakao.maps.Marker({
                position: currentPosition,
                draggable: true,
              });
            
              marker.setMap(map);
              marker.setDraggable(true);
              window.kakao.maps.event.addListener(marker, "dragend", () => {
                setLocation({lat: marker.getPosition().getLat(), lng: marker.getPosition().getLng()})
                let newLat = marker.getPosition().getLat();
                let newLng = marker.getPosition().getLng();
                setLocation({lat: newLat, lng: newLng})
              })              
            });
          }
        }
    )};

    document.head.appendChild(script); // 스크립트를 document에 추가
    }, []);
    
    console.log(location)

    return (
    <div
        id="map"
        style={{
        width: "360px",
        height: "640px",
        }}
    />
    );
};

export default KakaoMap;
