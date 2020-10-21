import React from "react";
import PropTypes from "prop-types";
import {offerType} from '../../types';
import NearOfferCard from "../near-offer-card/near-offer-card";


const NearOffersList = (props) => {
  const {offers} = props;

  return (
    <div className="near-places__list places__list">
      {offers.map((offer, i) => (
        <React.Fragment key={`${i}-${offer.id}`}>
          <NearOfferCard
            offer={offer}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

NearOffersList.propTypes = {
  offers: PropTypes.arrayOf(offerType).isRequired,
};

export default NearOffersList;
