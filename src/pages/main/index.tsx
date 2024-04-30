import {Map} from '../../components/map/Map.tsx';
import { usePotholeListQuery } from '../../hooks/usePotholeQuery.ts';

interface Position {
  latitude: number;
  longitude: number;
}

export const Main = () => {
  const {data} = usePotholeListQuery();
  var latitude = 37.646339416503906;
  var longitude = 127.02169036865234;

  var position = {
    latitude: latitude,
    longitude: longitude
  };

  var polygonPositions:Position[] = [];
  polygonPositions.push(
    {latitude: 37.37544345085402, longitude: 127.11224555969238},
    {latitude: 37.37544345085402, longitude: 127.11224555969238},
    {latitude: 37.37230584065902, longitude: 127.10791110992432},
    {latitude: 37.35975408751081, longitude: 127.10795402526855},
    {latitude: 37.359924641705476, longitude: 127.11576461791992},
    {latitude: 37.35931064479073, longitude: 127.12211608886719},
    {latitude: 37.36043630196386, longitude: 127.12293148040771},
    {latitude: 37.36354029942161, longitude: 127.12310314178465},
    {latitude: 37.365211629488016, longitude: 127.12456226348876},
    {latitude: 37.37544345085402, longitude: 127.11224555969238}
  );

  var polygon = {
    paths: polygonPositions,
    fillColor: '#808080',
    fillOpacity: 0.5,
    strokeColor: '#f00000',
    strokeOpacity: 0.1,
    strokeWeight: 1
  }

  if (data) {
    console.log(data.data);
    const markers = data.data.map(d => {
      return {
        latitude: d.lat,
        longitude: d.lon
      }
    });
    console.log(markers);

    return (
      <>
        <span>
        위치 안내
        </span>
        <Map position={position} markers={markers} polygon={polygon}></Map>
      </>
    )
  }
};