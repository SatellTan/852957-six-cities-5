import React from "react";
import PropTypes from "prop-types";

import {SortingTypes} from "../../const.js";

const Sort = (props) => {
  const {activeSortingType, sortIsActive, onActiveStateChange, onSortingTypeClick} = props;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0" onClick={onActiveStateChange}>
        {activeSortingType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      <ul className={`places__options places__options--custom ${sortIsActive && `places__options--opened`}`}>
        {Object.values(SortingTypes).map((sortingType) => (
          <li
            key={sortingType}
            className={`places__option ${sortingType === activeSortingType ? `places__option--active` : ``}`}
            tabIndex="0"
            onClick={() => onSortingTypeClick(sortingType)}>
            {sortingType}
          </li>
        ))}
      </ul>
    </form>
  );
};

Sort.propTypes = {
  activeSortingType: PropTypes.oneOf(Object.values(SortingTypes)).isRequired,
  sortIsActive: PropTypes.bool.isRequired,
  onActiveStateChange: PropTypes.func.isRequired,
  onSortingTypeClick: PropTypes.func.isRequired,
};

export default Sort;
