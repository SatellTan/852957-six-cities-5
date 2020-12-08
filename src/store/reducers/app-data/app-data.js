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
  reviews: {
    data: [],
    status: LoadingStatusForRequests.IDLE,
    error: null,
  },
  nearOffers: {
    data: [],
    status: LoadingStatusForRequests.IDLE,
    error: null,
  },
  favorites: {
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

    case ActionType.REQUEST_FAVORITES:
      Object.assign(state.favorites, {
        status: LoadingStatusForRequests.LOADING,
      });
      return extend(state);

    case ActionType.REQUEST_SUCCESS_FAVORITES:
      Object.assign(state.favorites, {
        status: LoadingStatusForRequests.SUCCEEDED,
        data: action.payload,
      });
      return extend(state);

    case ActionType.REQUEST_ERROR_FAVORITES:
      Object.assign(state.favorites, {
        status: LoadingStatusForRequests.FAILED,
        error: action.payload,
      });
      return extend(state);

    case ActionType.REQUEST_OFFER_BY_ID:
      Object.assign(state.offer, {
        status: LoadingStatusForRequests.LOADING,
      });
      return extend(state);

    case ActionType.REQUEST_SUCCESS_OFFER_BY_ID:
      Object.assign(state.offer, {
        status: LoadingStatusForRequests.SUCCEEDED,
        data: action.payload,
      });
      return extend(state);

    case ActionType.REQUEST_ERROR_OFFER_BY_ID:
      Object.assign(state.offer, {
        status: LoadingStatusForRequests.FAILED,
        error: action.payload,
      });
      return extend(state);

    case ActionType.REQUEST_REVIEWS:
      Object.assign(state.reviews, {
        status: LoadingStatusForRequests.LOADING,
      });
      return extend(state);

    case ActionType.REQUEST_SUCCESS_REVIEWS:
      Object.assign(state.reviews, {
        status: LoadingStatusForRequests.SUCCEEDED,
        data: action.payload,
      });
      return extend(state);

    case ActionType.REQUEST_ERROR_REVIEWS:
      Object.assign(state.reviews, {
        status: LoadingStatusForRequests.FAILED,
        error: action.payload,
      });
      return extend(state);

    case ActionType.REQUEST_NEAR_OFFERS:
      Object.assign(state.nearOffers, {
        status: LoadingStatusForRequests.LOADING,
      });
      return extend(state);

    case ActionType.REQUEST_SUCCESS_NEAR_OFFERS:
      Object.assign(state.nearOffers, {
        status: LoadingStatusForRequests.SUCCEEDED,
        data: action.payload,
      });
      return extend(state);

    case ActionType.REQUEST_ERROR_NEAR_OFFERS:
      Object.assign(state.nearOffers, {
        status: LoadingStatusForRequests.FAILED,
        error: action.payload,
      });
      return extend(state);
  }

  return state;
};

export {appData};
