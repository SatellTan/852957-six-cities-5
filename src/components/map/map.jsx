import React, {PureComponent} from "react";
import PropTypes, {number} from "prop-types";
import {offerType} from '../../types';
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import {MAP_ZOOM} from '../../const';

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.map = null;
  }

  _createMap() {
    // Иконка маркера на карте
    const icon = leaflet.icon({
      iconUrl: `../../img/pin.svg`,
      iconSize: [30, 30]
    });

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

    this.props.offers.map((offer) => (
      leaflet.marker(offer.locationCoords, {icon}).addTo(this.map)
    ));
  }

  componentDidMount() {
    this._createMap();
  }

  componentDidUpdate() {
    this.map.remove();
    this._createMap();
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
  cityCenter: PropTypes.arrayOf(number).isRequired,
};

export default Map;
