import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {LoadingStatusForRequests, SendingStatusForRequests} from "../../../const";

const initialState = {
  reviews: {
    data: [],
    status: LoadingStatusForRequests.IDLE,
    error: null,
  },
  comment: {
    data: [],
    status: SendingStatusForRequests.IDLE,
    error: null,
  },
  bookmark: {
    data: [],
    status: SendingStatusForRequests.IDLE,
    error: null,
  },
};

const appData = (state = initialState, action) => {
  switch (action.type) {
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

    case ActionType.SENDING_COMMENT:
      Object.assign(state.comment, {
        status: SendingStatusForRequests.SENDING,
      });
      return extend(state);

    case ActionType.SENDING_SUCCESS_COMMENT:
      Object.assign(state.comment, {
        status: SendingStatusForRequests.SUCCEEDED,
        data: action.payload,
      });
      Object.assign(state.reviews, {
        data: action.payload,
      });
      return extend(state);

    case ActionType.SENDING_ERROR_COMMENT:
      Object.assign(state.comment, {
        status: SendingStatusForRequests.FAILED,
        error: action.payload,
      });
      return extend(state);

    case ActionType.SENDING_BOOKMARK:
      Object.assign(state.bookmark, {
        status: SendingStatusForRequests.SENDING,
      });
      return extend(state);

    case ActionType.SENDING_SUCCESS_BOOKMARK:
      Object.assign(state.bookmark, {
        status: SendingStatusForRequests.SUCCEEDED,
        data: action.payload,
      });

      return extend(state);

    case ActionType.SENDING_ERROR_BOOKMARK:
      Object.assign(state.bookmark, {
        status: SendingStatusForRequests.FAILED,
        error: action.payload,
      });
      return extend(state);
  }

  return state;
};

export {appData};
