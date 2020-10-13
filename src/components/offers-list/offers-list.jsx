import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {offerType} from '../../types';
import OfferCard from "../offer-card/offer-card";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: {},
    };
  }

  render() {
    const {offers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer, i) => (
          <React.Fragment key={`${i}-${offer.id}`}>
            <OfferCard
              offer={offer}
              onOfferCardHover={(newActiveOffer) => {
                this.setState(() => ({
                  activeOffer: newActiveOffer,
                }));
              }}
            />
          </React.Fragment>
        ))}
      </div>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerType).isRequired,
};

export default OffersList;
