import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {LoadingStatusForRequests} from "../../../const";

const initialState = {
  allOffers: {
    data: [],
    status: LoadingStatusForRequests.IDLE,
    error: null,
  },
  offer: {
    data: {},
    status: LoadingStatusForRequests.IDLE,
    error: null,
  },
  comments: {
    data: [],
    status: LoadingStatusForRequests.IDLE,
    error: null,
  },
  favorite: {
    data: [],
    status: LoadingStatusForRequests.IDLE,
    error: null,
  },
  nearby: {
    data: [],
    status: LoadingStatusForRequests.IDLE,
    error: null,
  },
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUEST_OFFERS:
      Object.assign(state.allOffers, {
        status: LoadingStatusForRequests.LOADING,
      });
      return extend(state);

    case ActionType.REQUEST_SUCCESS_OFFERS:
      Object.assign(state.allOffers, {
        status: LoadingStatusForRequests.SUCCEEDED,
        data: action.payload,
      });
      return extend(state);

    case ActionType.REQUEST_ERROR_OFFERS:
      Object.assign(state.allOffers, {
        status: LoadingStatusForRequests.FAILED,
        error: action.payload,
      });
      return extend(state);
  }

  return state;
};

export {appData};
