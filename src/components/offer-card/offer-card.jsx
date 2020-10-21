import React from "react";
import PropTypes from "prop-types";
import BaseOfferCard from "../base-offer-card/base-offer-card";
import {offerType} from '../../types';

const OfferCard = (props) => {
  const {onOfferCardHover} = props;

  const onBaseOfferCardHover = (newActiveOffer) => {
    onOfferCardHover(newActiveOffer);
  };

  return (
    <BaseOfferCard
      className={`cities__place-card`}
      imageWrapperClassName={`cities__image-wrapper`}
      favoriteMark = {true}
      onBaseOfferCardHover = {onBaseOfferCardHover}
      {...props}
    />
  );
};

OfferCard.propTypes = {
  offer: offerType.isRequired,
  onOfferCardHover: PropTypes.func.isRequired,
};

export default OfferCard;
