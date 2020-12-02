import {loadOffers, requireAuthorization, setAuthInfo, redirectToRoute} from "./action";
import {AuthorizationStatus, AppRoute, APIRoute} from "../const";
import {adaptOffersToClient, adaptAuthInfoToClient} from "./adapters/adapters";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(loadOffers(adaptOffersToClient(data))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then((data) => dispatch(setAuthInfo(adaptAuthInfoToClient(data))))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then((data) => dispatch(setAuthInfo(adaptAuthInfoToClient(data))))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
    .catch((err) => {
      throw err;
    })
);
