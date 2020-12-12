import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import FavoriteButton from "../favorite-button/favorite-button";
import {offerType} from '../../types';
import {OfferTypes, FavoriteButtonType} from "../../const.js";
import {ratingBlock} from "../../utils.js";

const BaseOfferCard = (props) => {
  const {className = ``,
    imageWrapperClassName = ``,
    infoBlockClassName = ``,
    offer,
    onOfferCardMouseEnter = null,
    onOfferCardMouseLeave = null,
    photoSizes,
  } = props;

  const {
    id,
    isPremium,
    isFavorite,
    previewImage,
    price,
    rating,
    title,
    type,
  } = offer;

  const handleMouseEnter = (evt) => {
    if (onOfferCardMouseEnter) {
      onOfferCardMouseEnter(evt, offer);
    }
  };
  const handleMouseLeave = (evt) => {
    if (onOfferCardMouseLeave) {
      onOfferCardMouseLeave(evt);
    }
  };

  return (
    <article className={`place-card ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>

      {isPremium &&
        <div className="place-card__mark">
          <span>{`Premium`}</span>
        </div>
      }
      <div className={`place-card__image-wrapper ${imageWrapperClassName}`}>
        <a href="#">
          <img className="place-card__image" src={previewImage} width={photoSizes ? photoSizes.width : `260`} height={photoSizes ? photoSizes.height : `200`} alt="Place image"/>
        </a>
      </div>
      <div className={`place-card__info ${infoBlockClassName}`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton
            offerId={id}
            classPrefix={`place-card`}
            isFavorite={isFavorite}
            buttonType={FavoriteButtonType.BASE}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingBlock(rating) + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/` + id}>{title}</Link>
        </h2>
        <p className="place-card__type">{type.toUpperCase() in OfferTypes ? OfferTypes[type.toUpperCase()] : ``}</p>
      </div>
    </article>
  );
};

BaseOfferCard.propTypes = {
  offer: offerType.isRequired,
  onOfferCardMouseEnter: PropTypes.func,
  onOfferCardMouseLeave: PropTypes.func,
  className: PropTypes.string,
  imageWrapperClassName: PropTypes.string,
  infoBlockClassName: PropTypes.string,
  photoSizes: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

export default BaseOfferCard;
