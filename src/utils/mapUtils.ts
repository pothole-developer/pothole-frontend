import { IPotholeInfo } from 'services/potholes';
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

type IMarker = naver.maps.Marker;

export const updateMap = (
  mapInstance: naver.maps.Map,
  potholesInfo: IPotholeInfo[],
  setVisiblePotholes: (visiblePotholes: IPotholeInfo[]) => void,
) => {
  const markers: IMarker[] = [];
  for (const potholeInfo of potholesInfo) {
    const { lat, lon, roadName } = potholeInfo;
    const marker = new naver.maps.Marker({
      map: mapInstance,
      position: new naver.maps.LatLng(lat, lon),
    });

    const infoWindow = new naver.maps.InfoWindow({
      content: getPotholeInfoContent({ lat, lon, roadName }),
    });

    naver.maps.Event.addListener(marker, 'click', () => {
      infoWindow.getMap() ? infoWindow.close() : infoWindow.open(mapInstance, marker);
    });

    markers.push(marker);
  }

  const updateMarkers = () => {
    const visiblePotholes: IPotholeInfo[] = [];
    const mapBounds = mapInstance.getBounds();

    for (let i = 0; i < markers.length; i++) {
      const marker = markers[i];
      const position = marker.getPosition();
      if (mapBounds.hasPoint(position)) {
        showMarker(marker);
        visiblePotholes.push(potholesInfo[i]);
      } else {
        hideMarker(marker);
      }
    }
    setVisiblePotholes(visiblePotholes);
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
