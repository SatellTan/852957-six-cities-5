import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {SortingTypes} from "../../const.js";
import {offerType} from '../../types';


const withActiveOffer = (Component) => {
  class WithActiveOffer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeOffer: null,
      };

      this.onOfferCardMouseEnter = this.onOfferCardMouseEnter.bind(this);
      this.onOfferCardMouseLeave = this.onOfferCardMouseLeave.bind(this);
    }

    onOfferCardMouseEnter(evt, newActiveOffer) {
      evt.preventDefault();
      this.setState(() => ({
        activeOffer: newActiveOffer,
      }));
    }

    onOfferCardMouseLeave(evt) {
      evt.preventDefault();
      this.setState(() => ({
        activeOffer: null,
      }));
    }

    render() {
      const {activeOffer} = this.state;

      return (
        <Component
          {...this.props}
          activeOffer={activeOffer}
          onOfferCardMouseEnter={this.onOfferCardMouseEnter}
          onOfferCardMouseLeave={this.onOfferCardMouseLeave}
        />
      );
    }
  }

  WithActiveOffer.propTypes = {
    offers: PropTypes.arrayOf(offerType).isRequired,
    city: PropTypes.string.isRequired,
    onChangeCity: PropTypes.func.isRequired,
    activeSortingType: PropTypes.oneOf(Object.values(SortingTypes)).isRequired,
    onChangeSortingType: PropTypes.func.isRequired
  };

  return WithActiveOffer;
};

export default withActiveOffer;
