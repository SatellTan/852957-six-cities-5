import React from "react";
import PropTypes from "prop-types";
import {OFFERS_CITIES} from "../../const.js";


const CitiesList = (props) => {
  const {city, onChangeCity} = props;

  const onCityClick = (evt) => {
    evt.preventDefault();
    const activeCity = evt.target.innerText;

    if (activeCity !== city) {
      onChangeCity(activeCity);
    }
  };

  return (
    <ul className="locations__list tabs__list">
      {Object.keys(OFFERS_CITIES).map((currentCity, i) => (
        <li className="locations__item" key={`${i}-${currentCity}`}>
          <a onClick={onCityClick} className={`locations__item-link tabs__item ${currentCity === city ? `tabs__item--active` : ``}`} href="#">
            <span>{currentCity}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

CitiesList.propTypes = {
  city: PropTypes.string.isRequired,
  onChangeCity: PropTypes.func.isRequired,
};

export default CitiesList;
