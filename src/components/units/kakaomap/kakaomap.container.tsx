import React, { useEffect, useState } from "react";
import KakaoMapPresenter from "./kakaomap.presenter";
import { useRouter } from "next/router";

export default function KakaoMap() {
  const router = useRouter()
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
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
        const geocoder = new window.kakao.maps.services.Geocoder();
        map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            setLocation({ lat, lng });

            const currentPosition = new window.kakao.maps.LatLng(lat, lng);
            map.setCenter(currentPosition); // 현재 위치로 지도 중심 이동

            const marker = new window.kakao.maps.Marker({
              position: currentPosition,
              draggable: false, // 마커를 드래그하지 않음
            });

            marker.setMap(map);

            // 현재 위치의 주소 가져오기
            geocoder.coord2Address(lng, lat, (result, status) => {
              if (status === window.kakao.maps.services.Status.OK) {
                const detailAddr = result[0].address.address_name;
                setAddress(detailAddr); // 현재 위치의 주소 저장
              }
            });

            // 지도 클릭 이벤트 추가: 클릭한 위치로 마커 이동
            window.kakao.maps.event.addListener(map, "click", (mouseEvent) => {
              const clickedLatLng = mouseEvent.latLng; // 클릭한 위치의 좌표

              // 마커를 클릭한 위치로 이동
              marker.setPosition(clickedLatLng);

              const newLat = clickedLatLng.getLat();
              const newLng = clickedLatLng.getLng();
              setLocation({ lat: newLat, lng: newLng });

              // 클릭한 위치의 주소 가져오기
              geocoder.coord2Address(newLng, newLat, (result, status) => {
                if (status === window.kakao.maps.services.Status.OK) {
                  const detailAddr = result[0].address.address_name;
                  setAddress(detailAddr);
                }
              });
            });
          });
        }
      });
    };

    document.head.appendChild(script); // 스크립트를 document에 추가
  }, []);

  const onClickUpdate = () => {
    router.push('/')
  }

  const onClickCancel = () => {
    router.push('/')
  }

  return (
    <KakaoMapPresenter 
      location={location}
      address={address}
      onClickUpdate={onClickUpdate}
      onClickCancel={onClickCancel}
    />
  );
}
