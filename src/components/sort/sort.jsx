import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {SortingTypes} from "../../const.js";

class Sort extends PureComponent {
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
    const {activeSortingType} = this.props;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by </span>
        <span className="places__sorting-type" tabIndex="0" onClick={this.onActiveStateChange}>
          {activeSortingType}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${this.state.isActive && `places__options--opened`}`}>
          {Object.values(SortingTypes).map((sortingType) => (
            <li
              key={sortingType}
              className={`places__option ${sortingType === activeSortingType ? `places__option--active` : ``}`}
              tabIndex="0"
              onClick={() => this.onSortingTypeClick(sortingType)}>
              {sortingType}
            </li>
          ))}
        </ul>
      </form>
    );
  }
}

Sort.propTypes = {
  activeSortingType: PropTypes.oneOf(Object.values(SortingTypes)).isRequired,
  onChangeSortingType: PropTypes.func.isRequired
};

export default Sort;
