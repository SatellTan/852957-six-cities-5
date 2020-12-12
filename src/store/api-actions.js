import {
  requestAction,
  requestSuccessAction,
  requestErrorAction,
  requireAuthorization,
  redirectToRoute,
  sendingAction,
  sendingSuccessAction,
  sendingErrorAction,
  replaceOffer} from "./action";
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

export const sendComment = ({offerId, comment, rating, clearForm}) => (dispatch, _getState, api) => {
  dispatch(sendingAction(`COMMENT`));
  api.post(`/comments/${offerId}`, {comment, rating})
    .then(({data}) => dispatch(sendingSuccessAction(`COMMENT`, adaptReviewsToClient(data))))
    .then(() => clearForm())
    .catch((error) => {
      dispatch(sendingErrorAction(`COMMENT`, error));
      throw error;
    });
};

export const postFavorite = (id, status) => (dispatch, _getState, api) => {
  dispatch(sendingAction(`BOOKMARK`));
  api.post(`/favorite/${id}/${status}`)
    .then(({data}) => {
      dispatch(sendingSuccessAction(`BOOKMARK`, adaptOfferToClient(data)));
      dispatch(replaceOffer(adaptOfferToClient(data)));
    })
    .then(() => dispatch(fetchFavoritesList()))
    .catch((error) => {
      dispatch(sendingErrorAction(`BOOKMARK`, error));
      dispatch(redirectToRoute(AppRoute.LOGIN));
      throw error;
    });
};
