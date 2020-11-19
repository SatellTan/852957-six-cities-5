import React, {PureComponent} from "react";
import PropTypes, {number} from "prop-types";
import {offerType} from '../../types';
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import {MAP_ZOOM, ICON_URL, ACTIVE_ICON_URL, ICON_SIZE} from '../../const';

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.map = null;
    this.markers = [];
  }

  createMap() {

    // Инициализация карты
    this.map = leaflet.map(`map`, {
      center: this.props.cityCenter,
      zoom: MAP_ZOOM,
      zoomControl: false,
      marker: true
    });
    this.map.setView(this.props.cityCenter, MAP_ZOOM);

    // Подключение слоя карты
    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        }).addTo(this.map);

    this.createMarkers();
  }

  createMarkers() {
    // Иконка маркера на карте
    const icon = leaflet.icon({
      iconUrl: ICON_URL,
      iconSize: ICON_SIZE
    });

    // Иконка активного маркера на карте
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
    offers.map((offer) => (this.markers.push(leaflet.marker(offer.locationCoords, {icon}))));
    if (activeOffer) {
      this.markers.push(leaflet.marker(activeOffer.locationCoords, {icon: activeIcon}));
    }

    this.markers.map((marker) => marker.addTo(this.map));
  }

  componentDidMount() {
    this.createMap();
    this.createMarkers();
  }

  componentDidUpdate() {
    this.createMarkers();
    this.map.setView(this.props.cityCenter, MAP_ZOOM);
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
  cityCenter: PropTypes.arrayOf(number).isRequired,
};

export default Map;
