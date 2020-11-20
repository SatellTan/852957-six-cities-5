import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {offerType} from '../../types';
import OffersList from "../offers-list/offers-list";
import CitiesList from "../cities-list/cities-list";
import {OFFERS_CITIES, SortingTypes} from "../../const.js";
import Map from "../map/map";
import Sort from "../sort/sort";
import withSortActive from "../../hocs/with-sort-active/with-sort-active";

const SortWrapped = withSortActive(Sort);

const Main = (props) => {
  const {city,
    offers,
    onChangeCity,
    activeSortingType,
    onChangeSortingType,
    activeOffer,
    onOfferCardMouseEnter,
    onOfferCardMouseLeave
  } = props;

  const returnEmptyCitiesBlock = () => {
    return (
      <div className="cities">
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
            </div>
          </section>
          <div className="cities__right-section"></div>
        </div>
      </div>
    );
  };

  const returnCitiesBlock = () => {
    return (
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in {city}</b>
            <SortWrapped
              activeSortingType={activeSortingType}
              onChangeSortingType={onChangeSortingType}
            />
            <OffersList
              offers={offers}
              onOfferCardMouseEnter={onOfferCardMouseEnter}
              onOfferCardMouseLeave={onOfferCardMouseLeave}
            />
          </section>
          <div className="cities__right-section">
            <Map
              className={`cities__map`}
              offers={offers}
              activeOffer={activeOffer}
              cityCenter={OFFERS_CITIES[city]}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link to="/login" className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className={`page__main page__main--index ${!offers.length ? `page__main--index-empty` : ``}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList
              city={city}
              onChangeCity={onChangeCity}
            />
          </section>
        </div>
        {!offers.length ? returnEmptyCitiesBlock() : returnCitiesBlock()}
      </main>
    </div>
  );
};

Main.propTypes = {
  offers: PropTypes.arrayOf(offerType).isRequired,
  city: PropTypes.string.isRequired,
  onChangeCity: PropTypes.func.isRequired,
  activeSortingType: PropTypes.oneOf(Object.values(SortingTypes)).isRequired,
  onChangeSortingType: PropTypes.func.isRequired,
  activeOffer: offerType,
  onOfferCardMouseEnter: PropTypes.func.isRequired,
  onOfferCardMouseLeave: PropTypes.func.isRequired,
};

export default Main;
