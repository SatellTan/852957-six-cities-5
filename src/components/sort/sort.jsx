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
    //this.onSortingTypeClick = this.onSortingTypeClick.bind(this)
  }

  onActiveStateChange() {
    this.setState((prevState) => ({isActive: !prevState.isActive}));
  }

  /*onSortingTypeClick (evt) {
    debugger
    //evt.preventDefault();
    const sortingType = evt.target;
    this.props.onChangeSortingType(sortingType);
  };*/

  render() {
    const {activeSortingType, onChangeSortingType} = this.props;

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
              onClick={() => onChangeSortingType(sortingType)}>
              {sortingType}
            </li>
          ))}
        </ul>
      </form>
    );
  }
};

Sort.propTypes = {
  //onClick={() => onChangeSortingType(sortingType)}>
  //onClick={this.onSortingTypeClick(sortingType)}>
  activeSortingType: PropTypes.oneOf(Object.values(SortingTypes)).isRequired,
  onChangeSortingType: PropTypes.func.isRequired
};

export default Sort;
