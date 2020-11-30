import {loadOffers} from "./action";
import {adaptOffersToClient} from "./adapters/adapters";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(loadOffers(adaptOffersToClient(data))))
);
