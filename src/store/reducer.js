import offers from "../mocks/offers";
import {START_CITY, SortingTypes} from "../const.js";
import {extend, filterOffersByCity, sortOffersBySortyngType} from "../utils";
import {ActionType} from "./action";

const initialState = {
  city: START_CITY,
  allOffers: offers,
  offersInCity: filterOffersByCity(offers, START_CITY),
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
        offersInCity: filterOffersByCity(state.allOffers, action.payload),
      });

    case ActionType.CHANGE_SORTING_TYPE:
      return extend(state, {
        activeSortingType: action.payload,
        offersInCity: sortOffersBySortyngType(filterOffersByCity(state.allOffers, state.city), action.payload),
      });
  }

  return state;
};

export {reducer};
