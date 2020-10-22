import React from "react";
import PropTypes from "prop-types";
import {offerType} from '../../types';
import NearOfferCard from "../near-offer-card/near-offer-card";


const NearOffersList = (props) => {
  const {offers} = props;

  return (
    <div className="near-places__list places__list">
      {offers.map((offer, i) => (
        <NearOfferCard key={`${i}-${offer.id}`}
          offer={offer}
        />
      ))}
    </div>
  );
};

NearOffersList.propTypes = {
  offers: PropTypes.arrayOf(offerType).isRequired,
};

export default NearOffersList;
