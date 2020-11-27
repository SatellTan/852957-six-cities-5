import React, {PureComponent} from "react";

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

  return WithActiveOffer;
};

export default withActiveOffer;
