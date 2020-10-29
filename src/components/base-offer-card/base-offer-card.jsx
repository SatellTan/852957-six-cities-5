import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {offerType} from '../../types';
import {OfferTypes, FavoritesList} from "../../const.js";
import {ratingBlock} from "../../utils.js";

const BaseOfferCard = (props) => {
  const {className = ``,
    imageWrapperClassName = ``,
    infoBlockClassName = ``,
    favoriteMark = false,
    offer,
    onOfferCardMouseEnter = null,
    photoSizes,
  } = props;

  const {
    id,
    premium,
    photos,
    rentPrice,
    title,
    type,
    reviews,
  } = offer;

  return (
    <article className={`place-card ${className}`}
      onMouseEnter={(evt) => {
        onOfferCardMouseEnter(evt, offer);
      }}>
      {favoriteMark && premium &&
        <div className="place-card__mark">
          <span>{`Premium`}</span>
        </div>
      }
      <div className={`place-card__image-wrapper ${imageWrapperClassName}`}>
        <a href="#">
          <img className="place-card__image" src={photos[0] ? photos[0].src : ``} width={photoSizes ? photoSizes.width : `260`} height={photoSizes ? photoSizes.height : `200`} alt="Place image"/>
        </a>
      </div>
      <div className={`place-card__info ${infoBlockClassName}`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{rentPrice}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${FavoritesList.includes(offer.id) ? `place-card__bookmark-button--active` : ``}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingBlock(reviews) + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/:` + id}>{title}</Link>
        </h2>
        <p className="place-card__type">{type in OfferTypes ? OfferTypes[type] : ``}</p>
      </div>
    </article>
  );
};

BaseOfferCard.propTypes = {
  offer: offerType.isRequired,
  onOfferCardMouseEnter: PropTypes.func,
  className: PropTypes.string,
  imageWrapperClassName: PropTypes.string,
  infoBlockClassName: PropTypes.string,
  favoriteMark: PropTypes.bool,
  photoSizes: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

export default BaseOfferCard;
