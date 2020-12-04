export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORTING_TYPE: `CHANGE_SORTING_TYPE`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,

  REQUEST_OFFERS: `REQUEST_OFFERS`,
  REQUEST_SUCCESS_OFFERS: `REQUEST_SUCCESS_OFFERS`,
  REQUEST_ERROR_OFFERS: `REQUEST_ERROR_OFFERS`,

  REQUEST_AUTH_INFO: `REQUEST_AUTH_INFO`,
  REQUEST_SUCCESS_AUTH_INFO: `REQUEST_SUCCESS_AUTH_INFO`,
  REQUEST_ERROR_AUTH_INFO: `REQUEST_ERROR_AUTH_INFO`,
};


export const changeCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city,
});

export const changeSortingType = (sortingType) => ({
  type: ActionType.CHANGE_SORTING_TYPE,
  payload: sortingType,
});

export const requestAction = (dataType)=> ({
  type: ActionType[`REQUEST_${dataType}`],
});

export const requestSuccessAction = (dataType, data)=> ({
  type: ActionType[`REQUEST_SUCCESS_${dataType}`],
  payload: data,
});

export const requestErrorAction = (dataType, error)=> ({
  type: ActionType[`REQUEST_ERROR_${dataType}`],
  payload: error,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});
