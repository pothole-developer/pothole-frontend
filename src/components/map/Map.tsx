import React from 'react'
import { useState, useEffect } from 'react';
import { getPotholeInfoContent } from '../../utils/potholeInfo.ts';

interface MapProps {
    position: Position;
    markers: Position[];
    polygon: Polygon;
}

interface Polygon {
    paths: Position[];
    fillColor: string;
    fillOpcaity: number;
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
        markers.forEach(m => {
            const marker = new naver.maps.Marker({
                position: new naver.maps.LatLng(m.latitude, m.longitude),
                map: mapInstance,
            });
            // Marker 클릭 시 지도 초기화
            var infowindow = new naver.maps.InfoWindow({
                content: getPotholeInfoContent({latitude: m.latitude, longitude:m.longitude})
            });
            naver.maps.Event.addListener(marker, 'click', () => {
                if (infowindow.getMap()) {
                    infowindow.close();
                } else {
                    infowindow.open(mapInstance, marker);
                }
            });
        })

        // Polygon 세팅
        var paths:naver.maps.LatLng[] = [];
        polygon.paths.forEach(p => paths.push(new naver.maps.LatLng(p.latitude, p.longitude)));

        var polygon_ = new naver.maps.Polygon({
            map: mapInstance,
            paths: [paths],
            fillColor: polygon.fillColor,
            fillOpacity: polygon.fillOpcaity,
            strokeColor: polygon.strokeColor,
            strokeOpacity: polygon.strokeOpacity,
            strokeWeight: polygon.strokeWeight
        });

        // 지도 로드 완료
        setMapLoaded(true);
    };

    useEffect(() => {
        // 스크립트 로딩 확인
        if (typeof naver === 'undefined') {
            loadScript(
                'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=lkpmszjxhi',
                initMap,
            );
        } else {
            initMap();
        }
    }, [position.latitude, position.longitude, isMapLoaded]);

    return (
        <>
        {/* 위치 정보(지도) */}
        <div>
            <span>
            위치 안내
            </span>
            {isMapLoaded && (
                <div id="map" style={{height: '1000px', width: '100%'}}/>
            )}
        </div>
        </>
    );
}