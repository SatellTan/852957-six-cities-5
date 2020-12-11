import React from "react";
import PropTypes from "prop-types";

import {offerType} from '../../types';
import OfferCard from "../offer-card/offer-card";

const OffersList = (props) => {
  const {offers, onOfferCardMouseEnter, onOfferCardMouseLeave} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, i) => (
        <React.Fragment key={`${i}-${offer.id}`}>
          <OfferCard
            offer={offer}
            onOfferCardMouseEnter={onOfferCardMouseEnter}
            onOfferCardMouseLeave={onOfferCardMouseLeave}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerType).isRequired,
  onOfferCardMouseEnter: PropTypes.func,
  onOfferCardMouseLeave: PropTypes.func,
};

export default OffersList;
