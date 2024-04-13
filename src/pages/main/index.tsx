import React from 'react'
import { useState, useEffect } from 'react';
import {Map} from '../../components/map/Map.tsx';

interface Position {
  latitude: number;
  longitude: number;
}

export const Main = () => {
  var latitude = 37.3674001;
  var longitude = 127.1181196;

  var position = {
    latitude: latitude,
    longitude: longitude
  };

  var markers:Position[] = [];
  markers.push({latitude: 37.37544345085402, longitude: 127.11224555969238}, {latitude: 37.35975408751081, longitude: 127.10795402526855} , {latitude: 37.37230584065902, longitude: 127.10791110992432});

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
    fillOpcaity: 0.5,
    strokeColor: '#f00000',
    strokeOpacity: 0.1,
    strokeWeight: 1
  }

  return (
    <Map position={position} markers={markers} polygon={polygon}></Map>
  )
};