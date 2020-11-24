import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import ReviewsList from "../reviews-list/reviews-list";
import CommentForm from "../comment-form/comment-form";
import {offerType} from '../../types';
import {OfferTypes} from "../../const.js";
import {ratingBlock, filterArrayOfObjectByField} from "../../utils.js";
import NearOffersList from "../near-offers-list/near-offers-list";
import Map from "../map/map";
import withCommentForm from "../../hocs/with-comment-form/with-comment-form";

const CommentFormWrapped = withCommentForm(CommentForm);

const OfferPage = (props) => {
  const {match, allOffers} = props;

  let offers = allOffers;
  const currentId = parseInt(match.params.id.slice(1), 10);
  const nearOffers = offers.slice().splice(1);
  offers = filterArrayOfObjectByField(offers, `id`, currentId);

  if (!offers.length) {
    return <h1>Not found</h1>;
  }

  const [offer] = offers;
  const {
    city,
    isPremium,
    isFavorite,
    images,
    price,
    rating,
    title,
    type,
    bedrooms,
    maxAdults,
    goods,
    host,
    description,
    reviews,
  } = offer;

  return <React.Fragment>
    <div style={{display: `none`}}>
      <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
    </div>

    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to="/" className="header__logo-link">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link to="/favorites" className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image, i) => (
                <div key={`${i}-${image}`} className="property__image-wrapper">
                  <img className="property__image" src={image} alt="Photo studio"/>
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button button ${isFavorite && `property__bookmark-button--active`}`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: ratingBlock(rating) + `%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{ratingBlock(rating, `rating`)}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type in OfferTypes ? OfferTypes[type] : ``}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((service, i) => (
                    <li key={`${i}-${service[i]}`} className="property__inside-item">
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper user__avatar-wrapper ${host.isPro ? ` property__avatar-wrapper--pro` : ``}`}>
                    <img className="property__avatar user__avatar" src={host.avatarUrl ? host.avatarUrl : ``} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewsList
                  offer={offer}
                />
                <CommentFormWrapped/>
              </section>
            </div>
          </div>
          <Map
            className={`property__map`}
            offers={nearOffers}
            activeOffer={offer}
            cityCenter={city.location}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <NearOffersList
              offers={nearOffers}
            />
          </section>
        </div>
      </main>
    </div>
  </React.Fragment>;
};

OfferPage.propTypes = {
  allOffers: PropTypes.arrayOf(offerType).isRequired,
  match: PropTypes.object.isRequired,
};

export default OfferPage;
