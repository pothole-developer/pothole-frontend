import { useEffect, useState } from 'react';
import { MapContainer, MapDiv } from './style.tsx';
import { createMap, updateMap } from 'utils/mapUtils.ts';
import { usePotholesStore } from 'hooks/usePotholesStore.ts';
import { useQuery } from 'react-query';
import { fetchPotholes } from 'services/potholes.ts';

export const Map = () => {
  const filter = usePotholesStore((state) => state.filter);
  const setVisiblePotholes = usePotholesStore((state) => state.setVisiblePotholes);
  const { data } = useQuery(['potholes', filter], () => fetchPotholes(filter));
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [mapInstance, setMapInstance] = useState<naver.maps.Map>();
  const [markerInstance, setMarkerInstance] = useState<naver.maps.Marker[]>();

  useEffect(() => {
    const loadScript = () => {
      if (!scriptLoaded && typeof import.meta.env.VITE_NAVER_MAP_URL !== 'undefined') {
        const existingScript = document.getElementById('naver-map-script');
        if (existingScript) {
          existingScript.onload = () => setScriptLoaded(true);
          return;
        }

        const naverMapScript = document.createElement('script');
        naverMapScript.id = 'naver-map-script';
        naverMapScript.src = import.meta.env.VITE_NAVER_MAP_URL;
        naverMapScript.onload = () => setScriptLoaded(true);
        naverMapScript.async = true;
        document.head.appendChild(naverMapScript);
      }
    };

    loadScript();
  }, [scriptLoaded]);

  // 스크립트가 로드 되면 지도를 생성
  useEffect(() => {
    if (scriptLoaded) {
      if (!mapInstance) {
        setMapInstance(createMap());
      }
    }
  }, [scriptLoaded]);

  // 데이터 변경시 지도 업데이트
  useEffect(() => {
    if (mapInstance && data) {
      // 이전 마커와 이벤트리스너 제거
      if (markerInstance) {
        naver.maps.Event.clearInstanceListeners(markerInstance);
        for (let i = 0; i < markerInstance.length; i++) {
          const marker = markerInstance[i];
          marker.setMap(null);
        }
      }

      // 새로운 마커 업데이트
      const marker = updateMap(mapInstance, data.data, setVisiblePotholes);
      setMarkerInstance(marker);
    }
  }, [mapInstance, data, setVisiblePotholes]);

  return (
    <MapContainer>
      <MapDiv id="map" />
    </MapContainer>
  );
};
