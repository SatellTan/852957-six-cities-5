import React from "react";

import BaseOfferCard from "../base-offer-card/base-offer-card";
import {offerType} from '../../types';

const NearOfferCard = (props) => {

  return (
    <BaseOfferCard
      className={`near-places__card`}
      imageWrapperClassName={`near-places__image-wrapper`}
      {...props}
    />
  );
};

NearOfferCard.propTypes = {
  offer: offerType.isRequired,
};

export default NearOfferCard;
