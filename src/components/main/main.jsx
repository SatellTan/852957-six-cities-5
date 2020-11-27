import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {changeCity, changeSortingType} from "../../store/action";
import {getActiveCity, getActiveSortingType, getSortedOffersByCity} from "../../store/selectors/selectors";
import {offerType} from '../../types';
import OffersList from "../offers-list/offers-list";
import CitiesList from "../cities-list/cities-list";
import {OFFERS_CITIES, SortingTypes} from "../../const.js";
import Map from "../map/map";
import Sort from "../sort/sort";
import EmptyOffersList from "../empty-offers-list/empty-offers-list";
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

  const isOffersList = offers.length > 0;

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

      <main className={`page__main page__main--index ${!isOffersList ? `page__main--index-empty` : ``}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList
            city={city}
            onChangeCity={onChangeCity}
          />
        </div>
        <div className="cities">
          <div className={`cities__places-container container ${!isOffersList && `cities__places-container--empty`}`}>
            {!isOffersList ? <EmptyOffersList city={city}/> : (
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
            )}

            <div className="cities__right-section">
              {isOffersList &&
                <Map
                  className={`cities__map`}
                  offers={offers}
                  activeOffer={activeOffer}
                  cityCenter={OFFERS_CITIES[city].location}
                />
              }
            </div>
          </div>
        </div>
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

const mapStateToProps = (state) => ({
  offers: getSortedOffersByCity(state),
  city: getActiveCity(state),
  activeSortingType: getActiveSortingType(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity: (city) => {
    dispatch(changeCity(city));
  },
  onChangeSortingType: (sortingType) => {
    dispatch(changeSortingType(sortingType));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
