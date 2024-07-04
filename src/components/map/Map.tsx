import { useEffect } from 'react';
import { MapContainer, MapDiv } from './style.tsx';
import { createMap, updateMap } from 'utils/mapUtils.ts';

interface Position {
  latitude: number;
  longitude: number;
}

export const Map = ({ markersPos }: { markersPos: Position[] }) => {
  const initMap = () => {
    const mapInstance = createMap();
    updateMap(mapInstance, markersPos);
  };

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
  }, []);

  return (
    <MapContainer>
      <MapDiv id="map" />
    </MapContainer>
  );
};
