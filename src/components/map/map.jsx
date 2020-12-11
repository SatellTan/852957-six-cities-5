import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

import {offerType} from '../../types';
import "leaflet/dist/leaflet.css";
import {ICON_URL, ACTIVE_ICON_URL, ICON_SIZE} from '../../const';

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.map = null;
    this.markers = [];
  }

  createMap() {
    const {cityCenter} = this.props;
    const cityCenterCoord = [cityCenter.latitude, cityCenter.longitude];
    const mapZoom = cityCenter.zoom;

    // Инициализация карты
    this.map = leaflet.map(`map`, {
      center: cityCenterCoord,
      zoom: mapZoom,
      zoomControl: false,
      marker: true
    });

    this.map.setView(cityCenterCoord, mapZoom);

    // Подключение слоя карты
    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        }).addTo(this.map);

    this.createMarkers();
  }

  createMarkers() {
    // Иконки маркеров на карте
    const icon = leaflet.icon({
      iconUrl: ICON_URL,
      iconSize: ICON_SIZE
    });

    const activeIcon = leaflet.icon({
      iconUrl: ACTIVE_ICON_URL,
      iconSize: ICON_SIZE
    });

    const {offers, activeOffer} = this.props;
    // Удаляем все маркеры с карты
    if (this.markers) {
      this.markers.map((marker) => {
        marker.remove();
      });
      this.markers.length = 0;
    }

    // Добавляем новые маркеры
    offers.map((offer) => (this.markers.push(leaflet.marker([offer.location.latitude, offer.location.longitude], {icon}))));
    if (activeOffer) {
      this.markers.push(leaflet.marker([activeOffer.location.latitude, activeOffer.location.longitude], {icon: activeIcon}));
    }

    this.markers.map((marker) => marker.addTo(this.map));
  }

  componentDidMount() {
    this.createMap();
    this.createMarkers();
  }

  componentDidUpdate() {
    const {cityCenter} = this.props;

    this.createMarkers();
    this.map.setView([cityCenter.latitude, cityCenter.longitude]);
  }

  render() {
    return (
      <section id="map" className={`${this.props.className} map`}></section>
    );
  }
}

Map.propTypes = {
  className: PropTypes.string,
  offers: PropTypes.arrayOf(offerType).isRequired,
  activeOffer: offerType,
  cityCenter: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }).isRequired,
};

export default Map;
