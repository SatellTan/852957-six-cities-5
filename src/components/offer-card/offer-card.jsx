import React from "react";
import PropTypes from "prop-types";
import {offerType} from '../../types';
import {OfferTypes, FavoritesList} from "../../const.js";
import {ratingBlockWidth} from "../../utils.js";

const OfferCard = (props) => {
  const {offer, onOfferCardHover} = props;
  const {
    premium,
    photos,
    rentPrice,
    title,
    type,
    reviews,
  } = offer;

  const premiumBlock = () => {
    if (premium) {
      return (
        <div className="place-card__mark">
          <span>{`Premium`}</span>
        </div>
      );
    }
    return ``;
  };

  const isFavoriteClass = () => {
    return FavoritesList.includes(offer.id) ? ` place-card__bookmark-button--active` : ``;
  };

  return (
    <article className="cities__place-card place-card"
      onMouseEnter={(evt) => {
        evt.preventDefault();
        onOfferCardHover(offer);
      }}>
      {premiumBlock()}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={photos[0] ? photos[0].src : ``} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{rentPrice}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button` + isFavoriteClass()} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingBlockWidth(reviews) + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{OfferTypes.hasOwnProperty(type) ? OfferTypes[type] : ``}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: offerType.isRequired,
  onOfferCardHover: PropTypes.func.isRequired,
};

export default OfferCard;
