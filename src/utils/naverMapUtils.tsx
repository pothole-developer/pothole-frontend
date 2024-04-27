import { getPotholeInfoContent } from './potholeInfo.ts';

interface Position {
    latitude: number;
    longitude: number;
}

interface Polygon {
    paths: Position[];
    fillColor: string;
    fillOpacity: number;
    strokeColor: string;
    strokeOpacity: number;
    strokeWeight: number;
}

export const setMarker = (marker:Position, mapInstance: naver.maps.Map) => {
    const marker_ = new naver.maps.Marker({
        position: new naver.maps.LatLng(marker.latitude, marker.longitude),
        map: mapInstance,
    });

    const infowindow = new naver.maps.InfoWindow({
        content: getPotholeInfoContent({ latitude: marker.latitude, longitude: marker.longitude })
    });

    naver.maps.Event.addListener(marker_, 'click', () => {
        if (infowindow.getMap()) {
            infowindow.close();
        } else {
            infowindow.open(mapInstance, marker_);
        }
    });
}

export const setPolygon = (polygon:Polygon, mapInstance: naver.maps.Map) => {
    const paths: naver.maps.LatLng[] = polygon.paths.map(p => new naver.maps.LatLng(p.latitude, p.longitude));

    return new naver.maps.Polygon({
        map: mapInstance,
        paths: [paths],
        fillColor: polygon.fillColor,
        fillOpacity: polygon.fillOpacity,
        strokeColor: polygon.strokeColor,
        strokeOpacity: polygon.strokeOpacity,
        strokeWeight: polygon.strokeWeight
    });
}