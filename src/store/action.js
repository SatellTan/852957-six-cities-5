export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  CHANGE_SORTING_TYPE: `CHANGE_SORTING_TYPE`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  getOffers: (city) => ({
    type: ActionType.GET_OFFERS,
    payload: city,
  }),
  changeSortingType: (sortingType) => ({
    type: ActionType.CHANGE_SORTING_TYPE,
    payload: sortingType,
  }),
};
