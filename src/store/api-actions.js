import {
  requestAction,
  requestSuccessAction,
  requestErrorAction,
  requireAuthorization,
  redirectToRoute} from "./action";
import {AuthorizationStatus, AppRoute, APIRoute} from "../const";
import {adaptOffersToClient, adaptOfferToClient, adaptReviewsToClient, adaptAuthInfoToClient} from "./adapters/adapters";

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

export const fetchFavoritesList = () => (dispatch, _getState, api) => {
  dispatch(requestAction(`FAVORITES`));
  api.get(APIRoute.FAVORITE)
    .then(({data}) => dispatch(requestSuccessAction(`FAVORITES`, adaptOffersToClient(data))))
    .catch((error) => {
      dispatch(requestErrorAction(`FAVORITES`, error));
    });
};

export const fetchOfferById = (id) => (dispatch, _getState, api) => {
  dispatch(requestAction(`OFFER_BY_ID`));
  api.get(`/hotels/${id}`)
    .then(({data}) => dispatch(requestSuccessAction(`OFFER_BY_ID`, adaptOfferToClient(data))))
    .catch((error) => {
      dispatch(requestErrorAction(`OFFER_BY_ID`, error));
    });
};

export const fetchReviews = (id) => (dispatch, _getState, api) => {
  dispatch(requestAction(`REVIEWS`));
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(requestSuccessAction(`REVIEWS`, adaptReviewsToClient(data))))
    .catch((error) => {
      dispatch(requestErrorAction(`REVIEWS`, error));
    });
};

export const fetchNearOffers = (id) => (dispatch, _getState, api) => {
  dispatch(requestAction(`NEAR_OFFERS`));
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => dispatch(requestSuccessAction(`NEAR_OFFERS`, adaptOffersToClient(data))))
    .catch((error) => {
      dispatch(requestErrorAction(`NEAR_OFFERS`, error));
    });
};
