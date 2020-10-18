import React from "react";
import PropTypes from "prop-types";
import {offerType} from '../../types';
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = (props) => {
  const {offers} = props;

  const startCity = [52.38333, 4.9];

  // Иконка маркера на карте
  const icon = leaflet.icon({
    iconUrl: `../../img/pin.svg`,
    iconSize: [30, 30]
  });

  // Инициализация карты
  const zoom = 12;
  const map = leaflet.map(`map`, {
    center: startCity,
    zoom: zoom,
    zoomControl: false,
    marker: true
  });

  map.setView(startCity, zoom);

  // Подключение слоя карты
  leaflet
  .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
  })
  .addTo(map);


  offers.map((offer) => (
    leaflet.marker(offer.locationCoords, {icon}).addTo(map)
  ));
  //const offerCoords = [52.3709553943508, 4.89309666406198];
  //leaflet.marker(offerCoords, {icon}).addTo(map);


  return (
    <div id="map"></div>
  );
};

Map.propTypes = {
  offers: PropTypes.arrayOf(offerType).isRequired,
};

export default Map;
