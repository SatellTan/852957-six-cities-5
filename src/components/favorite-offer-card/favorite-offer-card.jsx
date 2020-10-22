import React from "react";
import {offerType} from '../../types';
import BaseOfferCard from "../base-offer-card/base-offer-card";

const FavoriteOfferCard = (props) => {

  return (
    <BaseOfferCard
      className={`favorites__card`}
      imageWrapperClassName={`favorites__image-wrapper`}
      infoBlockClassName={`favorites__card-info`}
      photoSizes={{width: `150`, height: `110`}}
      {...props}
    />
  );
};

FavoriteOfferCard.propTypes = {
  offer: offerType.isRequired,
};

export default FavoriteOfferCard;
