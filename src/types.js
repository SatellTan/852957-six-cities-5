import PropTypes from "prop-types";
import {OfferTypes} from "./const.js";

export const reviewType = PropTypes.shape({
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  grade: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
});

export const offerType = PropTypes.shape({
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
  reviews: PropTypes.arrayOf(reviewType).isRequired,
});
