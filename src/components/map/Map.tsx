import React from 'react'
import { useState, useEffect } from 'react';
import { setMarker, setPolygon } from '../../utils/naverMapUtils.tsx';

interface MapProps {
    position: Position;
    markers: Position[];
    polygon: PolygonProps;
}

interface PolygonProps {
    paths: Position[];
    fillColor: string;
    fillOpacity: number;
    strokeColor: string;
    strokeOpacity: number;
    strokeWeight: number;
}

interface Position {
    latitude: number;
    longitude: number;
}

let mapInstance: naver.maps.Map;

const loadScript = (src: string, callback: () => void) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;
  script.onload = () => callback();
  document.head.appendChild(script);
};

export const Map = ({position, markers, polygon} : MapProps) => {
    // 지도 로딩 상태
    const [isMapLoaded, setMapLoaded] = useState(false);

    const initMap = () => {
        // 추가 옵션 설정
        const mapOptions = {
            zoomControl: true,
            zoomControlOptions: {
                style: naver.maps.ZoomControlStyle.SMALL,
                position: naver.maps.Position.TOP_LEFT,
            },
            center: new naver.maps.LatLng(position.latitude, position.longitude),
            zoom: 16,
        };
        
        // 지도 초기화 확인
        if (document.getElementById('map')) {
            mapInstance = new naver.maps.Map('map', mapOptions);
        }

        // Marker 생성
        markers.forEach(m => setMarker(m, mapInstance));

        // Polygon 세팅
        setPolygon(polygon, mapInstance);

        // 지도 로드 완료
        setMapLoaded(true);
    };

    useEffect(() => {
        // 스크립트 로딩 확인
        if (typeof naver === 'undefined' && typeof process.env.REACT_APP_NAVER_MAP_URL !== 'undefined') {
            loadScript(
                process.env.REACT_APP_NAVER_MAP_URL,
                initMap,
            );
        } else {
            initMap();
        }
    }, [position.latitude, position.longitude, isMapLoaded, markers]);

    return (
        <>
        {/* 위치 정보(지도) */}
        <div>
            {isMapLoaded && (
                <div id="map" style={{height: '1000px', width: '100%'}}/>
            )}
        </div>
        </>
    );
}