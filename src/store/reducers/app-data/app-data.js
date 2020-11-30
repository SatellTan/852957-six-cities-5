import {extend} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  allOffers: [],
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        allOffers: action.payload,
      });
  }

  return state;
};

export {appData};
