import { useEffect, useState, useCallback } from 'react';
import { MapContainer, MapDiv } from './style.tsx';
import { createMap, updateMap } from 'utils/mapUtils.ts';
import { usePotholesStore } from 'hooks/usePotholesStore.ts';
import { useQuery } from 'react-query';
import { fetchAllPotholes } from 'services/potholes.ts';

export const Map = () => {
  const filter = usePotholesStore((state) => state.filter);
  const setVisiblePotholes = usePotholesStore((state) => state.setVisiblePotholes);

  const { data, isLoading, isError } = useQuery(['potholes', filter], () => fetchAllPotholes());
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const initMap = useCallback(() => {
    const mapInstance = createMap();
    if (data) {
      updateMap(mapInstance, data.data, setVisiblePotholes);
    }
  }, [data, setVisiblePotholes]);

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

  useEffect(() => {
    if (scriptLoaded && data) {
      initMap();
    }
  }, [scriptLoaded, data, initMap]);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error loading data</div>;

  return (
    <MapContainer>
      <MapDiv id="map" />
    </MapContainer>
  );
};
