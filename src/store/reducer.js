import offers from "../mocks/offers";
import {START_CITY, SortingTypes} from "../const.js";
import {extend, filterArrayOfObjectByField, sortOffersBySortyngType} from "../utils";
import {ActionType} from "./action";

const initialState = {
  city: START_CITY,
  allOffers: offers,
  offersInCity: filterArrayOfObjectByField(offers, `city`, START_CITY),
  activeSortingType: SortingTypes.POPULAR,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
      });

    case ActionType.GET_OFFERS:
      return extend(state, {
        offersInCity: filterArrayOfObjectByField(state.allOffers, `city`, action.payload),
      });

    case ActionType.CHANGE_SORTING_TYPE:
      return extend(state, {
        activeSortingType: action.payload,
        offersInCity: sortOffersBySortyngType(state.offersInCity, action.payload),
      });
  }

  return state;
};

export {reducer};
