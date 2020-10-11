import React from "react";
import {OfferTypes} from "../../const.js";

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

  const ratingObj = () => {
    const gradesArray = reviews.map(x => x.grade);
    const totalRating = gradesArray.reduce((acc, c) => acc + c, 0) / gradesArray.length;
    console.log(`Средний рейтинг `+totalRating+` из `+gradesArray+` у `+title);
    ratingBlockWidth = string(Math.round(totalRating) * 20) + `%`;

    return {width: ratingBlockWidth};
  };

  return (
    <article className="cities__place-card place-card" onHover={onOfferCardHover}>
      <div className="place-card__mark">
        <span>{premium? `Premium`:``}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" {...photos[0]? src=photos[0].src : ``} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{rentPrice}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={ratingObj}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{OfferTypes.hasOwnProperty(type)? OfferTypes.type : ``}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  onOfferCardHover: PropTypes.func.isRequired,
  offer: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    photos: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
    })).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    premium: PropTypes.bool.isRequired,
    type: PropTypes.oneOf(Object.keys(OfferTypes)).isRequired,
    bedroomsNumber: PropTypes.number.isRequired,
    adultsMaxNumber: PropTypes.number.isRequired,
    rentPrice: PropTypes.number.isRequired,
    services: PropTypes.arrayOf(PropTypes.string).isRequired,
    owner: PropTypes.shape({
      picture: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      super: PropTypes.bool.isRequired,
    }).isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      picture: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      grade: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })).isRequired,
  })),
};

export default OfferCard;
