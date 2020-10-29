import offers from "../mocks/offers";
import {START_CITY} from "../const.js";
import {extend, filterArrayOfObjectByField} from "../utils";
import {ActionType} from "./action";

const initialState = {
  city: START_CITY,
  allOffers: offers,
  offersInCity: filterArrayOfObjectByField(offers, `city`, START_CITY),
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
  }

  return state;
};

export {reducer};
