import { getPotholeInfoContent } from './potholeInfo.ts';

interface Position {
  latitude: number;
  longitude: number;
}

export const setMarker = (marker: Position, mapInstance: naver.maps.Map) => {
  const marker_ = new naver.maps.Marker({
    position: new naver.maps.LatLng(marker.latitude, marker.longitude),
    map: mapInstance,
  });

  const infowindow = new naver.maps.InfoWindow({
    content: getPotholeInfoContent({ latitude: marker.latitude, longitude: marker.longitude }),
  });

  naver.maps.Event.addListener(marker_, 'click', () => {
    if (infowindow.getMap()) {
      infowindow.close();
    } else {
      infowindow.open(mapInstance, marker_);
    }
  });
};
