import {createSelector} from "reselect";
import {filterOffersByCity, sortOffersBySortyngType} from "../../utils";

export const getAllOffers = (state) => state.DATA.allOffers.data;

export const getActiveCity = (state) => state.PROCESS.city;

export const getActiveSortingType = (state) => state.PROCESS.activeSortingType;

export const getSortedOffersByCity = createSelector(
    getAllOffers,
    getActiveCity,
    getActiveSortingType,
    (offers, city, sortingType) => {
      return sortOffersBySortyngType(filterOffersByCity(offers, city), sortingType);
    }
);

export const getAuthorizationStatus = (state) => state.USER.authorizationStatus;

export const getAuthInfo = (state) => state.USER.authInfo.data;
