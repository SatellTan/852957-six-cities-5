import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import FavoriteOfferCard from "../favorite-offer-card/favorite-offer-card";
import FavoritesEmpty from "../favorites-empty/favorites-empty";
import Header from "../header/header";
import Footer from "../footer/footer";
import {LoadingStatusForRequests} from "../../const.js";
import {offerType, loadingStatusType} from '../../types';
import {getFavoritesOffers, getFavoritesLoadingStatus} from "../../store/selectors/selectors";
import {Preloader} from "../preloader/preloader";

const Favorites = ({favoriteOffers, favoritesLoadingStatus}) => {

  if (favoritesLoadingStatus === LoadingStatusForRequests.LOADING) {
    return (
      <Preloader/>
    );
  }

  const isFavoritesListNotEmpty = favoriteOffers.length > 0;

  let favoriteCities = [];
  if (isFavoritesListNotEmpty) {
    // Получить массив со всеми городами из списка favorite
    favoriteOffers.map((u) => favoriteCities.push(u.city.name));
    favoriteCities = [...new Set(favoriteCities)];
  }

  // Получить все favorite offers в конкретном городе
  const offersInCity = (city) => {
    return favoriteOffers.filter((offer) => offer.city.name === city);
  };

  return (!isFavoritesListNotEmpty ? <FavoritesEmpty/> : (
    <React.Fragment>
      <div style={{display: `none`}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>

      <div className="page">
        <Header/>

        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {favoriteCities.map((city, i) => (
                  <React.Fragment key={`${i}-${city}`}>
                    <li className="favorites__locations-items">
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link" href="#">
                            <span>{city}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {offersInCity(city).map((offer) => (
                          <FavoriteOfferCard key={`${i}-${offer.id}`}
                            offer={offer}
                          />
                        ))}
                      </div>
                    </li>
                  </React.Fragment>
                ))}
              </ul>
            </section>
          </div>
        </main>

        <Footer/>

      </div>
    </React.Fragment>)
  );
};

Favorites.propTypes = {
  favoriteOffers: PropTypes.arrayOf(offerType),
  favoritesLoadingStatus: loadingStatusType.isRequired,
};

const mapStateToProps = (state) => ({
  favoriteOffers: getFavoritesOffers(state),
  favoritesLoadingStatus: getFavoritesLoadingStatus(state),
});

export {Favorites};
export default connect(mapStateToProps)(Favorites);
