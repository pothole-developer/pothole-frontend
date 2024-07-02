import { useCallback, useEffect } from 'react';
import { setMarker } from 'utils/naverMapUtils.tsx';
import { MapContainer, MapDiv } from './style.tsx';

interface Position {
  latitude: number;
  longitude: number;
}

export const Map = ({ markers }: { markers: Position[] }) => {
  const initMap = useCallback(() => {
    // 추가 옵션 설정
    const mapOptions = {
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_LEFT,
      },
      center: new naver.maps.LatLng(37.646339416503906, 127.02169036865234),
      zoom: 16,
    };

    // 지도 초기화 확인
    const mapInstance = new naver.maps.Map('map', mapOptions);

    // Marker 생성
    markers.forEach((m) => setMarker(m, mapInstance));
  }, [markers]);

  useEffect(() => {
    if (typeof process.env.REACT_APP_NAVER_MAP_URL !== 'undefined') {
      const naverMapScript = document.createElement('script');
      naverMapScript.onload = initMap;
      naverMapScript.src = process.env.REACT_APP_NAVER_MAP_URL;
      document.head.appendChild(naverMapScript);

      return () => {
        document.head.removeChild(naverMapScript);
      };
    }
  }, [initMap]);

  return (
    <MapContainer>
      <MapDiv id="map" />
    </MapContainer>
  );
};
