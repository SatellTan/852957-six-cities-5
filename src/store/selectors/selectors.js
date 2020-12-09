import {createSelector} from "reselect";
import {filterOffersByCity, sortOffersBySortyngType, sortReviews} from "../../utils";

export const getAllOffers = (state) => state.DATA.allOffers.data;

export const getFavoritesOffers = (state) => state.DATA.favorites.data;

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

export const getAllOffersLoadingStatus = (state) => state.DATA.allOffers.status;

export const getOfferLoadingStatus = (state) => state.DATA.offer.status;

export const getFavoritesLoadingStatus = (state) => state.DATA.favorites.status;

export const getAuthInfo = (state) => state.USER.authInfo.data;

export const getOfferById = (state) => state.DATA.offer.data;

export const getNearOffers = (state) => state.DATA.nearOffers.data;

const getReviewsBySelector = (state) => state.DATA.reviews.data;

export const getReviews = createSelector(
    getReviewsBySelector,
    (reviews) => sortReviews(reviews)
);

export const getCommentSendingStatus = (state) => state.DATA.comment.status;
