import {START_CITY, SortingTypes} from "../const.js";
import {extend} from "../utils";
import {ActionType} from "./action";

const initialState = {
  city: START_CITY,
  allOffers: [],
  activeSortingType: SortingTypes.POPULAR,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
      });

    case ActionType.CHANGE_SORTING_TYPE:
      return extend(state, {
        activeSortingType: action.payload,
      });

    case ActionType.LOAD_OFFERS:
      return extend(state, {
        allOffers: action.payload,
      });
  }

  return state;
};

export {reducer};
