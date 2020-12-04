import {AuthorizationStatus, LoadingStatusForRequests} from "../../../const";
import {extend} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: {
    data: {},
    status: LoadingStatusForRequests.IDLE,
    error: null,
  },
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });

    case ActionType.REQUEST_AUTH_INFO:
      Object.assign(state.authInfo, {
        status: LoadingStatusForRequests.LOADING,
      });
      return extend(state);

    case ActionType.REQUEST_SUCCESS_AUTH_INFO:
      Object.assign(state.authInfo, {
        status: LoadingStatusForRequests.SUCCEEDED,
        data: action.payload,
      });
      return extend(state);

    case ActionType.REQUEST_ERROR_AUTH_INFO:
      Object.assign(state.authInfo, {
        status: LoadingStatusForRequests.FAILED,
        error: action.payload,
      });
      return extend(state);
  }

  return state;
};

export {user};
