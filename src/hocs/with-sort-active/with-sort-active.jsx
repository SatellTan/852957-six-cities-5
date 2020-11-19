import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {SortingTypes} from "../../const.js";


const withSortActive = (Component) => {
  class WithSortActive extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isActive: false,
      };

      this.onActiveStateChange = this.onActiveStateChange.bind(this);
      this.onSortingTypeClick = this.onSortingTypeClick.bind(this);
    }

    onActiveStateChange() {
      this.setState((prevState) => ({isActive: !prevState.isActive}));
    }

    onSortingTypeClick(sortingType) {
      if (sortingType !== this.props.activeSortingType) {
        this.props.onChangeSortingType(sortingType);
      }
      this.onActiveStateChange();
    }

    render() {
      const {isActive} = this.state;

      return (
        <Component
          {...this.props}
          sortIsActive={isActive}
          onActiveStateChange={this.onActiveStateChange}
          onSortingTypeClick={this.onSortingTypeClick}
        />
      );
    }
  }

  WithSortActive.propTypes = {
    activeSortingType: PropTypes.oneOf(Object.values(SortingTypes)).isRequired,
    onChangeSortingType: PropTypes.func.isRequired
  };


  return WithSortActive;
};

export default withSortActive;
