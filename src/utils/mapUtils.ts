import { getPotholeInfoContent } from 'utils/potholeInfo';

export const createMap = () => {
  const mapOptions = {
    zoomControl: true,
    zoomControlOptions: {
      style: naver.maps.ZoomControlStyle.SMALL,
      position: naver.maps.Position.TOP_LEFT,
    },
    center: new naver.maps.LatLng(37.646339416503906, 127.02169036865234),
    zoom: 16,
  };

  return new naver.maps.Map('map', mapOptions);
};

interface Position {
  latitude: number;
  longitude: number;
}

type IMarker = naver.maps.Marker;

export const updateMap = (mapInstance: naver.maps.Map, markersPos: Position[]) => {
  const markers: IMarker[] = [];
  for (const markerPos of markersPos) {
    const { latitude, longitude } = markerPos;
    const marker = new naver.maps.Marker({
      map: mapInstance,
      position: new naver.maps.LatLng(latitude, longitude),
    });

    const infoWindow = new naver.maps.InfoWindow({
      content: getPotholeInfoContent({ latitude, longitude }),
    });

    naver.maps.Event.addListener(marker, 'click', () => {
      infoWindow.getMap() ? infoWindow.close() : infoWindow.open(mapInstance, marker);
    });

    markers.push(marker);
  }

  const visiblePotholes = [];
  const updateMarkers = () => {
    const mapBounds = mapInstance.getBounds();

    for (let i = 0; i < markers.length; i++) {
      const marker = markers[i];
      const position = marker.getPosition();
      if (mapBounds.hasPoint(position)) {
        showMarker(marker);
        visiblePotholes.push(markersPos[i]);
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

  naver.maps.Event.addListener(mapInstance, 'zoom_changed', () => updateMarkers());

  naver.maps.Event.addListener(mapInstance, 'dragend', () => updateMarkers());
};
