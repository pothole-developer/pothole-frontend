import { useCallback, useEffect } from 'react';
import { MapContainer, MapDiv } from './style.tsx';
import { getPotholeInfoContent } from 'utils/potholeInfo.ts';

interface Position {
  latitude: number;
  longitude: number;
}

type IMarker = naver.maps.Marker;

export const Map = ({ markersPos }: { markersPos: Position[] }) => {
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

    naver.maps.Event.addListener(mapInstance, 'zoom_changed', function () {
      updateMarkers();
    });

    naver.maps.Event.addListener(mapInstance, 'dragend', function () {
      updateMarkers();
    });

    const markers: IMarker[] = [];
    const infoWindows = [];

    for (const markerPos of markersPos) {
      const { latitude, longitude } = markerPos;
      const marker = new naver.maps.Marker({
        map: mapInstance,
        position: new naver.maps.LatLng(latitude, longitude),
      });

      const infoWindow = new naver.maps.InfoWindow({
        content: getPotholeInfoContent({ latitude, longitude }),
      });

      markers.push(marker);
      infoWindows.push(infoWindow);
    }

    const updateMarkers = () => {
      const mapBounds = mapInstance.getBounds();

      for (const marker of markers) {
        const position = marker.getPosition();

        if (mapBounds.hasPoint(position)) {
          showMarker(marker);
        } else {
          hideMarker(marker);
        }
      }
    };

    const showMarker = (marker: IMarker) => {
      marker.setMap(mapInstance);
    };

    const hideMarker = (marker: IMarker) => {
      marker.setMap(null);
    };
  }, [markersPos]);

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
