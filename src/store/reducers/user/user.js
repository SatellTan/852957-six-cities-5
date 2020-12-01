import {AuthorizationStatus} from "../../../const";
import {ActionType} from "../../action";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
    case ActionType.SET_AUTH_INFO:
      const userInfo = action.payload.data;
      return Object.assign({}, state, {
        authInfo: {
          avatarUrl: userInfo.avatar_url,
          email: userInfo.email,
          id: userInfo.id,
          isPro: userInfo.is_pro,
          name: userInfo.name,
        }
      });
  }

  return state;
};

export {user};
