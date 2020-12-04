import {
  requestAction,
  requestSuccessAction,
  requestErrorAction,
  requireAuthorization,
  redirectToRoute} from "./action";
import {AuthorizationStatus, AppRoute, APIRoute} from "../const";
import {adaptOffersToClient, adaptAuthInfoToClient} from "./adapters/adapters";

export const fetchOffersList = () => (dispatch, _getState, api) => {
  dispatch(requestAction(`OFFERS`));
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(requestSuccessAction(`OFFERS`, adaptOffersToClient(data))))
    .catch((error) => {
      dispatch(requestErrorAction(`OFFERS`, error));
    });
};

export const checkAuth = () => (dispatch, _getState, api) => {
  dispatch(requestAction(`AUTH_INFO`));
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(requestSuccessAction(`AUTH_INFO`, adaptAuthInfoToClient(data))))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((error) => {
      dispatch(requestErrorAction(`AUTH_INFO`, error));
    });
};

// Коды ответов:
// 200 ОК
// 400 Bad request
export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => dispatch(requestSuccessAction(`AUTH_INFO`, adaptAuthInfoToClient(data))))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
    .catch((error) => {
      dispatch(requestErrorAction(`AUTH_INFO`, error));
      throw error;
    })
);
