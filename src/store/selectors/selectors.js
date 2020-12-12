import {createSelector} from "reselect";
import {filterOffersByCity, sortOffersBySortyngType, sortReviews} from "../../utils";
import {AuthorizationStatus} from "../../const";

export const getAllOffers = (state) => state.DATA_OFFERS.allOffers.data;

export const getFavoritesOffers = (state) => state.DATA_OFFERS.favorites.data;

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

const getAuthorizationStatus = (state) => state.USER.authorizationStatus;

export const getIsAuth = createSelector(
    getAuthorizationStatus,
    (authStatus) => authStatus === AuthorizationStatus.AUTH
);

export const getAllOffersLoadingStatus = (state) => state.DATA_OFFERS.allOffers.status;

export const getOfferLoadingStatus = (state) => state.DATA_OFFERS.offer.status;

export const getFavoritesLoadingStatus = (state) => state.DATA_OFFERS.favorites.status;

export const getAuthInfo = (state) => state.USER.authInfo.data;

export const getOfferById = (state) => state.DATA_OFFERS.offer.data;

export const getNearestOffers = (state) => state.DATA_OFFERS.nearOffers.data;

const getReviewsBySelector = (state) => state.DATA.reviews.data;

export const getReviews = createSelector(
    getReviewsBySelector,
    (reviews) => sortReviews(reviews)
);

export const getCommentSendingStatus = (state) => state.DATA.comment.status;

export const getSendingBookmarkOffer = (state) => state.DATA.bookmark.data;
