export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORTING_TYPE: `CHANGE_SORTING_TYPE`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_AUTH_INFO: `SET_AUTH_INFO`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
};


export const changeCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city,
});

export const changeSortingType = (sortingType) => ({
  type: ActionType.CHANGE_SORTING_TYPE,
  payload: sortingType,
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const setAuthInfo = (data) => ({
  type: ActionType.SET_AUTH_INFO,
  payload: data,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});
